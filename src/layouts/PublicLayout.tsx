import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <div>PublicLayout</div>
      <Outlet />
    </div>
  )
}

export default PublicLayout;