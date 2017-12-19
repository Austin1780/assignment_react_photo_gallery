import React, { Component } from "react";
import octocat from "./Octocat.png";
import "./App.css";
import usersList from "./users";
import Gallery from "./Gallery";
import InputFilter from "./InputFilter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: usersList,
      userNumber: usersList.length
    };
  }

  onFilter = e => {
    const value = e.target.value;
    let filteredUsers = value
      ? usersList.filter(u => u.login.match(new RegExp(value)))
      : usersList;
    this.setState({ users: filteredUsers, userNumber: filteredUsers.length });
  };

  render() {
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
              <InputFilter
                onFilter={this.onFilter}
                userNumber={this.state.userNumber}
              />
            </form>
          </div>
        </div>
        <h4>Gallery of All Users:</h4>
        <Gallery users={this.state.users} />
      </div>
    );
  }
}

export default App;
