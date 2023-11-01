using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using TeamWorkFlowApp.DTO;
using TeamWorkFlowApp.Models;
using TeamWorkFlowApp.Services.Interfaces;

namespace TeamWorkFlowApp.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = "User, Admin")]
    [ApiController]
    public class OrdererController : ControllerBase
    {
        private readonly IOrdererService _ordererService;

        public OrdererController(IOrdererService ordererService) {
            _ordererService = ordererService;
        }

        
        [HttpPost("order")]
        public async Task<IActionResult> CreateOrder([FromBody] CreateOrderDTO orderDTO)
        {
            
            await _ordererService.CreateOrderAsync(new Models.Order
            {
                company_name = HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimsIdentity.DefaultNameClaimType).Value,
                description = orderDTO.description,
                price =orderDTO.price,
                stage_id = 1,
                contract_id = orderDTO.contract_id
            });
            return Ok();
        }
        [HttpGet("order")]
        public async Task<IEnumerable<Order>> GetUserOrders()
        {
            return await _ordererService
                .GetUserOrdersAsync(HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimsIdentity.DefaultNameClaimType).Value);
        }
    }
}
