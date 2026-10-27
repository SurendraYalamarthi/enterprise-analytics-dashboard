import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from "@mui/material";
import type { User } from "../../types/users";
import { useState } from "react";
import UserEditForm from "./UserEditForm";

type UsersTableProps = {
    data: User[]
}

const UsersTable = ({data}: UsersTableProps) => {

    const [sortBy, setSortBy] = useState<keyof User>("name");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    
    const handleSort = (column: keyof User) => {
        if (sortBy === column) {
            setSortDirection(prevVal => prevVal === "asc" ? "desc" : "asc");
        } else {
            setSortBy(column);
            setSortDirection("asc");
        }
    }

    const sortedData = [...data].sort((a, b) => {
        const valA = a[sortBy];
        const valB = b[sortBy];

        if(valA < valB) {
            return sortDirection == "asc" ? -1 : 1;
        }

        if(valA > valB) {
            return sortDirection == "asc" ? 1 : -1;
        }

        return 0;
    });

    const handleEditToggle = (user: User | null = null) => {
        setIsEditOpen(prevState => !prevState);
        setSelectedUser(user);
    }

  return (
    <Stack spacing={2} sx={{maxWidth: '100%'}}>
        <Stack
            direction={'row'}
            sx={{
                width: "100%",
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2,
                borderBottom: 1,
                borderColor: 'divider',
                flexWrap: 'wrap',
                columnGap: 2
            }}
        >
            <Typography variant="h5">
                Users Results
            </Typography>
            <Typography variant="body1">
                {data.length} records
            </Typography>
        </Stack>

        <TableContainer component={Paper} sx={{width: '100%', overflowX: 'auto'}}>
            <Table sx={{ minWidth: 650, tableLayout: 'fixed' }} aria-label="Users Table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>
                            <TableSortLabel 
                                active={sortBy === 'name'}
                                direction={sortBy === 'name' ? sortDirection : "asc"}
                                onClick={handleSort.bind(null, 'name')}
                            >
                                Name
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                            Email
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                            <TableSortLabel 
                                active={sortBy === 'role'}
                                direction={sortBy === 'role' ? sortDirection : "asc"}
                                onClick={handleSort.bind(null, 'role')}
                            >
                            Role
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                            <TableSortLabel 
                                active={sortBy === 'department'}
                                direction={sortBy === 'department' ? sortDirection : "asc"}
                                onClick={handleSort.bind(null, 'department')}
                            >
                            Department
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                            <TableSortLabel 
                                active={sortBy === 'status'}
                                direction={sortBy === 'status' ? sortDirection : "asc"}
                                onClick={handleSort.bind(null, 'status')}
                            >
                            Status
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                            <TableSortLabel 
                                active={sortBy === 'lastActive'}
                                direction={sortBy === 'lastActive' ? sortDirection : "asc"}
                                onClick={handleSort.bind(null, 'lastActive')}
                            >
                            Last Active
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        sortedData.length > 0
                            ? sortedData.map((val) => (
                                <TableRow key={val.id}>
                                    <TableCell>
                                        {val.name}
                                    </TableCell>
                                    <TableCell align="center" sx={{ wordWrap: 'anywhere' }}>
                                        {val.email}
                                    </TableCell>
                                    <TableCell align="center">
                                        {val.role}
                                    </TableCell>
                                    <TableCell align="center">
                                        {val.department}
                                    </TableCell>
                                    <TableCell align="center">
                                        {val.status}
                                    </TableCell>
                                    <TableCell align="center">
                                        {val.lastActive}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="text" onClick={handleEditToggle.bind(null, val)}>
                                            edit
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )) : (
                                <TableRow>
                                    <TableCell colSpan={7} align="center">
                                        No users found. Try adjusting your filters.
                                    </TableCell>
                                </TableRow>
                            )
                    }
                </TableBody>
            </Table>

        </TableContainer>
        {
            selectedUser ? 
                <UserEditForm
                    selectedUser={selectedUser}
                    open={isEditOpen}
                    onClose={handleEditToggle}
                /> 
                : null
        }
    </Stack>
  )
}

export default UsersTable;