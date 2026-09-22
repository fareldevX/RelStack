import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import HomePage from "@/pages/Home/HomePage";
import ContactPage from "@/pages/Contact/ContactPage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
