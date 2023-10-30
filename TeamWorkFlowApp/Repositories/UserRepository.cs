using Dapper;
using TeamWorkFlowApp.Data;
using TeamWorkFlowApp.Models;
using TeamWorkFlowApp.Repositories.Interfaces;

namespace TeamWorkFlowApp.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationContext _context;
        private readonly ILogger<IUserRepository> _logger;
        public UserRepository(ApplicationContext context, ILogger<IUserRepository> logger)
        {
            _logger = logger;
            _context = context;
        }
        public async Task<bool> CreateUserAsync(User user)
        {

            string insertQuery = "insert into user (login, password, role_id) values" +
                "(@login, @password, @role_id);";

            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(insertQuery, user);
            }


            return true;

        }

        public async Task<bool> DeleteUserAsync(int id)
        {
            string deleteQuery = "delete from user where id = @id";

            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(deleteQuery, new { id = id });
            }

            return true;
        }

        //public async Task<User?> FindUserByEmailAsync(string email)
        //{
        //    string selectQuery = "select * from public.user where email = @email";
        //    User? user = null;

        //    using (var connection = _context.CreateConnection())
        //    {
        //        user = await connection.QuerySingleOrDefaultAsync<User>(selectQuery, new { email = email });
        //    }

        //    return user;
        //}

        public async Task<User?> FindUserByIdAsync(int id)
        {
            string selectQuery = "select * from user where id = @id";
            User? user = null;

            using (var connection = _context.CreateConnection())
            {
                user = await connection.QuerySingleOrDefaultAsync<User>(selectQuery, new { id = id });
            }

            return user;
        }

        public async Task<User?> FindUserByUsernameAsync(string username)
        {
            string selectQuery = "select * from user where login = @username";
            User? user = null;

            using (var connection = _context.CreateConnection())
            {
                user = await connection.QuerySingleOrDefaultAsync<User>(selectQuery, new { username = username });
            }

            return user;
        }

        public async Task<bool> UpdateUserAsync(User user)
        {
            string updateQuery = "update user set login = @login, " +
                "password=@password," +
                "role_id =@role_id," +
                "employee_id=@employee_id " +
                "where id = @id";

            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(updateQuery, user);
            }

            return true;

        }
        public async Task<User?> CheckUserCredentials(string username)
        {
            string selectQuery = "select * from user where login = @login";
            User? user = null;

            using (var connection = _context.CreateConnection())
            {
                user = await connection.QuerySingleOrDefaultAsync<User>(selectQuery, new { login = username });
            }

            return user;
        }

        public async Task<string?> GetUserRoleById(int id)
        {
            string selectQuery = "select name from role where id = @id";
            string? role = string.Empty;
            using(var connection = _context.CreateConnection())
            {
                role = await connection.QueryFirstOrDefaultAsync<string>(selectQuery, new { id = id });
            }
            return role;
            
        }
    }
}
