import React from "react";
import PropTypes from "prop-types";

const Title = (props) => {
  return (
    <div className="section-title">
      <h4>{props.title}</h4>
      <div></div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
