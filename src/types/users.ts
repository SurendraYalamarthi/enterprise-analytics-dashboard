export type UserStatus = "Active" | "Inactive";

export type UserRole = "Admin" | "Manager" | "Analyst" | "Viewer";

export type UserDepartment = "Engineering" | "Finance" | "Marketing" | "Operations" | "Human Resources" | "Sales";

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  department: UserDepartment;
  status: UserStatus;
  lastActive: string;
}

export type UserFilters = {
  nameOrEmail: string;
  role: UserRole | "All";
  department: UserDepartment | "All";
  status: UserStatus | "All";
};