import { Routes, Route } from "react-router-dom";
import NotificationProvider from "./context/NotificationProvider";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import ProjectDetails from "./Pages/Projects/details/ProjectDetails";

function App() {
  return (
    <main className="app">
      <NotificationProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </NotificationProvider>
    </main>
  );
}

export default App;
