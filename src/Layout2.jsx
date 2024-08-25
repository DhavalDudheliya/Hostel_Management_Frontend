import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

function Layout2() {
  return (
    <>
      <div className="landing_background h-full">
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout2;
