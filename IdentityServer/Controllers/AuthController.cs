using IdentityServer.Models;
using IdentityServer4.Models;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServer.Controllers
{
    public class AuthController : Controller
    {
        // SignInManager allows you to edit the signin session- deal out cookies, attach claims
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IIdentityServerInteractionService _interactionService;

        public AuthController(SignInManager<IdentityUser> signInManager, UserManager<IdentityUser> userManager,
            IIdentityServerInteractionService interactionService)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _interactionService = interactionService;
        }

        [HttpGet]
        public IActionResult Login(string returnUrl)
        {
            return View(new LoginViewModel { ReturnUrl = returnUrl });
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel loginViewModel)
        {
            // validate the model
            Microsoft.AspNetCore.Identity.SignInResult result = await _signInManager.PasswordSignInAsync(loginViewModel.Email, loginViewModel.Password, false, false);

            if (result.Succeeded)
            {
                return Redirect(loginViewModel.ReturnUrl);
            }
            else if (result.IsLockedOut)
            {

            }

            return View();
        }

        [HttpGet]
        public async Task<IActionResult> Logout(string logoutId)
        {
            await _signInManager.SignOutAsync();

            // PostLogoutRedirectUri is null if the RedirectUri is not added to or misspelled in the ClientPostLogoutRedirectUris table
            LogoutRequest logoutRequest = await _interactionService.GetLogoutContextAsync(logoutId);

            if (string.IsNullOrEmpty(logoutRequest.PostLogoutRedirectUri))
            {
                return (RedirectToAction("Index", "Home"));
            }

            return Redirect(logoutRequest.PostLogoutRedirectUri);
        }

        [HttpGet]
        public IActionResult Register(string returnUrl)
        {
            return View(new RegisterViewModel { ReturnUrl = returnUrl });
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel registerViewModel)
        {
            if (!ModelState.IsValid)
            {
                return View(registerViewModel);
            }
            IdentityUser user = new(registerViewModel.Email);
            IdentityResult result = await _userManager.CreateAsync(user, registerViewModel.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);
                return Redirect(registerViewModel.ReturnUrl);
            }

            return View();
        }
    }
}
