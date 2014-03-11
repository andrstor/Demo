using AutoMapper;
using Boilerplate.Models;
using Boilerplate.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Boilerplate.Web.App_Start
{
    public static class AutoMapperBoilerplate
    {
        public static void Setup() {
            Mapper.CreateMap<Bus, BusDTO>().ForMember(dto => dto.driver, b => b.MapFrom(s => s.Driver.Id));
            Mapper.CreateMap<Driver, DriverDTO>();
        }
    }
}