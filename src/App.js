import React from 'react';
import Navbar from './Navbar';
import AddSched from './AddSched';
import Status from './Status';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleAddSched = this.toggleAddSched.bind(this);
    this.state = {addSchedState: false}
  }

  toggleAddSched() {
    this.setState(state => ({ addSchedState: !state.addSchedState }));
  }

  render() {
    return (
      <React.Fragment>
        <Navbar toggleAddSched={this.toggleAddSched} />
        <Status />
        <AddSched addSchedState={this.state.addSchedState} />
      </React.Fragment>
    );
  }
}

export default App;
