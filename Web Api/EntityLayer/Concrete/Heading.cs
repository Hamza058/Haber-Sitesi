using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Heading
    {
        [Key]
        public int HeadingID { get; set; }
        public string HeadingName { get; set; }
        public DateTime HeadingDate { get; set; }
        public int CategoryID { get; set; }
        public int WriterID { get; set; }
        public bool HeadingStatus { get; set; }

        //foregin key bağlayacağımız tablo ile yada [ForeignKey("Category")] olarak da yapabiliriz
        //public virtual Category Category { get; set; }
        //public virtual Writer Writer { get; set; }

        //public ICollection<Content> Contents { get; set; }
    }
}
