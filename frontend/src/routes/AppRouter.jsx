import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import ProjectDetails from "@/pages/ProjectDetails";
import NotFound from "@/pages/NotFound";
import ContactPage from "@/pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
    {
        index: true,
        element: <Home />,
    },
    {
        path: "projects",
        element: <Projects />,
    },
    {
        path: "projects/:id",
        element: <ProjectDetails />,
    },
    {
        path: "about",
        element: <About />,
    },
    {
      path: "contact",
      element: <ContactPage />,
    },
    {
    path: "*",
    element: <NotFound />,
    },
    ],
  },
]);