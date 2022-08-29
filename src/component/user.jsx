import React, { Component } from "react";
import axios from "axios";

class User extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://reqres.in/api/users/${this.props.match.params.id}`
    );
    console.log(this.props.match.params);
    console.log(response);
    //this.setState({ user: response.data.data });
  }

  render() {
    return (
      <>
        <h2>user</h2>
        {/* <div className="col-4 text-center p-5">
          <img
            src={this.state.user.avatar}
            style={{ borderRadius: "50%", width: "100px" }}
            alt=""
          />
          <h4>
            {this.state.user.first_name} {this.state.user.last_name}
          </h4>
          <h5>{this.state.user.email}</h5>
        </div> */}
      </>
    );
  }
}

export default User;
