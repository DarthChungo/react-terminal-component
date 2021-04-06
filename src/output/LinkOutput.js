import React from 'react';
import PropTypes from 'prop-types';
import LinkContainer from './LinkContainer';


const LinkOutput = ({ content }) => (
  <LinkContainer content={content}></LinkContainer>
);

TextErrorOutput.propTypes = {
  content: PropTypes.string.isRequired
};

export default LinkOutput;
