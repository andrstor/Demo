using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Boilerplate.Web.ViewModels
{
    public class DriverDTO
    {
        public int id { get; set; }

        public DateTime? createdDate { get; set; }

        public DateTime? modifiedDate { get; set; }

        public DateTime? publishedDate { get; set; }

        [Required]
        public string firstName { get; set; }

        [Required]
        public string lastName { get; set; }

    }
}