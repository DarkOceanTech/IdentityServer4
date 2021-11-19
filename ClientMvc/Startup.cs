using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientMvc
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(options =>
            {
                options.DefaultScheme = "Cookie";
                options.DefaultChallengeScheme = "oidc";
            })
                .AddCookie("Cookie")
                .AddOpenIdConnect("oidc", options =>
            {
                options.Authority = "https://localhost:44311/";
                options.ClientId = "client_id_mvc";
                options.ClientSecret = "client_secret_mvc";
                options.SaveTokens = true;
                options.ResponseType = "code";
                // configure cookie cliam mapping
                // claims may be removed
                //options.ClaimActions.DeleteClaim("amr");
                options.ClaimActions.MapUniqueJsonKey("mapjsonkey", "claimtest");
                // two trips to load cliams in to the cookie so the id token is smaller
                options.GetClaimsFromUserInfoEndpoint = true;
                // configure additional Scopes
                options.Scope.Clear();// removes the need for Profile Scope (Config.cs)
                options.Scope.Add("openid");
                options.Scope.Add("testscope");
                options.Scope.Add("ResourceApi");
                options.Scope.Add("ClientApi");
                options.Scope.Add("offline_access");
            });

            services.AddHttpClient();

            // more specific than AddMvc()
            // AddAuthentication needs to added above "MVC" services
            services.AddControllersWithViews();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
                // Which is the same as the template
                //endpoints.MapControllerRoute("default", "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
