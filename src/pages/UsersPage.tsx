import React, { useState } from "react";
import {
    Button,
    CircularProgress,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
    type SelectChangeEvent
} from "@mui/material";
import { usersFilters } from "../mock/users";
import UsersTable from "../features/users/UsersTable";
import useUsers from "../features/users/useUsers";
import UsersSummary from "../features/users/UsersSummary";
import type { UserDepartment, UserRole, UserStatus } from "../types/users";

const UsersPage = () => {

    const [nameOrEmail, setNameOrEmail] = useState("");
    const [role, setRole] = useState<UserRole | "All">("All");
    const [department, setDepartment] = useState<UserDepartment | "All">("All");
    const [status, setStatus] = useState<UserStatus | "All">("All");

    const { roles, departments, statuses } = usersFilters;

    const { users, filteredUsers, loading, applyFilters } = useUsers();

    const handleNameOrEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameOrEmail(e.target.value);
    }

    const handleRoleChange = (e: SelectChangeEvent) => {
        setRole(e.target.value as (UserRole | "All"));
    }

    const handleDepartmentChange = (e: SelectChangeEvent) => {
        setDepartment(e.target.value as (UserDepartment | "All"));
    }

    const handleStatusChange = (e: SelectChangeEvent) => {
        setStatus(e.target.value as (UserStatus | "All"));
    }

    const clearAllFilters = () => {
        setNameOrEmail("");
        setRole("All");
        setDepartment("All");
        setStatus("All");
    }

    const handleApply = () => {
        applyFilters({ nameOrEmail, role, department, status });
    }

    const isAnyFilterSelected = !!nameOrEmail || role != "All" || department != "All" || status != "All";

    return (
        <Stack spacing={2}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Users
            </Typography>

            <Typography variant="body1" color="text.secondary">
                View and Manage users
            </Typography>

            {
                loading ? (
                    <Stack sx={{ alignItems: 'center', justifyContent: 'center', minHeight: 100, width: '100%' }}>
                        <CircularProgress aria-label="Fetching users" />
                    </Stack>
                ) : <UsersSummary data={users} />
            }

            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <TextField
                        id="users-filter-nameEmail"
                        label="Name Or Email"
                        variant="outlined"
                        value={nameOrEmail}
                        onChange={handleNameOrEmailChange}
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <FormControl fullWidth>
                        <InputLabel id="users-filter-role">Role</InputLabel>
                        <Select
                            labelId="users-filter-role"
                            id="users-filter-select-role"
                            value={role}
                            label="Role"
                            onChange={handleRoleChange}
                        >
                            <MenuItem value="All">All</MenuItem>
                            {roles.map(val => <MenuItem key={val.value} value={val.value}>{val.label}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <FormControl fullWidth>
                        <InputLabel id="users-filter-department">Department</InputLabel>
                        <Select
                            labelId="users-filter-department"
                            id="users-filter-select-department"
                            value={department}
                            label="Department"
                            onChange={handleDepartmentChange}
                        >
                            <MenuItem value="All">All</MenuItem>
                            {departments.map(val => <MenuItem key={val.value} value={val.value}>{val.label}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <FormControl fullWidth>
                        <InputLabel id="users-filter-status">Status</InputLabel>
                        <Select
                            labelId="users-filter-status"
                            id="users-filter-select-status"
                            value={status}
                            label="Status"
                            onChange={handleStatusChange}
                        >
                            <MenuItem value="All">All</MenuItem>
                            {statuses.map(val => <MenuItem key={val.value} value={val.value}>{val.label}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid size={'auto'}>
                    <Button
                        variant="text"
                        disabled={!isAnyFilterSelected}
                        onClick={handleApply}
                    >
                        Apply
                    </Button>
                </Grid>

                <Grid size={'auto'}>
                    <Button
                        variant="text"
                        disabled={!isAnyFilterSelected}
                        onClick={clearAllFilters}
                    >
                        Clear
                    </Button>
                </Grid>
            </Grid>

            {
                loading ? (
                    <Stack sx={{ alignItems: 'center', justifyContent: 'center', minHeight: 100, width: '100%' }}>
                        <CircularProgress aria-label="Fetching users" />
                    </Stack>
                ) : <UsersTable data={filteredUsers} />
            }
        </Stack>
    )
}

export default UsersPage