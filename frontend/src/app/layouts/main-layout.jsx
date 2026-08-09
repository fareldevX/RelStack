import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/layouts/navbar";
import Footer from "@/components/layouts/footer";

function MainLayout() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <>
      {!isContactPage && <Navbar />}
      <Outlet />
      {!isContactPage && <Footer />}
    </>
  );
}

export default MainLayout;
