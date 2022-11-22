using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LayerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentController : ControllerBase
    {
        ContentManager cm = new ContentManager(new EFContentDal());
        HeadingManager hm = new HeadingManager(new EFHeadingDal());
        CategoryManager ctm = new CategoryManager(new EFCategoryDal());
        WriterManager wm = new WriterManager(new EFWriterDal());

        [HttpGet]
        public IActionResult Get()
        {
            //Statu true olanları döndürür
            var content = cm.GetList().Where(x => x.ContentStatus == true);
            var heading = hm.GetList();
            var category = ctm.GetList();
            var writer = wm.GetList();

            string[] contentID = new string[content.Count()];
            string[] contentValue = new string[content.Count()];
            string[] contentHeading = new string[content.Count()];
            string[] contentDate = new string[content.Count()];
            string[] contentCategory = new string[content.Count()];
            string[] contentImage = new string[content.Count()];
            string[] contentWriter = new string[content.Count()];
            string[] contentWriterImage = new string[content.Count()];

            int i = 0;
            foreach (var item in content)
            {
                contentID[i] = item.ContentID.ToString();
                contentValue[i] = item.ContentValue;
                contentImage[i] = item.ContentImage;
                contentHeading[i] = heading.First(x => x.HeadingID == item.HeadingID).HeadingName;
                contentWriter[i] = writer.First(x => x.WriterID == item.WriterID).WriterName;
                contentWriterImage[i] = writer.First(x => x.WriterID == item.WriterID).WriterImage;
                contentDate[i] = item.ContentDate.ToString("dd-MMM-yyyy");
                contentCategory[i] = category.First(x => x.CategoryID == heading.First(x => x.HeadingID == item.HeadingID).CategoryID).CategoryName;
                i++;
            }
            Dictionary<string, Array> results = new Dictionary<string, Array>();
            results.Add("id", contentID);
            results.Add("resim", contentImage);
            results.Add("kategory", contentCategory);
            results.Add("tarih", contentDate);
            results.Add("baslik", contentHeading);
            results.Add("icerik", contentValue);
            results.Add("yazarResmi", contentWriterImage);
            results.Add("yazar", contentWriter);

            return Ok(results);
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var contentValues = cm.GetByID(id);
            var heading = hm.GetByID(Convert.ToInt16(contentValues.HeadingID));
            var category = ctm.GetByID(heading.CategoryID).CategoryName;
            var writer = wm.GetByID(Convert.ToInt16(contentValues.WriterID));
            var wrName = writer.WriterName + " " + writer.WriterSurName;
            var wrImg = writer.WriterImage;

            Dictionary<string, string> results = new Dictionary<string, string>();

            results.Add("tarih", contentValues.ContentDate.ToString("dd-MMM-yyyy"));
            results.Add("aciklama", contentValues.ContentValue);
            results.Add("resim", contentValues.ContentImage);
            results.Add("baslik", heading.HeadingName);
            results.Add("kategori", category);
            results.Add("yazar", wrName);
            results.Add("yazarResmi", wrImg);

            return Ok(results);
        }

        [HttpPost]
        public IActionResult Add(Value value)
        {
            Heading heading = new Heading();
            heading.HeadingName = value.HeadingName;
            heading.HeadingDate = DateTime.Now;
            heading.CategoryID = ctm.GetList().FirstOrDefault(x => x.CategoryName == value.CategoryName).CategoryID;
            heading.WriterID = wm.GetList().FirstOrDefault(x => x.WriterMail == value.WriterMail).WriterID;
            heading.HeadingStatus = true;
            hm.HeadingAdd(heading);

            Content content = new Content();
            content.ContentValue = value.ContentValue;
            content.ContentDate = DateTime.Now;
            content.ContentImage = value.ContentImage;
            content.HeadingID = heading.HeadingID;
            content.WriterID = heading.WriterID;
            cm.ContentAdd(content);

            return Ok("Başarıyla Eklendi");
        }
    }
}
