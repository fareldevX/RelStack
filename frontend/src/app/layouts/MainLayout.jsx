import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "@/components/common/Footer";

function MainLayout() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const isNotFoundPage = !isContactPage && location.pathname !== "/";
  const shouldHideChrome = isContactPage || isNotFoundPage;

  return (
    <div className="min-h-screen">
      {!shouldHideChrome && <Navbar />}

      <main>
        <Outlet />
      </main>

      {!shouldHideChrome && <Footer />}
    </div>
  );
}

export default MainLayout;
