
import { Card, CardContent, Typography } from "@mui/material";


type MetricCardProps = {
    metric: {
        label: string;
        value: string | number;
    };
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