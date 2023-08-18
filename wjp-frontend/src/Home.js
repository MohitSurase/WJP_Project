import React from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import HomeCarousel from "./HomeCarousel";
import HomeC1 from "./HomeC1";
import HomeC2 from "./HomeC2";
import HomeC3 from "./HomeC3";
import FunctionalPage from "./FunctionalPage";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <Navbar2 />

      {/* Image Carousel */}
      <HomeCarousel />

      {/* Text card */}
      <HomeC1 />

      {/* 3 image tabs */}
      {/* <HomeC2 /> */}

      {/* Block Card with Image */}
      {/* <HomeC3 /> */}

      {/* Footer  */}
      <Footer />
    </>
  );
}
