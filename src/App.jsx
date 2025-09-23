// src/App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}


