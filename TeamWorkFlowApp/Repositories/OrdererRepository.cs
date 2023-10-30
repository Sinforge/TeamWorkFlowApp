using Dapper;
using TeamWorkFlowApp.Data;
using TeamWorkFlowApp.Models;
using TeamWorkFlowApp.Repositories.Interfaces;

namespace TeamWorkFlowApp.Repositories
{
    public class OrdererRepository : IOrdererRepository
    {
        private readonly ApplicationContext _context;
        private readonly ILogger<IOrdererRepository> _logger;
        public OrdererRepository(ApplicationContext context, ILogger<IOrdererRepository> logger)
        {
            _logger = logger;
            _context = context;
        }
        public async System.Threading.Tasks.Task CreateOrderAsync(Order order)
        {
            string insertQuery = "insert into `order`  (company_name, description, price, stage_id, contract_id) " +
                "values (@company_name, @description, @price, 1, @contract_id);";
            using(var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(insertQuery, order);
            }
        }

        public async System.Threading.Tasks.Task<IEnumerable<Order>> GetUserOrdersAsync(string login)
        {
            string selectQuery = "select * from `order` where company_name = @login";
            using(var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<Order>(selectQuery,  new {login = login});
            }
        }
    }
}