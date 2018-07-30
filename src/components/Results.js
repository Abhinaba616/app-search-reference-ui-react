import PropTypes from "prop-types";
import React from "react";

import "./Results.css";

function Results({ children }) {
  return <div className="Results">{children}</div>;
}

Results.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Results;