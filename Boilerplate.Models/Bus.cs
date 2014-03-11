using System;
using System.ComponentModel.DataAnnotations;
using Boilerplate.Models.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Boilerplate.Models
{
    public class Bus : IContent
    {
        public int Id { get; set; }

        public DateTime? CreatedDate { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public DateTime? PublishedDate { get; set; }

        public string RegistrationNumber { get; set; }
        public int PassengerCapacity { get; set; }
        public Driver Driver { get; set; }
        
    }
}
