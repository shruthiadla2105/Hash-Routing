import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import OurProducts from "./components/OurProducts";
import "./App.css";
import Header from "./Header";

function App() {
  useEffect(() => {
    if (window.location.hash) {
      console.log("hash", window.location.hash);

      const hash = window.location.hash.replace("#", "");
      const element = document.getElementById(hash);
      // console.log("element", element);
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    }
  });

  const [page, setPage] = useState(
    Number(sessionStorage.getItem("currentPage")) || 1
  );

  useEffect(() => {
    sessionStorage.setItem("currentPage", page);
  }, [page]);

  return (
    <>
      <div className="container">
        {!(
          window.location.href.includes("/") && window.location.pathname !== "/"
        ) && (
          <div
            style={{
              width: "100%",
            }}
          ></div>
        )}
        <div>
          <section id="about">
            <About />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <section id="ourproducts">
            <OurProducts />
          </section>
        </div>

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourproducts" element={<OurProducts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
