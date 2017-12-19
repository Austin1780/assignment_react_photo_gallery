import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import users from "./users";
import Gallery from "./Gallery";
import User from "./User";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Photo Gallery</h1>
        </header>
        <h2>Search for an individual user:</h2>
        <User />
        <h2>Gallery of All Users:</h2>
        <Gallery users={users} />
      </div>
    );
  }
}

export default App;
