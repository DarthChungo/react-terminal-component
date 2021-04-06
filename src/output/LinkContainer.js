import React from 'react';

function Component(props) {
  window.location.replace(props.url);
  return React.createElement("div");
}

const LinkContainer = (props) => <Component url={props.content}></Component>;

export default LinkContainer;