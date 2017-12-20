import React, { Component } from "react";
import octocat from "./Octocat.png";
import "./App.css";
import usersList from "./users";
import Gallery from "./Gallery";
import InputFilter from "./InputFilter";
import ButtonAsc from "./ButtonAsc";
import ButtonDesc from "./ButtonDesc";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: usersList,
      userNumber: usersList.length
      //order: "asc"
    };
  }

  //text based search
  onFilter = e => {
    const value = e.target.value;
    let filteredUsers = value
      ? usersList.filter(u => u.login.match(new RegExp(value)))
      : usersList;
    this.setState({ users: filteredUsers, userNumber: filteredUsers.length });
  };

  onClickAsc = e => {
    //sort users alphabetically
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      users: this.state.users.sort(function(a, b) {
        return a.login > b.login ? 1 : -1;
      })
    });
  };

  onClickDesc = e => {
    e.preventDefault();
    this.setState({
      users: this.state.users.sort(function(a, b) {
        return b.login > a.login ? 1 : -1;
      })
    });
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
              <ButtonAsc onClickAsc={this.onClickAsc} />
              <ButtonDesc onClickDesc={this.onClickDesc} />
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
