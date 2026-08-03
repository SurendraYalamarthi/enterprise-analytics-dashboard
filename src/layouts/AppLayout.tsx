import { Box, Typography } from "@mui/material"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Enterprise Analytics Dashboard
      </Typography>

      <Outlet />

    </Box>
  )
}

export default AppLayout;