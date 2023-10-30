using System.Runtime.CompilerServices;
using TeamWorkFlowApp.Data;

namespace TeamWorkFlowApp.Extentions
{
    public static class DatabaseExtentions
    {
        public static void AddDapperDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<ApplicationContext>();

        }
    }
}
