// src/App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fffbec]">
      <Navbar />
      <div className="flex-1">
      <Outlet />
    </div>
    <Footer />
    </div>
  );
}


