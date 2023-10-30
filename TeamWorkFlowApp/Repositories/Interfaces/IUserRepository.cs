using TeamWorkFlowApp.Models;

namespace TeamWorkFlowApp.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task<bool> CreateUserAsync(User user);
        Task<User?> FindUserByIdAsync(int id);
        Task<User?> FindUserByUsernameAsync(string username);
        Task<bool> UpdateUserAsync(User user);
        Task<bool> DeleteUserAsync(int id);
        Task<User?> CheckUserCredentials(string login);
        Task<string?> GetUserRoleById(int id);
    }
}
