import {
    Chip,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    TableSortLabel,
    TablePagination
} from "@mui/material"
import type { Report } from "../../types/reports"
import { reportsFilters } from "../../mock/reports"
import { currencyFormatter } from "../../utils/formatter"
import { statusColorMap } from "../../utils/mapping"
import React, { useState } from "react"

type ReportsTableProps = {
    data: Report[]
}

const ReportsTable = ({ data }: ReportsTableProps) => {

    const [sortBy, setSortBy] = useState<keyof Report>('date');
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">('asc');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleSort = (column: keyof Report) => {
        if (sortBy === column) {
            setSortDirection(prevVal => prevVal === "asc" ? "desc" : "asc");
        } else {
            setSortBy(column);
            setSortDirection("asc");
        }
    }

    const handlePageChange = (_e: unknown, newPage: number) => {
        setPage(newPage);
    }

    const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    }

    const reportTypeLabels = Object.fromEntries(
        reportsFilters.reportTypes.map((type) => [type.value, type.label])
    );

    const sortedData = [...data].sort((a, b) => {
        const valA = a[sortBy];
        const valB = b[sortBy];

        if (valA < valB) {
            return sortDirection === "asc" ? -1 : 1
        }


        if (valA > valB) {
            return sortDirection === "asc" ? 1 : -1
        }

        return 0;
    });

    const paginatedData = sortedData.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    )

    return (
        <Stack spacing={2} sx={{ maxWidth: '100%' }}>
            <Stack
                direction="row"
                sx={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                    borderBottom: 1,
                    borderColor: "divider",
                    flexWrap: "wrap",
                    columnGap: 2,
                    rowGap: 1
                }}
            >
                <Typography variant="h5">
                    Report Results
                </Typography>
                <Typography variant="body1">
                    {data.length} records
                </Typography>
            </Stack>
            <TableContainer component={Paper} sx={{ width: '100%', maxWidth: '100%', overflowX: 'auto' }}>
                <Table sx={{ minWidth: 650 }} aria-label="Reports Table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>
                                <TableSortLabel
                                    active={sortBy === "date"}
                                    direction={sortBy === "date" ? sortDirection : "asc"}
                                    onClick={() => handleSort("date")}
                                >
                                    Date
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                                <TableSortLabel
                                    active={sortBy === "reportType"}
                                    direction={sortBy === "reportType" ? sortDirection : "asc"}
                                    onClick={() => handleSort("reportType")}
                                >
                                    Report Type
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                                <TableSortLabel
                                    active={sortBy === "region"}
                                    direction={sortBy === "region" ? sortDirection : "asc"}
                                    onClick={() => handleSort("region")}
                                >
                                    Region
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                                <TableSortLabel
                                    active={sortBy === "status"}
                                    direction={sortBy === "status" ? sortDirection : "asc"}
                                    onClick={() => handleSort("status")}
                                >
                                    Status
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                                <TableSortLabel
                                    active={sortBy === "value"}
                                    direction={sortBy === "value" ? sortDirection : "asc"}
                                    onClick={() => handleSort("value")}
                                >
                                    Value
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            paginatedData.length > 0 ?
                                paginatedData.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>
                                            {row.date}
                                        </TableCell>
                                        <TableCell align="center">{reportTypeLabels[row.reportType]}</TableCell>
                                        <TableCell align="center">{row.region}</TableCell>
                                        <TableCell align="center">
                                            <Chip
                                                label={row.status}
                                                color={statusColorMap[row.status]}
                                                size="small"
                                                sx={{ minWidth: 90 }}
                                            />
                                        </TableCell>
                                        <TableCell align="right">{currencyFormatter.format(row.value)}</TableCell>
                                    </TableRow>
                                ))
                                : (
                                    <TableRow>
                                        <TableCell colSpan={5} align="center">
                                            No reports found. Try adjusting your filters.
                                        </TableCell>
                                    </TableRow>
                                )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination 
                rowsPerPageOptions={[5, 10, 15]}
                component={"div"}
                count={sortedData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
            />
        </Stack>
    )
}

export default ReportsTable;