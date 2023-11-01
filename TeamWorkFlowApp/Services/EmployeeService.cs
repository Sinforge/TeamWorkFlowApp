using TeamWorkFlowApp.Models;
using TeamWorkFlowApp.Repositories.Interfaces;
using TeamWorkFlowApp.Services.Interfaces;

namespace TeamWorkFlowApp.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;
        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        public async System.Threading.Tasks.Task CreateOrderTaskAsync(Models.Task task)
        {
            await _employeeRepository.CreateTaskAsync(task);
        }

        public async System.Threading.Tasks.Task DeleteTaskAsync(int taskId)
        {
            await _employeeRepository.DeleteTaskAsync(taskId);
        }

        public async Task<IEnumerable<Order>> GetEmployeeOrdersAsync(int employeeId)
        {
            return await _employeeRepository.GetEmployeeOrdersAsync(employeeId);
        }

        public async Task<IEnumerable<Models.Task>> GetOrderTasksAsync(int orderId)
        {
            return await _employeeRepository.GetOrderTasksAsync(orderId);
        }

        public async Task<PersonalData> GetPersonalDataAsync(int employeeId)
        {
            return await _employeeRepository.GetPersonalDataAsync(employeeId);
        }

        public async System.Threading.Tasks.Task UpdatePersonalDataAsync(PersonalData personalData)
        {
            await _employeeRepository.UpdatePersonalDataAsync(personalData);
        }

        public async System.Threading.Tasks.Task UpdateTaskAsync(Models.Task task)
        {
            await _employeeRepository.UpdateTaskAsync(task);
        }
    }
}
