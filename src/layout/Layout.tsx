import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Layout/Navbar/Navbar";
import { Footer } from "../components/Layout/Footer";

export function Layout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
