import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="app-container">
        <Outlet />
      </div>
    </>
  )
}

export default Layout;