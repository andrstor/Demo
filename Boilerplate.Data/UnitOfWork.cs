using Boilerplate.Data.Configuration.EntityFramework;
using Boilerplate.Models;
using System;
using System.Threading.Tasks;

namespace Boilerplate.Data
{
    public class UnitOfWork : IDisposable
    {
        private readonly BoilerplateDbContext _context;

        public UnitOfWork()
        {
            _context = new BoilerplateDbContext();
        }

        public UnitOfWork(BoilerplateDbContext context)
        {
            _context = context;
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public Task SaveChangesAsync()
        {
            return _context.SaveChangesAsync();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        private Repository<Article> _articleRepository;
        public Repository<Article> ArticleRepository
        {
            get { return _articleRepository ?? (_articleRepository = new Repository<Article>(_context)); }
        }

        private Repository<Bus> _busRepository;
        public Repository<Bus> BusRepository
        {
            get { return _busRepository ?? (_busRepository = new Repository<Bus>(_context)); }
        }

        private Repository<Driver> _driverRepository;
        public Repository<Driver> DriverRepository
        {
            get { return _driverRepository ?? (_driverRepository = new Repository<Driver>(_context)); }
        }
        
        private Repository<Journey> _JourneyRepository;
        public Repository<Journey> JourneyRepository
        {
            get { return _JourneyRepository ?? (_JourneyRepository = new Repository<Journey>(_context)); }
        }
        
        private Repository<Route> _RouteRepository;
        public Repository<Route> RouteRepository
        {
            get { return _RouteRepository ?? (_RouteRepository = new Repository<Route>(_context)); }
        }

        private Repository<Stop> _StopRepository;
        public Repository<Stop> StopRepository
        {
            get { return _StopRepository ?? (_StopRepository = new Repository<Stop>(_context)); }
        }
    }
}