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
    [ApiController]
    [Authorize(Roles ="Employee, Admin")]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }
        // Crud for tasks
        [HttpGet("order")]
        public async Task<IEnumerable<Order>> GetEmployeeOrders()
        {
            return await _employeeService.GetEmployeeOrdersAsync(int.Parse(HttpContext.User.Claims.FirstOrDefault(c => c.Type == "employee_id").Value));
        }
        [HttpGet("order/{orderId}/task")]
        public async Task<IEnumerable<Models.Task>> GetOrderTasks([FromRoute] int orderId)
        {
            return await _employeeService.GetOrderTasksAsync(orderId);
        }
        [HttpPost("order/{orderId}/task")]
        public async System.Threading.Tasks.Task CreateOrderTask([FromRoute] int orderId, [FromBody] CreateTaskDTO createTaskDTO)
        {
            _ = _employeeService.CreateOrderTaskAsync(
                new Models.Task
                {
                    name = createTaskDTO.name,
                    description = createTaskDTO.description,
                    order_id = createTaskDTO.order_id,
                    task_status_id = 1
                }
             );
        }
        [HttpPut("order/{orderId}/task")]
        public async System.Threading.Tasks.Task UpdateOrderTask([FromRoute] int orderId, [FromBody] Models.Task task) => _ = _employeeService.UpdateTaskAsync(task);
        [HttpDelete("order/{orderId}/task")]
        public async System.Threading.Tasks.Task DeleteTask([FromRoute] int orderId, [FromQuery] int id) => _ = _employeeService.DeleteTaskAsync(id);
        [HttpGet("personal_data")]
        public  async Task<PersonalData> GetPersonalData()
        {
            return await _employeeService.GetPersonalDataAsync(int.Parse(HttpContext.User.Claims.FirstOrDefault(c => c.Type == "employee_id").Value));

        }
        [HttpPost("personal_data")]
        public async System.Threading.Tasks.Task UpdatePersonalData([FromBody] PersonalData personalData)
        {
            _ = _employeeService.UpdatePersonalDataAsync(personalData);


        }
    }
}
