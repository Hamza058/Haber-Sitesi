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
    public class HeadingController : ControllerBase
    {
        HeadingManager hm = new HeadingManager(new EFHeadingDal());
        ContentManager cm = new ContentManager(new EFContentDal());

        [HttpGet]
        public IActionResult Get()
        {
            //Statu true olanları döndürür
            var headingValues = hm.GetList().Where(x => x.HeadingStatus);
            return Ok(headingValues);
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var headingValues = hm.GetByID(id);
            return Ok(headingValues);
        }

        [HttpPut("{id}")]
        public IActionResult Status(int id)
        {
            var heaidng = hm.GetByID(id);
            var content = cm.GetList().FirstOrDefault(x => x.HeadingID == heaidng.HeadingID);
            if (heaidng.HeadingStatus == false)
            {
                heaidng.HeadingStatus = true;
                content.ContentStatus = true;
            }
            else
            {
                heaidng.HeadingStatus = false;
                content.ContentStatus = false;
            }
            hm.HeadingDelete(heaidng);
            cm.ContentDelete(content);

            return Ok("Durum Değiştirildi");
        }
    }
}
