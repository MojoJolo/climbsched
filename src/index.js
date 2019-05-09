import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';
import Toggle from './Toggle';
import * as serviceWorker from './serviceWorker';

// Resources
// https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
// https://reactjs.org/docs/handling-events.html

function Welcome(props) {
  return <h1>Hello, {props.name} bitches</h1>;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeName = this.changeName.bind(this);
    this.state = {name: "Jolo"}
  }

  changeName() {
    this.setState(state => ({
      name: state.name === "Jolo" ? "Balbin" : "Jolo"
    }));
  }

  render() {
    return (
      <div>
        <Welcome name={this.state.name} />
        <Clock />
        <Toggle changeName={this.changeName} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
