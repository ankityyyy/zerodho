import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Statas from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../../OpenAccount";
import Footer from "../../Footer";
import Navebar from "../../Navebar";

function HomePage() {
  return (
    <>
      <Navebar />
      <Hero />
      <Awards />
      <Statas />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage;
