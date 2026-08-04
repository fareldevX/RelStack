import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import HomePage from "../layouts/home-layout";

function AppRoutes() {
  return (
    <main className="app">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default AppRoutes;
