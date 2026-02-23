using Bms.Api.Models;

namespace Bms.Api.Services;

public class DashboardService : IDashboardService
{
    public DashboardStats GetStats()
    {
        // Replace with repository/EF Core query logic
        return new DashboardStats(
            OccupiedFlats: 142,
            TotalFlats: 160,
            OpenMaintenance: 17,
            PendingDues: 248750,
            ActiveVisitors: 23,
            AvailableParkingSlots: 61
        );
    }
}
