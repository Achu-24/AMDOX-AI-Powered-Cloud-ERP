
export const erpData = {
  kpis: {
  totalEmployees: 120,
  totalRevenue: 540000,
  pendingOrders: 18,
  completedProjects: 28,
  activeVendors: 12,
  inventoryValue: 450,
  attendancePercent: 94,
  profitMargin: 14,
},
  forecasts: [
  {
    metric: "Sales Prediction",
    current: "₹5.4L",
    predicted: "₹5.9L",
    confidence: 92,
    trend: "up"
  },
  {
    metric: "Inventory Status",
    current: "450 Items",
    predicted: "430 Items",
    confidence: 88,
    trend: "down"
  },
  {
    metric: "Employee Attendance",
    current: "94%",
    predicted: "96%",
    confidence: 90,
    trend: "up"
  },
  {
    metric: "Project Completion",
    current: "72%",
    predicted: "85%",
    confidence: 85,
    trend: "up"
  }
],
  revenueTrend: [
    { month: "Jan", revenue: 90000, expenses: 60000 },
    { month: "Feb", revenue: 105000, expenses: 65000 },
    { month: "Mar", revenue: 98000, expenses: 62000 },
    { month: "Apr", revenue: 115000, expenses: 70000 },
    { month: "May", revenue: 125000, expenses: 72000 },
    { month: "Jun", revenue: 140000, expenses: 75000 }
  ],
  departmentBreakdown: [
    { name: "Engineering", value: 45, color: "#2563eb" },
    { name: "Sales", value: 25, color: "#16a34a" },
    { name: "HR", value: 15, color: "#d97706" },
    { name: "Marketing", value: 15, color: "#9333ea" }
  ],
  recentActivity: [
    { id: 1, text: "New vendor 'TechCorp' onboarded", time: "2 hours ago", type: "success" },
    { id: 2, text: "Inventory for Server Racks low", time: "4 hours ago", type: "warning" },
    { id: 3, text: "Q2 Finance Report Generated", time: "1 day ago", type: "info" }
  ],
  reports: [
    { id: "EMP-001", name: "John Doe", department: "Engineering", status: "Active", performance: "92%" },
    { id: "EMP-002", name: "Jane Smith", department: "Sales", status: "Active", performance: "88%" },
    { id: "EMP-003", name: "Mike Johnson", department: "HR", status: "On Leave", performance: "N/A" },
    { id: "EMP-004", name: "Emily Davis", department: "Marketing", status: "Active", performance: "95%" }
  ]
};