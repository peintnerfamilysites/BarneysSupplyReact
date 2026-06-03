import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Services from "../pages/services/Services.jsx";
import Insurance from "../pages/insurance/Insurance.jsx";
import TermsOfUse from "../pages/termsofuse/TermsOfUse.jsx";
import Error from "../pages/error/Error.jsx";
import { SITE } from "../config/site";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/services", element: <Services /> },
  { path: "/insurance", element: <Insurance /> },
  { path: "/terms", element: <TermsOfUse /> },
  { path: "*", element: <Error /> },
];

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      errorElement: <Error />,
      children: routes,
    },
  ],
  { basename: SITE.basePath },
);
