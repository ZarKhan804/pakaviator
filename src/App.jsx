import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";


// ================= SCROLL TO TOP =================

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};


// ================= APP =================

const App = () => {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Header />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
};

export default App;