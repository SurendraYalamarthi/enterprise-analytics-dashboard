import { useEffect, useState } from "react"
import type { User, UserFilters } from "../../types/users";
import { userData } from "../../mock/users";

const useUsers = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const applyFilters = ({ nameOrEmail, role, department, status }: UserFilters) => {
        if (nameOrEmail === "" && role === "All" && department === "All" && status === "All") {
            setFilteredUsers([...users]);
            return;
        }

        const filteredData = users.filter(val => {
            return (
                !nameOrEmail ||
                val.name.toLowerCase().includes(nameOrEmail.toLowerCase()) ||
                val.email.toLowerCase().includes(nameOrEmail.toLowerCase())
            ) &&
                (role === "All" || val.role === role) &&
                (department === "All" || val.department === department) &&
                (status === "All" || val.status === status)
        });

        setFilteredUsers(filteredData);
    }

    useEffect(() => {
        const usersTimer = setTimeout(() => {
            setUsers([...userData]);
            setFilteredUsers([...userData]);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(usersTimer);
    }, []);

    return {
        users,
        loading,
        filteredUsers,
        applyFilters
    }
}

export default useUsers