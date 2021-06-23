import React, { Component } from 'react';
import { Alert } from 'reactstrap';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading...'
    };
  }

  componentDidMount() {
    const self = this;
    fetch('/actuator/health')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then((result) => {
        self.setState({ status: result.status });
      })
      .catch((err) => {
        self.setState({ status: 'Down', error: err });
      });
  }

  render() {
    return (
      <div className="ed-app">
        <Alert color="success">
          Successfully running React + Spring Boot App : Server Status:{' '}
          {this.state.status}
        </Alert>
      </div>
    );
  }
}

export default App;
