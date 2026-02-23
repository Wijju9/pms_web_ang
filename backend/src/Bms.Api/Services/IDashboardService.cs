using Bms.Api.Models;

namespace Bms.Api.Services;

public interface IDashboardService
{
    DashboardStats GetStats();
}
