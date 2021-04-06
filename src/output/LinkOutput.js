import React from 'react';
import PropTypes from 'prop-types';


const LinkOutput = ({ content }) => {
  window.location.replace(content);
  return React.createElement();
};

TextErrorOutput.propTypes = {
  content: PropTypes.string.isRequired
};

export default LinkOutput;
