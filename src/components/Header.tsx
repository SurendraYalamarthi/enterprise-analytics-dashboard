import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material"

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
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