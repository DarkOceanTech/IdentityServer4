using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace ResourceApi.Controllers
{
    [Route("/secret")]
    [Authorize]
    public class SecretController : Controller
    {
        //[Route("/secret")]
        //[Authorize]

        [HttpGet]
        public string Index()
        {
            IEnumerable<Claim> claims = User.Claims.ToList();
            return "Access to the ResourceApi is successfull";
        }
    }
}
