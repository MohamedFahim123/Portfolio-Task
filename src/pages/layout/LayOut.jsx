import { Outlet } from "react-router-dom";
import SideBar from "../../components/sideBar/SideBar";
import NavBarResponsive from "../../components/navBarResponsive/NavBarResponsive";

export default function LayOut() {
  return (
    <div className="layOut__handler">
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <NavBarResponsive />
          <div className="col-md-2 d-none d-lg-block"></div>
          <div className="col-lg-10 p-0 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
