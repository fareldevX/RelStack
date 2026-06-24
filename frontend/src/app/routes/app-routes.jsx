import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import HomePage from "../layouts/home-layout";
import ArchiveDetailsPage from "../../features/archives/pages/archive-details";

function AppRoutes() {
  return (
    <main className="app">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ArchiveDetailsPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default AppRoutes;
