import React, { Component } from "react";

const Login = (props) => <p>Login</p>;
const Unlogin = (props) => <p>Unlogin</p>;

export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: true,
    };
  }

  render() {
    return <div>{this.state.session ? <Login /> : <Unlogin />}</div>;
  }
}
