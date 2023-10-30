using TeamWorkFlowApp.Extentions;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddDapperDatabase(builder.Configuration);
builder.Services.AddRepositories();
builder.Services.AddServices();
builder.Services.AddAuth(builder.Configuration);
// Add services to the container.
    
var app = builder.Build();
app.MapControllerRoute(
    name: "default",
    pattern: "api/{controller}");
app.UseAuthentication();
app.UseAuthorization();
app.Run();
