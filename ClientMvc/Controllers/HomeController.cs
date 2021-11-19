using ClientMvc.Models;
using IdentityModel.Client;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;

namespace ClientMvc.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IHttpClientFactory _httpClientFactory;

        public HomeController(ILogger<HomeController> logger, IHttpClientFactory httpClientFactory)
        {
            _logger = logger;
            _httpClientFactory = httpClientFactory;
        }

        public IActionResult Index()
        {
            return View();
        }

        [Authorize]
        public async Task<IActionResult> Secret()
        {
            string accessToken = await HttpContext.GetTokenAsync("access_token");
            // ClientMvc.Startup.cs GetClaimsFromUserInfoEndpoint versus AlwaysIncludeUserClaimsInIdToken
            // removes the claims fromm the Id Token
            // primarily foor authentication state
            // sub: authentication info (who and how) versus personal user info
            string idToken = await HttpContext.GetTokenAsync("id_token");
            string refreshToken = await HttpContext.GetTokenAsync("refresh_token");

            IEnumerable<Claim> claims = User.Claims.ToList();
            JwtSecurityToken _accessToken = new JwtSecurityTokenHandler().ReadJwtToken(accessToken);
            JwtSecurityToken _idToken = new JwtSecurityTokenHandler().ReadJwtToken(idToken);

            var result = await GetSecret(accessToken);

            await RefreshAccessToken();

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public async Task<string> GetSecret(string accessToken)
        {
            //get secret data from ResourceApi
            HttpClient apiClient = _httpClientFactory.CreateClient();
            apiClient.SetBearerToken(accessToken);
            HttpResponseMessage response = await apiClient.GetAsync("https://localhost:44324/secret");
            string content = await response.Content.ReadAsStringAsync();

            return content;
        }

        public async Task RefreshAccessToken()
        {
            HttpClient serverClient = _httpClientFactory.CreateClient();
            DiscoveryDocumentResponse discoveryDcoument = await serverClient.GetDiscoveryDocumentAsync("https://localhost:44311/");

            string refreshToken = await HttpContext.GetTokenAsync("refresh_token");
            HttpClient refreshTokenClient = _httpClientFactory.CreateClient();

            TokenResponse tokenRespnse = await refreshTokenClient.RequestRefreshTokenAsync(new RefreshTokenRequest
            {
                Address = discoveryDcoument.TokenEndpoint,
                RefreshToken = refreshToken,
                ClientId = "client_id_mvc",
                ClientSecret = "client_secret_mvc"
            });

            AuthenticateResult authInfo = await HttpContext.AuthenticateAsync("Cookie");
            authInfo.Properties.UpdateTokenValue("access_token", tokenRespnse.AccessToken);
            authInfo.Properties.UpdateTokenValue("refresh_token", tokenRespnse.RefreshToken);
            await HttpContext.SignInAsync("Cookie", authInfo.Principal, authInfo.Properties);
        }
    }
}
