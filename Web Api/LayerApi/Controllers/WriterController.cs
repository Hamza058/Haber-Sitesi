using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
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
    public class WriterController : ControllerBase
    {
        WriterManager wm = new WriterManager(new EFWriterDal());

        [HttpGet]
        public IActionResult Get()
        {
            var writerValues = wm.GetList();
            //Statu true olanları döndürür
            //var categoryValues = cm.GetList().Where(x => x.CategoryStatus);
            return Ok(writerValues);
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var writerValues = wm.GetByID(id);
            return Ok(writerValues);
        }

        [HttpPut("{id}")]
        public IActionResult Status(int id)
        {
            var writer = wm.GetByID(id);
            if (writer.WriterStatus == false)
                writer.WriterStatus = true;
            else
                writer.WriterStatus = false;
            wm.WriterDelete(writer);

            return Ok("Aktif Yapıldı");
        }
        [HttpPost]
        public IActionResult Add(Writer writer)
        {
            wm.WriterAdd(writer);
            return Ok("Başarıyla Eklendi");
        }
    }
}
