using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using TeamWorkFlowApp.Configuration;
using TeamWorkFlowApp.Repositories;
using TeamWorkFlowApp.Repositories.Interfaces;
using TeamWorkFlowApp.Services;
using TeamWorkFlowApp.Services.Interfaces;

namespace TeamWorkFlowApp.Extentions
{
    public static class CommonExtentions
    {
        public static void AddAuth(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(option =>
                {
                    var jwtConfig = configuration.GetSection("Audience");
                    option.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtConfig["Secret"])),
                        ValidateIssuer = true,
                        ValidIssuer = jwtConfig["Iss"],
                        ValidateAudience = true,
                        ValidAudience = jwtConfig["Aud"],
                        ValidateLifetime = true,
                        ClockSkew = TimeSpan.Zero,
                        RequireExpirationTime = true,

                    };
                });
            services.AddAuthorization();
            services.Configure<Audience>(configuration.GetSection("Audience"));

        }
        public static void AddServices(this IServiceCollection services)
        {
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IOrdererService, OrdererService>();
            services.AddScoped<IEmployeeService, EmployeeService>();
        }
        public static void AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IOrdererRepository, OrdererRepository>();
            services.AddScoped<IEmployeeRepository, EmployeeRepository>();
        }
    }

}
