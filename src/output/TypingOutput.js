import React from 'react';
import PropTypes from 'prop-types';
import TypingContainer from 'output/TypingContainer';

const TypingOutput = ({ content }) => (
  <TypingContainer sequence={content.content} typeSpeed={content.options.typeSpeed} deleteSpeed={content.options.deleteSpeed}></TypingContainer>
);

export default TypingOutput;
