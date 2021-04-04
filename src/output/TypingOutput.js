import React from 'react';
import PropTypes from 'prop-types';
import TypingContainer from 'output/TypingContainer';

const TypingOutput = ({ content, typeSpeed, deleteSpeed }) => (
  <TypingContainer sequence={content} typeSpeed={typeSpeed} deleteSpeed={deleteSpeed}></TypingContainer>
);

TypingOutput.propTypes = {
  content: PropTypes.array.isRequired,
  typeSpeed: PropTypes.number.isRequired,
  deleteSpeed: PropTypes.number.isRequired
};

export default TypingOutput;
