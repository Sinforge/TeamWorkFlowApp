using TeamWorkFlowApp.Models;

namespace TeamWorkFlowApp.Services.Interfaces
{
    public interface IEmployeeService
    {
        public Task<IEnumerable<Order>> GetEmployeeOrdersAsync(int employeeId);
        public Task<IEnumerable<Models.Task>> GetOrderTasksAsync(int orderId);
        public System.Threading.Tasks.Task CreateOrderTaskAsync(Models.Task task);
        public System.Threading.Tasks.Task UpdateTaskAsync(Models.Task task);
        public System.Threading.Tasks.Task DeleteTaskAsync(int taskId);
    }
}
