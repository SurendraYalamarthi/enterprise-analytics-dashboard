import { Box, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { navigationItems } from '../constants/navigation'
import { navItemStyles } from "../styles/sidebar.styles";

interface sidebarPropTypes {
    isSidebarCollapsed: boolean;
}

const Sidebar = ({ isSidebarCollapsed }: sidebarPropTypes) => {


    return (
        <Box
            sx={{
                width: isSidebarCollapsed ? 64 : 240,
                transition: "width 250ms ease",
                overflow: "hidden",
                boxSizing: "border-box",
                bgcolor: "primary.main",
                color: "white",
                p: 2,
                display: "flex",
                flexDirection: "column",
                flexShrink: 0
            }}
        >
            {
                !isSidebarCollapsed && (
                    <Typography 
                        variant="h6" 
                        sx={{
                            opacity: isSidebarCollapsed ? 0 : 1,
                            transition: "opacity 150ms ease",
                            whiteSpace: "nowrap"
                        }}
                    >
                        Enterprise Dashboard
                    </Typography>
                )
            }
            <List>
                {
                    navigationItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <ListItemButton
                                key={item.path}
                                component={NavLink}
                                to={item.path}
                                sx={navItemStyles.bind(null, isSidebarCollapsed)}
                            >
                                <Icon />
                                {
                                    !isSidebarCollapsed && (
                                        <ListItemText primary={item.label} sx={{
                                            display: isSidebarCollapsed ? "none" : "block",
                                            transition: "display 150ms ease"
                                        }} />
                                    )
                                }
                            </ListItemButton>
                        )
                    })
                }
            </List>
        </Box>
    );
};

export default Sidebar;