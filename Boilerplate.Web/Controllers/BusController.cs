using AutoMapper;
using Boilerplate.Data;
using Boilerplate.Models;
using Boilerplate.Web.CORS;
using Boilerplate.Web.ViewModels;
using Ninject;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace Boilerplate.Web.Controllers
{
    /// <summary>
    /// Get Articles
    /// </summary>
    [RoutePrefix("api")]
    [CustomCORS]
    public class BusController : ApiController
    {
        [Inject]
        public UnitOfWork _uow { get; set; }

        // GET api/Article
        /// <summary>
        /// Get a list of Articles
        /// </summary>
        /// <returns>A list of Articles</returns>
        [Route("busses/")]
        public Dictionary<string, IEnumerable<object>> GetBusses()
        {
            var toReturn = new Dictionary<string, IEnumerable<object>>();
            var busses = _uow.BusRepository.Get(includeProperties: "Driver").AsEnumerable();
            var bussesDTOs = busses.Select(x => Mapper.Map<Bus, BusDTO>(x)).ToList();
            toReturn.Add("busses", bussesDTOs);
            toReturn.Add("drivers", busses.Select(x => Mapper.Map<Driver, DriverDTO>(x.Driver)).ToList());

            return toReturn;
        }

        // GET api/Article/5
        /// <summary>
        /// Get a article
        /// </summary>
        /// <param name="id">Article id</param>
        /// <returns>A article</returns>
        [ResponseType(typeof(Bus))]
        [Route("bus/{id:int}",Name = "GetBusById")]
        public async Task<IHttpActionResult> GetBus(int id)
        {
            Bus b = await _uow.BusRepository.GetByIdAsync(id);
            if (b == null)
            {
                return NotFound();
            }
            var toReturn = new Dictionary<string, object>();
            toReturn.Add("bus", b);            
            return Ok(toReturn);
        }

        // PUT api/Article/5
        [Route("bus", Name = "PutBusById")]
        public async Task<IHttpActionResult> PutBus(int id, Bus bus)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bus.Id)
            {
                return BadRequest();
            }

            _uow.BusRepository.Update(bus);
            await _uow.SaveChangesAsync();
            
                var toReturn = new Dictionary<string, object>();
                toReturn.Add("bus", _uow.BusRepository.GetById(id));
                return Ok(toReturn);
        }

        // POST api/Article
        [ResponseType(typeof(Bus))]
        [Route("bus")]
        public async Task<IHttpActionResult> PostBus(Bus bus)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _uow.BusRepository.Insert(bus);
            await _uow.SaveChangesAsync();

            return CreatedAtRoute("GetBusById", new { id = bus.Id }, bus);
        }

        // DELETE api/Article/5
        [ResponseType(typeof(Article))]
        [Route("articles/{id:int}")]
        public async Task<IHttpActionResult> DeleteArticle(int id)
        {
            Article article = await _uow.ArticleRepository.GetByIdAsync(id);
            if (article == null)
            {
                return NotFound();
            }

            _uow.ArticleRepository.Delete(article);
            await _uow.SaveChangesAsync();

            return Ok(article);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _uow.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}