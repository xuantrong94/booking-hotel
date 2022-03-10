import React from "react";
import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="" subtitle="">
          <Link to="/rooms" className="btn-primary">Our Rooms</Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
};

export default Home;
