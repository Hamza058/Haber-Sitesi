using EntityLayer.Concrete;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.ValidationRules
{
    public class CategoryValidator : AbstractValidator<Category>
    {
        public CategoryValidator()
        {
            RuleFor(x => x.CategoryName).NotEmpty().WithMessage("Kategori adı boş olamaz");
            RuleFor(x => x.CategoryName).MinimumLength(3).WithMessage("En az 3 karakter olması lazım");
            RuleFor(x => x.CategoryName).MaximumLength(20).WithMessage("En fazla 20 karakter olması lazım");
            RuleFor(x => x.CategoryStatus).NotEmpty().WithMessage("Kategori Durumu Boş Olamaz");
        }
    }
}
