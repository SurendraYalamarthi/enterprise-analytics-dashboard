import { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AppLayout = () => {
  
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100dvh" }}>
      <Header isSidebarCollapsed={isSidebarCollapsed} onSidebarToggle={() => setIsSidebarCollapsed(prev => !prev)} />

      <Box sx={{ flexGrow: 1, display: "flex" }}>

        <Sidebar
         isSidebarCollapsed={isSidebarCollapsed}
        />
        <Box sx={{ p: 3, flexGrow: 1, minWidth: 0 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default AppLayout;