import React, { Component } from "react";
import octocat from "./Octocat.png";
import "./App.css";
import users from "./users";
import Gallery from "./Gallery";
import User from "./User";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={octocat} className="App-logo" alt="logo" />
          <h1 className="App-title">React GitHub User Gallery</h1>
        </header>
        <h4>Search for an individual user:</h4>
        <User />
        <h4>Gallery of All Users:</h4>
        <Gallery users={users} />
      </div>
    );
  }
}

export default App;
