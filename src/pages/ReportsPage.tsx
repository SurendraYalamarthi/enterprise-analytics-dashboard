import { useState } from "react";
import { 
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  type SelectChangeEvent 
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import type { PickerValue } from "@mui/x-date-pickers/internals";
import { reportsFilters } from "../mock/reports";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import ReportsTable from "../features/reports/ReportsTable";
import ReportsSummary from "../features/reports/ReportsSummary";
import useReports from "../features/reports/useReports";
import type { ReportStatus } from "../types/reports";

dayjs.extend(utc);
dayjs.extend(timezone);

const ReportsPage = () => {

  const [startDate, setStartDate] = useState<PickerValue | null>(null);
  const [endDate, setEndDate] = useState<PickerValue | null>(null);
  const [reportType, setReportType] = useState<string>("");
  const [status, setStatus] = useState<ReportStatus | "All">("All");
  const [region, setRegion] = useState<string>("");
  const [reportsTableKey, setReportsTableKey] = useState<string>("none");

  const { filteredReports, loading, applyFilters } = useReports();

  const { reportTypes, regions, statuses } = reportsFilters;

  const onStartDateChange = (val: PickerValue) => {
    setStartDate(val);
  }

  const onEndDateChange = (val: PickerValue) => {
    setEndDate(val);
  }

  const handleReportTypeChange = (e: SelectChangeEvent) => {
    setReportType(e.target.value);
  }

  const handleRegionChange = (e: SelectChangeEvent) => {
    setRegion(e.target.value);
  }

  const handleStatusChange = (e: SelectChangeEvent) => {
    setStatus(e.target.value as ReportStatus | "All");
  }

  const handleApply = () => {
    applyFilters({status, startDate, endDate, reportType, region});
    setReportsTableKey(`${startDate}-${endDate}-${reportType}-${region}-${status}`);
  }

  const clearFilters = () => {
    setStartDate(null);
    setEndDate(null);
    setReportType("");
    setRegion("");
    setStatus("All");
    
    applyFilters();
    setReportsTableKey("none");
  }

  return (
    <Stack spacing={2} sx={{ width: "100%", maxWidth: "100%", minWidth: 0 }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Reports
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
      >
        Analyze business performance and operational metrics.
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <DatePicker
            onChange={onStartDateChange}
            value={startDate}
            label="Start Date"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <DatePicker
            onChange={onEndDateChange}
            value={endDate}
            label="End Date"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="reports-filter-reportType">Report Type</InputLabel>
            <Select
              labelId="reports-filter-reportType"
              id="reports-filter-select-reportType"
              value={reportType}
              label="Report Type"
              onChange={handleReportTypeChange}
            >
              {
                reportTypes.map(type => <MenuItem value={type.value} key={type.value}>{type.label}</MenuItem>)
              }
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="reports-filter-region">Region</InputLabel>
            <Select
              labelId="reports-filter-region"
              id="reports-filter-select-region"
              value={region}
              label="Region"
              onChange={handleRegionChange}
            >
              {
                regions.map(type => <MenuItem value={type.value} key={type.value}>{type.label}</MenuItem>)
              }
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="reports-filter-status">Status</InputLabel>
            <Select
              labelId="reports-filter-status"
              id="reports-filter-select-status"
              value={status}
              label="Status"
              onChange={handleStatusChange}
            >
              <MenuItem value="All">All</MenuItem>
              {
                statuses.map(type => <MenuItem value={type.value} key={type.value}>{type.label}</MenuItem>)
              }
            </Select>
          </FormControl>
        </Grid>

        <Grid size="auto">
          <Button
            variant="text"
            disabled={!startDate || !endDate || startDate.isAfter(endDate, "day")}
            onClick={handleApply}
          >
            Apply
          </Button>
        </Grid>

        <Grid size="auto">
          <Button
            variant="text"
            disabled={
              !startDate &&
              !endDate &&
              !reportType &&
              !region &&
              status === "All"
            }
            onClick={clearFilters}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
      {
        loading ?
          <Stack sx={{alignItems: 'center', justifyContent: 'center', minHeight: 100, width: '100%'}}>
            <CircularProgress aria-label="Fetching reports" />
          </Stack>
        : (
          <Stack spacing={2} sx={{ width: "100%", minWidth: 0 }}>
            <ReportsSummary data={filteredReports} />
            <ReportsTable data={filteredReports} key={reportsTableKey} />
          </Stack>
        )
      }
    </Stack>
  )
}

export default ReportsPage