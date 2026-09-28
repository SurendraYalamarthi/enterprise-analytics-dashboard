export const navItemStyles = (sidebarCollapsed: boolean) => ({
  justifyContent: sidebarCollapsed ? "center" : "flex-start",
  px: sidebarCollapsed ? 1 : 2,

  "&.active": {
    bgcolor: "primary.dark",
  },
});