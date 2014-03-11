using Boilerplate.Data.Configuration.EntityFramework;
using Boilerplate.Models;
using System.Data.Entity;

namespace Boilerplate.Data.Configuration
{
    public class DbInitializer : DropCreateDatabaseAlways<BoilerplateDbContext>
    {
        
        protected override void Seed(BoilerplateDbContext context)
        {
            UnitOfWork uow = new UnitOfWork(context);
            
            var d1 = new Driver { FirstName = "John", LastName = "Doe" };
            var d2 = new Driver { FirstName = "Regina", LastName = "Spectre" };
            var d3 = new Driver { FirstName = "Bret", LastName = "Lawrence" }; 
            var d4 = new Driver { FirstName = "Anders", LastName = "Ravik" };
            uow.DriverRepository.Insert(d1);
            uow.DriverRepository.Insert(d2);
            uow.DriverRepository.Insert(d3);
            uow.DriverRepository.Insert(d4);
            
            uow.SaveChanges();
            uow.BusRepository.Insert(new Bus { RegistrationNumber = "WYZ 405", Driver = d1 });
            uow.BusRepository.Insert(new Bus { RegistrationNumber = "WYZ 406", Driver = d2 });
            uow.BusRepository.Insert(new Bus { RegistrationNumber = "WYZ 407", Driver = d3 });
            uow.BusRepository.Insert(new Bus { RegistrationNumber = "WYZ 408", Driver = d4 });
            uow.SaveChanges();
        }
    }
}