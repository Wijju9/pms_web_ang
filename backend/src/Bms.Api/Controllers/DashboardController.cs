using Bms.Api.Models;
using Bms.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Bms.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DashboardController : ControllerBase
{
    private readonly IDashboardService _dashboardService;

    public DashboardController(IDashboardService dashboardService)
    {
        _dashboardService = dashboardService;
    }

    [HttpGet("stats")]
    [ProducesResponseType(typeof(DashboardStats), StatusCodes.Status200OK)]
    public ActionResult<DashboardStats> GetStats()
    {
        var stats = _dashboardService.GetStats();
        return Ok(stats);
    }
}
