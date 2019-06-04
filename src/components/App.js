import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Router} from 'react-router-dom'
import "isomorphic-fetch"
import './reduxExample'
class App extends Component {


  render() {

    return (
      <div>
        Hello Nguyen Quoc Anh Chuong
      </div>
    );
  }
}
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
  , document.getElementById('root'));
