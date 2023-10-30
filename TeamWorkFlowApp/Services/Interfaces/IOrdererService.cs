using TeamWorkFlowApp.Models;
using Task = System.Threading.Tasks.Task;

namespace TeamWorkFlowApp.Services.Interfaces
{
    public interface IOrdererService
    {
        public Task CreateOrderAsync(Order order);
        public Task<IEnumerable<Order>> GetUserOrdersAsync(string login);
    }
}
