import { Box, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { navigationItems } from '../constants/navigation'
import { navItemStyles } from "../styles/sidebar.styles";

const Sidebar = () => {


    return (
        <Box
            sx={{
                width: 240,
                bgcolor: "primary.main",
                color: "white",
                p: 2,
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Typography variant="h6">
                Enterprise Dashboard
            </Typography>

            <List>
                {
                    navigationItems.map((item) => (
                        <ListItemButton
                            key={item.path}
                            component={NavLink}
                            to={item.path}
                            sx={navItemStyles}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    ))
                }
            </List>
        </Box>
    );
};

export default Sidebar;