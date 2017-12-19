import React, { Component } from "react";
import octocat from "./Octocat.png";
import "./App.css";
import usersList from "./users";
import Gallery from "./Gallery";
import User from "./User";

class App extends Component {
  constructor() {
    //to be able to use this
    super();

    this.state = {
      login: "",
      avatar_url: ""
    };
  }

  onInputChange = e => {
    this.setState({
      login: "",
      avatar_url: ""
    });
  };

  render() {
    //let users = ;
    return (
      <div className="App">
        <header className="App-header">
          <img src={octocat} className="App-logo" alt="logo" />
          <h1 className="App-title">React GitHub User Gallery</h1>
        </header>
        <h4>Search for an individual user:</h4>
        <div className="usersDisplay container">
          <div className="row">
            <form>
              <Input
                type="text"
                name="login"
                value={name}
                onInputChange={this.onInputChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <h4>Gallery of All Users:</h4>
        <Gallery users={users} />
      </div>
    );
  }
}

export default App;
