using BusinessLayer.Concrete;
using DataAccessLayer.Concrete;
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
    public class CategoryController : ControllerBase
    {
        CategoryManager cm = new CategoryManager(new EFCategoryDal());

        [HttpGet]
        public IActionResult Get()
        {
            var categoryValues = cm.GetList().Where(x => x.CategoryStatus);
            //Statu true olanları döndürür
            //var categoryValues = cm.GetList().Where(x => x.CategoryStatus);
            return Ok(categoryValues);
        }
        [HttpPut("{id}")]
        public IActionResult Status(int id)
        {
            var category = cm.GetByID(id);
            if (category.CategoryStatus == false)
                category.CategoryStatus = true;
            else
                category.CategoryStatus = false;
            cm.CategoryDelete(category);

            return Ok("Durum Değiştirildi");
        }
        [HttpPost]
        public IActionResult Post(Category category)
        {
            cm.CategoryAdd(category);
            return Ok("Başarıyla Eklendi");
        }
    }
}
