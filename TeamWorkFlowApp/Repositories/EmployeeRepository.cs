using Dapper;
using TeamWorkFlowApp.Data;
using TeamWorkFlowApp.Models;
using TeamWorkFlowApp.Repositories.Interfaces;

namespace TeamWorkFlowApp.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly ApplicationContext _context;
        
        public EmployeeRepository(ApplicationContext context) {
            _context = context;
        }

        public async System.Threading.Tasks.Task CreateTaskAsync(Models.Task task)
        {
            string insertQuery = "insert into task (name, description, order_id, task_status_id) values" +
                "(@name, @description, @order_id, @task_status_id);";
            using(var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(insertQuery, task);
            }

        }

        public async System.Threading.Tasks.Task DeleteTaskAsync(int taskId)
        {
            string deleteQuery = "delete from task where id = @taskId;";
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(deleteQuery, new { taskId = taskId});
            }
        }

        public async Task<IEnumerable<Order>> GetEmployeeOrdersAsync(int employeeId)
        {
            string selectQuery = "select * from `order` where id in (select order_id from order_has_employee where employee_id = @employeeId);";
            IEnumerable<Order> orders = new List<Order>();
            using(var connection = _context.CreateConnection())
            {
                orders = await connection.QueryAsync<Order>(selectQuery, new { employeeId = employeeId });
            }
            return orders;
        }

        public async Task<IEnumerable<Models.Task>> GetOrderTasksAsync(int orderId)
        {
            string selectQuery = "select * from task where order_id = @orderId;";
            IEnumerable<Models.Task> tasks = new List<Models.Task>();
            using(var connection = _context.CreateConnection())
            {
                tasks = await connection.QueryAsync<Models.Task>(selectQuery, new { orderId = orderId });
            }
            return tasks;
        }

        public async System.Threading.Tasks.Task UpdateTaskAsync(Models.Task task)
        {
           
            string updateQuery = "update task " +
                "set name = @name, description = @description, " +
                "order_id = @order_id, task_status_id=@task_status_id " +
                "where id = @id;";
            using(var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(updateQuery, task);
            }

        }
    }
}
