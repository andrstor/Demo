using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Boilerplate.Models.Interfaces;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Boilerplate.Models
{
    public class Stop : IContent
    {
        public int Id { get; set; }

        public DateTime? CreatedDate { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public DateTime? PublishedDate { get; set; }

        public string Name { get; set; }

        public string Position { get; set; }
    }
}
