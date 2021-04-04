import React from 'react';
import PropTypes from 'prop-types';
import TypingContainer from 'output/TypingContainer';

const TypingOutput = ({ content }) => (
  <TypingContainer sequence={content.content} typeSpeed={content.options.typeSpeed} deleteSpeed={content.options.deleteSpeed}></TypingContainer>
);

TypingOutput.propTypes.content = {
  content: PropTypes.array.isRequired,
  
};

TypingOutput.propTypes.content.options = {
  typeSpeed: PropTypes.number.isRequired,
  deleteSpeed: PropTypes.number.isRequired
};

export default TypingOutput;
