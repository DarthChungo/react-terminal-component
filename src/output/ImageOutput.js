import React from 'react';
import PropTypes from 'prop-types';
import ImageContainer from 'output/ImageContainer';

const ImageOutput = ({ content }) => (
  <ImageContainer img_src={content}></ImageContainer>
);

ImageOutput.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ImageOutput;
