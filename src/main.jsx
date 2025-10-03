import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/homepage.jsx";
import Portfolio from "./pages/portfolio.jsx";
import{
  ThreeDModels,
  Simulations,
  VideoWorks,
  Archive,
} from "./components/placeholders.jsx"

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
          { index: true,element: <ThreeDModels /> }, //default tab
          { path: "3d-models", element: <ThreeDModels /> },
          { path: "simulations", element: <Simulations /> },
          { path: "video-works", element: <VideoWorks /> },
          { path: "archive", element: <Archive /> },
        ]
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
