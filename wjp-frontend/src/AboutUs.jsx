import React from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import AboutH1 from "./AboutH1";
import AboutTextCarousel from "./AboutTextCarousel";
import AboutPresence from "./AboutPresence";
import AboutBoard from "./AboutBoard";

export default function AboutUs() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Navbar2></Navbar2>

      {/* About heading */}
      <AboutH1 />

      {/* About paragraph & Carousel*/}
      <AboutTextCarousel />

      {/* Our presence */}
      <AboutPresence />

      {/* Board of directors */}
      <AboutBoard />

      {/* Footer */}
      <Footer></Footer>
    </>
  );
}
