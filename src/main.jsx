import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/Homepage.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import WebDesign from "./pages/WebDesigns.jsx";
import{
  Simulations,
  VideoWorks,
  Archive,
} from "./components/PlaceHolders.jsx"

import TraditionalLayout from "./components/TradLayout.jsx";
import CollectionStrip from "./components/TradStrip.jsx";

const ThreeDModelsPage = lazy(() => import("./pages/ThreeDModels.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/portfolio",
        element: <Portfolio />,
        children:[
          { index: true,element: <ThreeDModelsPage /> }, //default tab
          { path: "3d-models", element: <ThreeDModelsPage /> },
          { path: "simulations", element: <Simulations /> },
          { path: "video-works", element: <VideoWorks /> },
          { path: "archive", element: <Archive /> },
        ]
      },

      {
        path: "/traditional",
        element: <TraditionalLayout />,
        children: [
          { index: true, element: <Navigate to ="portraits" replace /> },
          { path: ":collection", element: <CollectionStrip /> },
        ],
      },

      { path: "/web-design", element: <WebDesign /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <Suspense fallback={<div className="p-6">Loading…</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
