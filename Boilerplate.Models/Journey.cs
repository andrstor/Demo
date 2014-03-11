using Boilerplate.Models.Interfaces;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Boilerplate.Models
{
    public class Journey : IContent
    {
        public int Id { get; set; }

        public DateTime? CreatedDate { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public DateTime? PublishedDate { get; set; }

        [Required]
        public Stop StartingFrom { get; set; }
        [Required]
        public Stop Destination { get; set; }
    
}
}
