using DataAccessLayer.Abstract;
using DataAccessLayer.Concrete;
using DataAccessLayer.Concrete.Repository;
using EntityLayer.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.EntityFramework
{
	public class EFContentDal : GenericRepository<Content>, IContentDal
	{
		public List<Content> GetListWithHeading()
		{
			using (var c = new Context())
			{
				return c.Contents.Include(x => x.Heading)
					.Include(x => x.Heading.Writer)
					.Include(x => x.Heading.Category).ToList();
			}
		}
	}
}
