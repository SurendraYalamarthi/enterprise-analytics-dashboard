import { LineChart } from "@mui/x-charts";
import { revenueData } from "../../mock/revenue";
import { Card, CardContent, CardHeader } from "@mui/material";

const RevenueChart = () => {

    const months = revenueData.map(val => val.month);
    const revenue = revenueData.map(val => val.revenue);

    return (
        <Card 
            sx={{
                width: "100%"
            }}
        >
            <CardHeader title="Revenue Trend" />

            <CardContent 
                sx={{
                    width: "100%",
                    height: {
                        xs: 250,
                        sm: 300,
                        md: 350,
                    },
                }}
            >
                <LineChart
                    xAxis={[
                        {
                            data: months,
                            scaleType: "band",
                        },
                    ]}
                    yAxis={[
                        {
                            valueFormatter: (val: number) => `$${(val ?? 0) / 1000} k`
                        }
                    ]}
                    series={[
                        {
                            data: revenue,
                            valueFormatter: (val) => `$${(val ?? 0) / 1000} k`
                        },
                    ]}
                />
            </CardContent>
        </Card>
    )
}

export default RevenueChart;