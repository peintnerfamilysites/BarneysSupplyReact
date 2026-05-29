import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Services from "./pages/services/Services.jsx";
import Insurance from "./pages/insurance/Insurance.jsx";
import Error from "./pages/error/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define the routes for the application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/insurance",
    element: <Insurance />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

// Render the application using the router
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
