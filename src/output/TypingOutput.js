import React from 'react';
import PropTypes from 'prop-types';
import TypingContainer from 'output/TypingContainer';

const TypingOutput = ({ content }) => (
  <TypingContainer content={content}></TypingContainer>
);

TypingOutput.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TypingOutput;
