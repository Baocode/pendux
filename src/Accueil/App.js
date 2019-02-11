import React, { Component } from 'react';
import logo from '../Asset/logo.svg';

import './App.css';
import {withRouter} from "react-router";


class App extends Component {

    handleOnCLick = () =>{
        const {history} = this.props;
            history.push('/startgame')
    };

  render() {

    return (
      <div className="App">
        <header className="Pendux">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Pendux </h1>
        </header>
          <button onClick={this.handleOnCLick}>
              JOUER !!!
          </button>
      </div>
    );
  }
}

export default withRouter(App);
