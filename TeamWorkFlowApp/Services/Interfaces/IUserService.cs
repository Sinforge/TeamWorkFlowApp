using TeamWorkFlowApp.Models;

namespace TeamWorkFlowApp.Services.Interfaces
{
    public interface IUserService
    {
        public Task<bool> CreateUserAsync(User user);

        public Task<bool> DeleteUserByIdAsync(int id);

        public Task<bool> UpdateUserAsync(User user);

        public Task<User?> FindUserByIdAsync(int id);

        public Task<User?> FindUserByUsernameAsync(string username);

        public Task<User?> CheckUserCredentials(string login, string password);
        public Task<string> GetUserRoleById(int id);
    }
}
