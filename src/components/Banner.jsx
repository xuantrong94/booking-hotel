import React from "react";
import PropTypes from "prop-types";

const Banner = (props) => {
  return (
    <div className="banner">
      <h1>{props.title}</h1>
      <div className=""></div>
      <p>{props.subtitle}</p>
      {props.children}
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Banner;
