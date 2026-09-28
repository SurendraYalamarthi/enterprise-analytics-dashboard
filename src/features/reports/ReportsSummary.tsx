import MetricCard from "../../components/MetricCard";
import type { Report } from "../../types/reports";
import { currencyFormatter } from "../../utils/formatter";
import { Grid } from "@mui/material";

type ReportsSummaryProps = {
    data: Report[];
}

const ReportsSummary = ({ data }: ReportsSummaryProps) => {

    const totalValue = currencyFormatter.format(data.reduce((oldVal, newVal) => oldVal + newVal.value, 0));
    const statusCount = data.reduce<Record<string, number>>((oldVal, newVal) => {

        oldVal[newVal.status.toLowerCase()] = (oldVal[newVal.status.toLowerCase()] ?? 0) + 1;

        return oldVal;
    }, {});

    return (
        <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3 }}>
            <Grid size={1}>
                <MetricCard metric={{ label: 'Total Value', value: totalValue }} />
            </Grid>

            <Grid size={1}>
                <MetricCard metric={{ label: 'Active', value: statusCount['active'] || 0 }} />
            </Grid>

            <Grid size={1}>
                <MetricCard metric={{ label: 'Completed', value: statusCount['completed'] || 0 }} />
            </Grid>

            <Grid size={1}>
                <MetricCard metric={{ label: 'Failed', value: statusCount['failed'] || 0 }} />
            </Grid>

            <Grid size={1}>
                <MetricCard metric={{ label: 'Pending', value: statusCount['pending'] || 0 }} />
            </Grid>

            <Grid size={1}>
                <MetricCard metric={{ label: 'Cancelled', value: statusCount['cancelled'] || 0 }} />
            </Grid>
        </Grid>
    )
}

export default ReportsSummary;