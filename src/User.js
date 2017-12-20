import React, { Component } from "react";

class User extends Component {
  constructor() {
    //to be able to use this
    super();

    this.state = {
      login: "",
      avatar_url: ""
    };
  }

  onChangeUser = e => {
    this.setState({
      login: "",
      avatar_url: ""
    });
  };

  render() {
    return (
      <div className="usersDisplay container">
        <div className="row">
          <form>
            <input type="text" name="login" />
            <iframe src="" />
          </form>
        </div>
      </div>
    );
  }
}

export default User;
