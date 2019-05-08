import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Welcome(props) {
  return <h1>Hello, {props.name} bitches</h1>;
}

function DateDisplay(props) {
  return <input type="text" value={props.date}></input>
}

function App() {
  return (
    <div>
      <Welcome name={formatName(user)} />
      <DateDisplay date={new Date().toLocaleTimeString()} />
    </div>
  );
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: "Jolo",
  lastName: "Balbin"
};

function tick() {
  ReactDOM.render(<App />, document.getElementById('root'));
}
  
setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
