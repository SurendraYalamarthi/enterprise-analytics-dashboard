import type { SvgIconComponent } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReportIcon from "@mui/icons-material/Report";
import UsersIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

export interface NavigationItem {
  label: string;
  path: string;
  icon: SvgIconComponent
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: DashboardIcon
  },
  {
    label: "Reports",
    path: "/reports",
    icon: ReportIcon
  },
  {
    label: "Users",
    path: "/users",
    icon: UsersIcon
  },
  {
    label: "Settings",
    path: "/settings",
    icon: SettingsIcon
  },
];