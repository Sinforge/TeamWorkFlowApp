using Dapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using TeamWorkFlowApp.Data;
using TeamWorkFlowApp.DTO;
using TeamWorkFlowApp.Models;
using TeamWorkFlowApp.Services.Interfaces;
using Contract = TeamWorkFlowApp.Models.Contract;
using PersonalData = TeamWorkFlowApp.Models.PersonalData;

namespace TeamWorkFlowApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    //Can do any crud operation with any table
    // To do

    // Show all table data
    public class AdminController : ControllerBase
    {
        private readonly ApplicationContext _context;
        public AdminController(ApplicationContext context, IEmployeeService employeeService) {
            _context = context;
        }

        #region Contract methods
        public async Task<IEnumerable<Contract>> GeAllContracts()
        {
            string selectQuery = "select * from contract;";
            using(var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<Contract>(selectQuery);
            }

        }
        public async System.Threading.Tasks.Task UpdateContract([FromBody] Contract contract) {
            string updateQuery = "update contract set conditions = @conditions where id = @id;";
            using(var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(updateQuery, contract);
            }
        }
        public async System.Threading.Tasks.Task DeleteContract([FromQuery] int id) {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("delete from contract where id = @id;", new { id = id });
            }
        }
        
        public async System.Threading.Tasks.Task CreateContract([FromBody] Contract contract) { 
            using(var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("insert into contract (conditions) values (@conditions);", contract);
            }
        }
        #endregion

        #region Employee methods
        public async Task<IEnumerable<Employee>> GeAllEmployee()
        {
            using(var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<Employee>("select * from employee");
            }
        }
        public async System.Threading.Tasks.Task UpdateEmployee([FromBody] Employee employee)
        {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("update employee set name= @name," +
                    "count_completed_orders = @count_completed_orders, " +
                    "personal_data_id = @personal_data_id," +
                    "specialization_id = @specialization_id where id = @id", employee);
            }

        }
        public async System.Threading.Tasks.Task DeleteEmployee([FromQuery] int id) {
            using(var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("delete employee where id = @id", new { id = id });
            }
        }

        public async System.Threading.Tasks.Task CreateEmployee([FromBody] Employee employee)
        {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("insert into employee (name, personal_data_id, specialization_id) " +
                    "values (@name, @personal_data_id, @specialization_id)", employee);
            }
        }
        #endregion

        #region Order methods
        public async Task<IEnumerable<Order>> GeAllOrders()
        {
            string selectQuery = "select * from `order`;";
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<Order>(selectQuery);
            }


        }
        public async System.Threading.Tasks.Task UpdateOrder([FromBody] Order order)
        {
            string updateQuery = "update `order` " +
                "set company_name = @company_name," +
                "description = @description," +
                "price = @price," +
                "stage_id = @stage_id," +
                "contract_id = @contract_id," +
                "where id = @id;";
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(updateQuery, order);
            }
        }
        public async System.Threading.Tasks.Task DeleteOrder([FromQuery] int id)
        {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("delete from `order` where id = @id;", new { id = id });
            }
        }

        public async System.Threading.Tasks.Task CreateEmployee([FromBody] Order order)
        {
            string insertQuery = "insert into `order` (company_name, description, price, stage_id, contract_id)" +
                "values (@company_name, @description, @price, @stage_id, @contract_id)";
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(insertQuery, order);
            }
        }
        #endregion

        #region Personal data methods
        public async Task<IEnumerable<PersonalData>> GeAllPersonalData()
        {
            string selectQuery = "select * from personal_data;";
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<PersonalData>(selectQuery);
            }


        }
        public async System.Threading.Tasks.Task UpdatePersonalData([FromBody] PersonalData personalData)
        {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("update personal_data set email= @email," +
                    "address = @address, " +
                    "health_status_id = @health_status_id" +
                    "where id = @id;", personalData);
            }
        }

        public async System.Threading.Tasks.Task DeletePersonalData([FromQuery] int id) {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("delete from personal_data where id = @id;", new { id = id });
            }
        }

        public async System.Threading.Tasks.Task CreatePersonalData([FromBody] PersonalData personalData)
        {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("insert into personal_data (email, address) values (@email, @address);", personalData);
            }
        }
        #endregion

        #region Specialization
        public async Task<IEnumerable<Specialization>> GeAllSpecializations()
        {
            string selectQuery = "select * from specialization;";
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<Specialization>(selectQuery);
            }
        }
        public async System.Threading.Tasks.Task UpdateSpecialization([FromBody] Specialization specialization)
        {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("update specialization set name= @name," +
                    "payment = @payment, " +
                    "where id = @id;", specialization);
            }
        }
        public async System.Threading.Tasks.Task DeleteSpecialization([FromQuery] int id) {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("delete from specialization where id = @id;", new { id = id });
            }
        }

        public async System.Threading.Tasks.Task CreateSpecialization([FromBody] Specialization specialization)
        {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("insert into specialization (name, payment) values (@name, @payment);", specialization);
            }
        }

        #endregion

        #region Task methods
        public async Task<IEnumerable<Models.Task>> GeAllTasks()
        {
            string selectQuery = "select * from task;";
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<Models.Task>(selectQuery);
            }

        }
        public async System.Threading.Tasks.Task UpdateTask([FromBody] Models.Task task)
        {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("update task set name= @name," +
                    "description = @description, " +
                    "order_id = @order_id, " +
                    "task_status_id = @task_status_id" +
                    "where id = @id;", task);
            }

        }

        public async System.Threading.Tasks.Task DeleteTask([FromQuery] int id) {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("delete from task where id = @id;", new { id = id });
            }
        }
                          
        public async System.Threading.Tasks.Task CreateTask([FromBody] Models.Task task)
        {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("insert into task set (name, description, order_id, task_status_id) values" +
                    "(@name, @description, @order_id, 1)", task);
            }

        }
        #endregion

        #region User methods
        public async Task<IEnumerable<User>> GeAllUsers()
        {
            string selectQuery = "select * from user;";
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<User>(selectQuery);
            }
        }
        public async System.Threading.Tasks.Task UpdateUser([FromBody] User user)
        {
            user.password = new PasswordHasher<object?>().HashPassword(null, user.password);
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("update user set login= @login," +
                    "role_id = @role_id, " +
                    "employee_id = @employee_id, " +
                    "where id = @id;", user);
            }
        }
        public async System.Threading.Tasks.Task DeleteUser([FromQuery] int id) {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync("delete from user where id = @id;", new { id = id });
            }
        }


        #endregion

        #region Employee - order methods
        public async Task<IEnumerable<OrderHasEmployee>> GeAllEmployeeOrderAssociation()
        {

            string selectQuery = "select * from order_has_employee;";
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<OrderHasEmployee>(selectQuery);
            }
        }
        public async System.Threading.Tasks.Task AddEmployeeToOrder([FromBody] OrderHasEmployee association)
        {
            string insertQuery = "insert into order_has_employee values (@order_id, @employee_id)";
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(insertQuery, association);
            }

        }
        public async System.Threading.Tasks.Task RemoveEmployeeFromOrder([FromBody] OrderHasEmployee association) {
            string deleteQuery = "delete from order_has_employee where order_id = @order_id and employee_id = @employee_id";
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(deleteQuery, association);
            }
        }

        #endregion
    }
    [NonController]
    public record OrderHasEmployee(int order_id, int employee_id);



}
