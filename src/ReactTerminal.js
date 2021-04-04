import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTerminalStateless from 'ReactTerminalStateless';
import TerminalStateless from './ReactTerminalStateless';

class Terminal extends Component {
  constructor({emulatorState, inputStr}) {
    super();

    this.state = {
      emulatorState,
      inputStr,
      showInput: true
    };
  }

  _init(props) {
    const {emulatorState, inputStr} = props;

    this.setState({
      emulatorState,
      inputStr
    });
  }

  componentDidMount() {
    this._init(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this._init(nextProps);
    }
  }

  _onInputChange = (inputStr) => {
    this.setState({inputStr});6
  }

  _onStateChange = (emulatorState) => {
    this.setState({emulatorState, inputStr: ''});
  }

  setShowInput(doIt) {
    this.setState({showInput: doIt});
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {emulatorState: removedEmulatorState, inputStr: removedInputStr, ...otherProps} = this.props;
    const {emulatorState, inputStr, showInput } = this.state;

    // We're using the spread operator to pass along all props to the child componentm
    // except for emulatorState and inputStr which must come from the state.
    return (
      <ReactTerminalStateless
        {...otherProps}
        emulatorState={emulatorState}
        acceptInput={showInput}
        inputStr={inputStr}
        onInputChange={this._onInputChange}
        onStateChange={this._onStateChange}
      />
    );
  }
};

Terminal.propTypes = {
  ...TerminalStateless.commonPropTypes,
  emulatorState: PropTypes.object,
  inputStr: PropTypes.string
};

Terminal.defaultProps = {
  ...TerminalStateless.defaultProps
};

export default Terminal;
