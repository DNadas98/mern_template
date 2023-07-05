import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./style/index.css";

import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";
import Projects from "./pages/projects/Projects";
import TestError from "./pages/TestError";
import DocumentsList from "./pages/documents/Documents";
import CreateDocument from "./pages/documents/CreateDocument";
import UpdateDocument from "./pages/documents/UpdateDocument";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Projects />
      },
      {
        path: "/documents",
        element: <DocumentsList />
      },
      {
        path: "/documents/create",
        element: <CreateDocument />
      },
      {
        path: "/documents/update/:id",
        element: <UpdateDocument />
      },
      {
        path: "/test-error",
        element: <TestError />
      },
      {
        path: "/*",
        element: <NotFound />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
