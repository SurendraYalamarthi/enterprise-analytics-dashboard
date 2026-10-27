import { Grid } from "@mui/material";
import MetricCard from "../../components/MetricCard";
import type { User } from "../../types/users"

type UsersSummaryProps = {
    data: User[];
}

const UsersSummary = ({ data }: UsersSummaryProps) => {

    const usersCount = data.reduce<Record<string, number>>((oldVal, newVal) => {
        const statusKey = newVal.status.toLowerCase()

        oldVal[statusKey] = (oldVal[statusKey] ?? 0) + 1;

        return oldVal;
    }, {active: 0, inactive:0});

    return (
        <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3 }}>
            <Grid size={1}>
                <MetricCard metric={{ label: "Total Users", value: data.length }} />
            </Grid>
            <Grid size={1}>
                <MetricCard metric={{ label: "Active Users", value: usersCount['active'] }} />
            </Grid>
            <Grid size={1}>
                <MetricCard metric={{ label: "Inactive Users", value: usersCount['inactive'] }} />
            </Grid>
        </Grid>
    )
}

export default UsersSummary;