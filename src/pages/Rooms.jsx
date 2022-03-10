import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Rooms = () => {
  return (
    <Hero className="roomsHero">
      <Banner title="our rooms" subtitle="">
        <Link to="" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
