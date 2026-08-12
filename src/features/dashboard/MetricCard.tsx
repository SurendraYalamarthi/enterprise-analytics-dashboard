
import { Card, CardContent, Typography } from "@mui/material";
import { type DashboardMetric } from '../../types/dashboard';


type MetricCardProps = {
    metric: DashboardMetric;
}

const MetricCard = ({ metric }: MetricCardProps) => {

  return (
    <Card
        sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%"
        }}
    >
        <CardContent>
            <Typography variant="subtitle2">{metric.label}</Typography>
            <Typography variant="h5">{metric.value}</Typography>
        </CardContent>
    </Card>
  )
}
export default MetricCard;