import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.server }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    return (
      <div className="App">
        <p className="App_text">There are</p>
        <p className="App_counter">{this.state.response}</p>
        <p className="App_text">people here</p>
      </div>
    );
  }
}

export default App;
