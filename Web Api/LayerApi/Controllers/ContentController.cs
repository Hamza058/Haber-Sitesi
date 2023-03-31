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
            var content = cm.GetWithHeading().Where(x => x.ContentStatus).OrderByDescending(x=>x.ContentDate).ToList();
            return Ok(content);
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var contentValues = cm.GetWithHeading().FirstOrDefault(x=>x.ContentID== id);

            return Ok(contentValues);
        }

        [HttpPost]
        public IActionResult Add(Value value)
        {
            Heading heading = new Heading();
            heading.HeadingName = value.HeadingValue;
            heading.HeadingDate = DateTime.Now;
            heading.CategoryID = ctm.GetList().FirstOrDefault(x => x.CategoryName == value.CategoryValue).CategoryID;
            heading.WriterID = wm.GetList().FirstOrDefault(x => x.WriterMail == value.WriterValue).WriterID;
            heading.HeadingStatus = true;
            hm.HeadingAdd(heading);

            Content content = new Content();
            content.ContentValue = value.ContentValue;
            content.ContentDate = DateTime.Now;
            content.ContentImage = value.ContentImage;
            content.HeadingID = heading.HeadingID;
            cm.ContentAdd(content);

            return Ok("Başarıyla Eklendi");
        }
    }
}
