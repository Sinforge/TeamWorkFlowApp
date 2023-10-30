using TeamWorkFlowApp.Models;
using TeamWorkFlowApp.Repositories.Interfaces;
using TeamWorkFlowApp.Services.Interfaces;

namespace TeamWorkFlowApp.Services
{
    public class OrdererService : IOrdererService
    {
        private readonly IOrdererRepository _ordererRepository;
        public OrdererService(IOrdererRepository ordererRepository) {
            _ordererRepository = ordererRepository;
        }
        public async System.Threading.Tasks.Task CreateOrderAsync(Order order)
        {
            await _ordererRepository.CreateOrderAsync(order);


        }

        public async Task<IEnumerable<Order>> GetUserOrdersAsync(string login)
        {
            return await _ordererRepository.GetUserOrdersAsync(login);
        }
    }
}
