using Dapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using TeamWorkFlowApp.Data;
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
        private readonly ApplicationContext _context;

        public OrdererController(IOrdererService ordererService, ApplicationContext context) {

            _context = context;
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
        [HttpPut("order")]
        public async System.Threading.Tasks.Task UpdateOrder([FromBody] Order order)
        {
            string updateQuery = "update `order` " +
                "set company_name = @company_name," +
                "description = @description," +
                "price = @price," +
                "stage_id = @stage_id," +
                "contract_id = @contract_id " +
                "where id = @id;";
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(updateQuery, order);
            }
        }
        [HttpDelete("order")]
        public async System.Threading.Tasks.Task DeleteOrder([FromQuery] int id)
        {
            using (var connection = _context.CreateConnection())
            {
                connection.Open();
                using (var trans = connection.BeginTransaction())
                {
                    await connection.ExecuteAsync("delete from order_has_employee where order_id = @id", new {id = id});
                    await connection.ExecuteAsync("delete from `order` where id = @id;", new { id = id });
                    trans.Commit();

                }
            }
        }
    }
}
