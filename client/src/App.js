import React, { Component } from 'react';
import './App.css';
import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  };

  componentDidMount() {
    const socket = socketIOClient("");
    socket.on("count", data => this.setState({ count: data }));
  }

  render() {
    return (
      <div className="App">
        <p className="App_text">There {this.state.count == 1 ? "is" : "are"}</p>
        <p className="App_counter">{this.state.count}</p>
        <p className="App_text">{this.state.count == 1 ? "person" : "people"} here</p>
      </div>
    );
  }
}

export default App;
