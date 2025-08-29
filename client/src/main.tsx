import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout";
import Home from "./routes/Home";
import Guests from "./routes/Guests";
import NewGuest from "./routes/NewGuest";
import EditGuest from "./routes/EditGuest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   
    children: [
      { path: "/", element: <Home /> },
      { path: "/guests", element: <Guests /> },
      { path: "/guests/new", element: <NewGuest /> },
      { path: "/guests/:id", element: <EditGuest /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
