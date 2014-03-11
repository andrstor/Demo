using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Boilerplate.Web.ViewModels
{
    public class BusDTO
    {
        public int id { get; set; }

        public DateTime? createdDate { get; set; }

        public DateTime? modifiedDate { get; set; }

        public DateTime? publishedDate { get; set; }

        public string registrationNumber { get; set; }
        public int passengerCapacity { get; set; }
        public Nullable<int> driver { get; set; }

    }
}