import { useEffect, useState } from "react";
import { reportData } from "../../mock/reports";
import type { Report, ReportFilters } from "../../types/reports";

const useReports = () => {
    const [reports, setReports] = useState<Report[]>([]);
    const [filteredReports, setFilteredReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const defaultFilters: ReportFilters = { status: "All", startDate: null, endDate: null, reportType: "", region: "" };

    const applyFilters = (filters: ReportFilters = defaultFilters) => {

        const {
            status,
            startDate,
            endDate,
            reportType,
            region,
        } = filters;
        if (!startDate && !endDate && !reportType && !region && status === "All") {
            setFilteredReports([...reports]);
            return;
        }

        const sd = startDate?.tz('Asia/Kolkata')?.toDate();
        const ed = endDate?.tz('Asia/Kolkata')?.toDate();
        const filteredData = reports.filter(val => {
            const reportDate = new Date(val.date + 'T00:00:00+05:30');
            return (!sd || sd <= reportDate) &&
                (!ed || ed >= reportDate) &&
                (!reportType || val.reportType === reportType) &&
                (status === "All" || val.status.toLowerCase() === status.toLowerCase()) &&
                (!region || val.region === region)
        });

        setFilteredReports(filteredData);
    }

    useEffect(() => {
        const reportsTimer = setTimeout(() => {
            setReports([...reportData]);
            setFilteredReports([...reportData]);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(reportsTimer)
    }, []);

    return {
        filteredReports,
        loading,
        applyFilters
    }
}

export default useReports;