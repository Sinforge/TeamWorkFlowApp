﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TeamWorkFlowApp.Configuration;
using TeamWorkFlowApp.DTO;
using TeamWorkFlowApp.Models;
using TeamWorkFlowApp.Repositories.Interfaces;
using TeamWorkFlowApp.Services.Interfaces;

namespace TeamWorkFlowApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IOptions<Audience> _options;
        public UserController(IUserService userService, IOptions<Audience> options)
        {
            _options = options;
            _userService = userService;
        }


        [HttpPost]
        [Route("registration")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Registration([FromBody] UserDTO userDTO)
        {
            if (await _userService.CreateUserAsync(new User
            {
                login = userDTO.login,
                password = userDTO.password,
                role_id = 1,

            })) return StatusCode(201);
            else return StatusCode(400);
        }

        [HttpPost]
        [Route("authorize")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Authorize([FromBody] UserDTO loginDTO)
        {
            User? user = await _userService.CheckUserCredentials(loginDTO.login, loginDTO.password);
            if (user != null)
            {
                JwtResponse token = await CreateToken(user);
                return Ok(token);
            }
            else
            {
                return BadRequest();
            }

        }
        [NonAction]
        private async Task<JwtResponse> CreateToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim("id", user.id.ToString()),
                new Claim("employee_id", user.employee_id.ToString()),
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.login),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, await _userService.GetUserRoleById(user.role_id))
            };
            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_options.Value.Secret));
            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = signingKey,
                ValidateIssuer = true,
                ValidIssuer = _options.Value.Iss,
                ValidateAudience = true,
                ValidAudience = _options.Value.Aud,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero,
                RequireExpirationTime = true,

            };

            var jwt = new JwtSecurityToken(
                issuer: _options.Value.Iss,
                audience: _options.Value.Aud,
                claims: claims,
                notBefore: DateTime.Now,
                expires: DateTime.Now.Add(TimeSpan.FromDays(1)),
                signingCredentials: new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256)
            );

            var encodedJWT = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new JwtResponse(encodedJWT, (int)TimeSpan.FromDays(1).TotalSeconds);
            return response;
        }
        [NonController]
        private record JwtResponse(string? access_token, int expires_in);



    }
}
