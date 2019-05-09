import React from 'react';

class Toggle extends React.Component {
    render() {
      return (
        <button onClick={this.props.changeName}>
          Click me
        </button>
      );
    }
}

export default Toggle;