import React from "react";
import PropTypes from "prop-types";

const Hero = (props) => {
  return <header className={props.hero}>{props.children}</header>;
};

Hero.propTypes = {
  hero: PropTypes.string,
};

export default Hero;
