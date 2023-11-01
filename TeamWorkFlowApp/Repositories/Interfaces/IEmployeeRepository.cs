using TeamWorkFlowApp.Models;

namespace TeamWorkFlowApp.Repositories.Interfaces
{
    public interface IEmployeeRepository
    {
        public Task<IEnumerable<Order>> GetEmployeeOrdersAsync(int employeeId);
        public Task<IEnumerable<Models.Task>> GetOrderTasksAsync(int orderId);
        public System.Threading.Tasks.Task CreateTaskAsync(Models.Task task);
        public System.Threading.Tasks.Task UpdateTaskAsync(Models.Task task);
        public System.Threading.Tasks.Task DeleteTaskAsync(int taskId);
        public Task<PersonalData> GetPersonalDataAsync(int employeeId);
        public System.Threading.Tasks.Task UpdatePersonalDataAsync(PersonalData personalData);
    }
}
