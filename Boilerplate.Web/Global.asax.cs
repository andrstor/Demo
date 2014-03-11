using System.Web.Http;
using System.Web.Mvc;
using Boilerplate.Web.App_Start;

namespace Boilerplate.Web
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AutoMapperBoilerplate.Setup();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            AreaRegistration.RegisterAllAreas();
        }
    }
}
