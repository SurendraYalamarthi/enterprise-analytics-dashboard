import type { PickerValue } from "@mui/x-date-pickers/internals";

export type ReportStatus = "Active" | "Completed" | "Pending" | "Failed" | "Cancelled"; 

export interface Report {
    date: string;
    reportType: string;
    region: string;
    status: ReportStatus;
    value: number;
    id: number;
};

export type ReportFilters = {
  status: ReportStatus | "All";
  startDate: PickerValue;
  endDate: PickerValue;
  reportType: string;
  region: string;
};