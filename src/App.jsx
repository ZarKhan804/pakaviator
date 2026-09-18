import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";


// Scroll to top whenever page changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}


// Temporary page for future pages
function TemporaryPage({ title }) {
  return (
    <main className="min-h-screen bg-gray-200 px-5 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 text-center shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900">
          {title}
        </h1>

        <p className="mt-4 text-gray-600">
          This page is temporarily available. Full content will be added soon.
        </p>
      </div>
    </main>
  );
}


function AppContent() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* Temporary Pages */}
        <Route
          path="/aviator-game"
          element={<TemporaryPage title="Aviator Game" />}
        />

        <Route
          path="/aviator-download"
          element={<TemporaryPage title="Aviator Download" />}
        />

        <Route
          path="/aviator-app"
          element={<TemporaryPage title="Aviator App" />}
        />

        <Route
          path="/aviator-guide"
          element={<TemporaryPage title="Aviator Guide" />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<TemporaryPage title="Page Not Found" />}
        />

      </Routes>

      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;