import { Grid, Stack, Typography } from "@mui/material";
import { dashboardMetrics } from '../mock/dashboard';
import MetricCard from "../components/MetricCard";
import RevenueChart from "../features/dashboard/RevenueChart";

const DashboardPage = () => {


  return (
    <Stack spacing={2}>
      <Typography variant="h4">Dashboard</Typography>

      <Typography variant="subtitle1">Overview of your business performance and key metrics.</Typography>

      <Grid 
        container 
        spacing={2} 
        columns={{
          xs: 1,
          sm: 2,
          md: 4
        }}
      >
        {
          dashboardMetrics.map(metric =>
            <Grid key={metric.label} size={1}>
              <MetricCard metric={metric} />
            </Grid>
          )
        }
      </Grid>

      <RevenueChart />

    </Stack>
  )
}

export default DashboardPage;