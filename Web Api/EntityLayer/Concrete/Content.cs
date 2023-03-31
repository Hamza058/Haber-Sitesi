using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Content
    {
        [Key]
        public int ContentID { get; set; }
        public string ContentValue { get; set; }
        public DateTime ContentDate { get; set; }
        public string ContentImage { get; set; }
        public bool ContentStatus { get; set; }

        public int HeadingID { get; set; }
        public Heading? Heading { get; set; }
	}
}
