import type { Report } from "../types/reports";

export const reportsFilters = {
    reportTypes: [
        { value: "revenue", label: "Revenue" },
        { value: "sales", label: "Sales" },
        { value: "customers", label: "Customers" },
        { value: "operations", label: "Operations" }
    ],
    regions: [
        { value: "North America", label: "North America" },
        { value: "Europe", label: "Europe" },
        { value: "Asia Pacific", label: "Asia Pacific" },
        { value: "Middle East & Africa", label: "Middle East & Africa" }
    ],
    statuses: [
      { value: "Active", label: "Active" },
      { value: "Completed", label: "Completed" },
      { value: "Pending", label: "Pending" },
      { value: "Cancelled", label: "Cancelled" },
      { value: "Failed", label: "Failed" }
    ]
};

export const reportData: Report[] = [
  {
    id: 1,
    date: "2026-09-01",
    reportType: "revenue",
    region: "North America",
    status: "Completed",
    value: 125000,
  },
  {
    id: 2,
    date: "2026-09-03",
    reportType: "sales",
    region: "Europe",
    status: "Completed",
    value: 98000,
  },
  {
    id: 3,
    date: "2026-09-05",
    reportType: "customers",
    region: "Asia Pacific",
    status: "Pending",
    value: 15400,
  },
  {
    id: 4,
    date: "2026-09-07",
    reportType: "operations",
    region: "North America",
    status: "Completed",
    value: 42000,
  },
  {
    id: 5,
    date: "2026-09-10",
    reportType: "revenue",
    region: "Europe",
    status: "Pending",
    value: 87000,
  },
  {
    id: 6,
    date: "2026-09-12",
    reportType: "sales",
    region: "Asia Pacific",
    status: "Failed",
    value: 63000,
  },
  {
    id: 7,
    date: "2026-09-15",
    reportType: "customers",
    region: "North America",
    status: "Completed",
    value: 21800,
  },
  {
    id: 8,
    date: "2026-09-18",
    reportType: "operations",
    region: "Europe",
    status: "Completed",
    value: 51000,
  },
  {
    id: 9,
    date: "2026-09-20",
    reportType: "revenue",
    region: "Asia Pacific",
    status: "Completed",
    value: 112000,
  },
  {
    id: 10,
    date: "2026-09-22",
    reportType: "sales",
    region: "North America",
    status: "Pending",
    value: 76000,
  },
  {
    id: 11,
    date: "2026-09-24",
    reportType: "customers",
    region: "Europe",
    status: "Completed",
    value: 19300,
  },
  {
    id: 12,
    date: "2026-09-26",
    reportType: "operations",
    region: "Asia Pacific",
    status: "Failed",
    value: 38000,
  },
];