import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    // what user puts in email input
    const handleEmail = (e) => {
      return this.setState({ email: e.target.value });
    };

    // what user puts in password input
    const handlePassword = (e) => {
      return this.setState({ password: e.target.value });
    };

    // sends input info to backend
    const handleBtnSend = () => {
      return this.props.logIn(this.state.email, this.state.password);
    };

    // stops page refreshing
    const handleSubmitForm = (e) => {
      e.preventDefault();
    };

    // // changes condition to 'false' in Auth class
    // const handleLinkSwap = () => {
    //   return this.setState({ tab: "register" });
    // };

    return (
      <>
        <h1>Login</h1>
        <form onSubmit={handleSubmitForm}>
          <input
            required
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={handleEmail}
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={handlePassword}
          />
          <br />
          <button onClick={handleBtnSend}>Login</button>
        </form>
        {/* <p onClick={handleLinkSwap}>
          Don't have an account? <Link to={"/register"}>Register</Link>
        </p> */}
      </>
    );
  }
}
export default Login;
