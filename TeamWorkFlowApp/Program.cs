using TeamWorkFlowApp.Extentions;
var _myAllowSpecificOrigins = "MyAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: _myAllowSpecificOrigins,
        builder =>
        {
            builder.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader().AllowCredentials();
        });
});
builder.Services.AddControllers();
builder.Services.AddDapperDatabase(builder.Configuration);
builder.Services.AddRepositories();
builder.Services.AddServices();
builder.Services.AddAuth(builder.Configuration);
// Add services to the container.
    
var app = builder.Build();
app.UseCors(_myAllowSpecificOrigins);
app.MapControllerRoute(
    name: "default",
    pattern: "api/{controller}");
app.UseAuthentication();
app.UseAuthorization();
app.Run();
