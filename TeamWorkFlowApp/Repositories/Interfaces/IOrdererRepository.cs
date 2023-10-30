using TeamWorkFlowApp.Models;
using Task = System.Threading.Tasks.Task;

namespace TeamWorkFlowApp.Repositories.Interfaces
{
    public interface IOrdererRepository
    {
        public Task CreateOrderAsync(Order order);
        public Task<IEnumerable<Order>> GetUserOrdersAsync(string login);
    }
}
