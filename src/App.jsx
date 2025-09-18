import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      {/* Navbar could go here later */}
      <Outlet /> {/* 👈 this is where the child page (HomePage, etc.) will render */}
      {/* Footer could go here later */}
    </div>
  );
}


