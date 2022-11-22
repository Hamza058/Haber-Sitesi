using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LayerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        CategoryManager cm = new CategoryManager(new EFCategoryDal());
        HeadingManager hm = new HeadingManager(new EFHeadingDal());
        WriterManager wm = new WriterManager(new EFWriterDal());
        ContentManager ctm = new ContentManager(new EFContentDal());

        [HttpGet]
        public IActionResult GetTables()
        {
            var cate = cm.GetList();
            var head = hm.GetList();
            var writer = wm.GetList();
            var content = ctm.GetList();


            Dictionary<string, Object> results = new Dictionary<string, Object>();
            results.Add("kategori",cate);
            results.Add("baslik",head);
            results.Add("yazar",writer);
            results.Add("icerik",content);
            return Ok(results);
        }
    }
}
