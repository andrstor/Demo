using System;
using System.Collections.Generic;
using Boilerplate.Models.Interfaces;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Boilerplate.Models
{
    public class Route : IContent
    {
        public int Id { get; set; }

        public DateTime? CreatedDate { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public DateTime? PublishedDate { get; set; }


    }
}
