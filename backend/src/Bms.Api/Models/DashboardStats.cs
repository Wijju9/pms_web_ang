namespace Bms.Api.Models;

public record DashboardStats(
    int OccupiedFlats,
    int TotalFlats,
    int OpenMaintenance,
    decimal PendingDues,
    int ActiveVisitors,
    int AvailableParkingSlots);
