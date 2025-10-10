import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/Homepage.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import TraditionalLayout from "./components/TradLayout.jsx";
import CollectionStrip from "./components/TradStrip.jsx";
import WebDesign from "./pages/WebDesigns.jsx";

const ThreeDModelsPage = lazy(() => import("./pages/ThreeDModels.jsx"));
const SimulationsPage = lazy(() => import("./pages/Simulations.jsx"));
const VideoWorksPage = lazy(() => import("./pages/VideoWorks.jsx"));
const ArchivePage = lazy(() => import("./pages/Archive.jsx"));

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
          { path: "simulations", element: <SimulationsPage /> },
          { path: "video-works", element: <VideoWorksPage /> },
          { path: "archive", element: <ArchivePage /> },
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
