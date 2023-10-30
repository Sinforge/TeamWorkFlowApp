using Microsoft.AspNetCore.Identity;
using TeamWorkFlowApp.Models;
using TeamWorkFlowApp.Repositories.Interfaces;
using TeamWorkFlowApp.Services.Interfaces;

namespace TeamWorkFlowApp.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;

        }

        public async Task<bool> CreateUserAsync(User user)
        {
            if (await _userRepository.FindUserByUsernameAsync(user.login) != null)
            {
                return false;
            }
            else
            {
                user.password= new PasswordHasher<object?>().HashPassword(null, user.password);
                return await _userRepository.CreateUserAsync(user);
            }
        }

        public async Task<bool> DeleteUserByIdAsync(int id)
        {
            if (await _userRepository.FindUserByIdAsync(id) == null)
            {
                return false;
            }
            else
            {
                return await _userRepository.DeleteUserAsync(id);
            }
        }

        public async Task<User?> FindUserByIdAsync(int id)
        {
            return await _userRepository.FindUserByIdAsync(id);
        }

        public async Task<User?> FindUserByUsernameAsync(string username)
        {
            return await _userRepository.FindUserByUsernameAsync(username);
        }

        public async Task<bool> UpdateUserAsync(User user)
        {
            return await _userRepository.UpdateUserAsync(user);
        }

        public async Task<User?> CheckUserCredentials(string login, string password)
        {
            User? user = await _userRepository.CheckUserCredentials(login);
            var verifyResult = new PasswordHasher<object?>().VerifyHashedPassword(null, user.password, password);
            if (verifyResult == PasswordVerificationResult.Failed)
            {
                return null;
            }
            else
            {
                return user;
            }

        }

        public async Task<string> GetUserRoleById(int id)
        {
            return await _userRepository.GetUserRoleById(id);
        }
    }
}
