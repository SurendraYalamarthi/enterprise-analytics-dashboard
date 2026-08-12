import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100dvh" }}>
      <Header />

      <Box sx={{ flexGrow: 1, display: "flex" }}>

        <Sidebar />
        <Box sx={{ p: 3, flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default AppLayout;