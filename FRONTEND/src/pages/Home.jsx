import React from "react";
import HeroPage from "../SECTIONS/HeroPage";
import Navbar from "../components/Navbar";
import Services from "../SECTIONS/Services";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroPage />
      <Services />
    </div>
  );
};

export default Home;
