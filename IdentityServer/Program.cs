using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Security.Claims;

namespace IdentityServer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            IHost host = CreateHostBuilder(args).Build();
            
            using (IServiceScope scope = host.Services.CreateScope())
            {
                UserManager<IdentityUser> userManager = scope.ServiceProvider.GetRequiredService<UserManager<IdentityUser>>();

                IdentityUser user = new IdentityUser("testuser");
                userManager.CreateAsync(user, "password").GetAwaiter().GetResult();
                // added to Identity Token
                userManager.AddClaimAsync(user, new Claim("claimtest", "claimtest.cookie")).GetAwaiter().GetResult();
                // added to Access Token
                userManager.AddClaimAsync(user, new Claim("claimtest.api", "claimtest.api.cookie")).GetAwaiter().GetResult();
            }

            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
