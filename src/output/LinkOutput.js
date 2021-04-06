import React from 'react';
import PropTypes from 'prop-types';


function LinkOutput({ content }) {
  window.location.replace(content);
  return React.createElement("div");
};

LinkOutput.propTypes = {
  content: PropTypes.string.isRequired
};

export default LinkOutput;
