import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        data: null
    };
    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
            .then(res => res.json())
            .then((stuff) => {
              console.log('WHAT IS stuff',stuff)
              this.setState({ data: stuff })
            })
            .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('/api/book');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p className="App-intro">DATA:{this.state.data}</p>
        </header>
      </div>
    );
  }
}

export default App;
