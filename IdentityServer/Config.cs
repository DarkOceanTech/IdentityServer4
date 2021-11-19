using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServer
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> GetIdentityResources() =>
            new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResource("testscope", new [] { "claimtest" })
            };

        public static IEnumerable<ApiScope> GetApiScopes() =>
            new List<ApiScope>
            {
                new ApiScope("ResourceApi", new [] { "claimtest.api" }),
                new ApiScope("ClientApi"/*, new [] { "claimtest.api" }*/),
            };

        public static IEnumerable<ApiResource> GetApis() =>
            new List<ApiResource>{
                new ApiResource("ResourceApi")
                {
                    Scopes = new [] { "ResourceApi" }
                },
                new ApiResource("ClientApi")
                {
                    Scopes = new [] { "ClientApi" }
                }
            };

        public static IEnumerable<Client> GetClients() =>
            new List<Client>{
                 // machine to machine client
                new Client {
                    ClientId = "client_id",
                    // secret for authentication
                    ClientSecrets = { new Secret("client_secret".ToSha256()) },
                    // no interactive user, use the clientid/secret for authentication
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    // scopes that client has access to
                    AllowedScopes = { "ResourceApi" }
                },
                // interactive ASP.NET Core MVC client
                new Client {
                    ClientId = "client_id_mvc",
                    ClientSecrets = { new Secret("client_secret_mvc".ToSha256()) },
                    // Authorization Code Flow with PKCE
                    AllowedGrantTypes = GrantTypes.Code,
                    // where to redirect to after login
                    RedirectUris = { "https://localhost:44306/signin-oidc" },
                    AllowedScopes = { 
                        "ResourceApi",
                        "ClientApi",
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "testscope",
                    },
                    // test to get all claims into the Id Token refer to ClientMvc.Statup.cs
                    // ConfigureServices GetClaimsFromUserInfoEndpoint
                    // AlwaysIncludeUserClaimsInIdToken = true,
                    
                    AllowOfflineAccess = true,
                    RequireConsent = false
                }
            };
    }
}
