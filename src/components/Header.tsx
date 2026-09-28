import { AppBar, IconButton, Avatar, Box, Toolbar, Typography } from "@mui/material"
import { Menu, MenuOpen } from "@mui/icons-material";

interface headerPropTypes {
  isSidebarCollapsed: boolean;
  onSidebarToggle: () => void;
}

const Header = ({ isSidebarCollapsed, onSidebarToggle }: headerPropTypes) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={onSidebarToggle}>
          {isSidebarCollapsed ? <Menu sx={{ color: '#fff' }} /> : <MenuOpen sx={{ color: '#fff' }} />}
        </IconButton>
        <Typography variant="h6">
          Enterprise Analytics Dashboard
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Avatar>S</Avatar>
      </Toolbar>
    </AppBar>
  )
}

export default Header