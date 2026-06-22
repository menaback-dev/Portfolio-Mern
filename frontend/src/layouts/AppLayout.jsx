import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function AppLayout() {
  return (
    <>
    <ScrollToTop />

    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6">
        <Outlet />
      </main>

      <Footer />
    </div>
    </>
  );
}