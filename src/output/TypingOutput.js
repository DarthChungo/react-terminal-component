import React from 'react';
import PropTypes from 'prop-types';
import TypingContainer from 'output/TypingContainer';

const TypingOutput = ({ content }) => (
  <TypingContainer sequence={content}></TypingContainer>
);a

TypingOutput.propTypes = {
  content: PropTypes.array.isRequired
};

export default TypingOutput;
