import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }

  render() {
    // what user puts in first name input
    const handleFirstName = (e) => {
      return this.setState({ firstName: e.target.value });
    };

    // what user puts in last name input
    const handleLastName = (e) => {
      return this.setState({ lastName: e.target.value });
    };

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
      return this.props.register({ ...this.state });
    };

    // stops page refreshing
    const handleSubmitForm = (e) => {
      e.preventDefault();
    };

    // // changes condition to 'true' in Auth class
    // const handleLinkSwap = () => {
    //   return this.setState({ tab: "login" });
    // };

    return (
      <>
        <h1>Register</h1>
        <form onSubmit={handleSubmitForm}>
          <input
            required
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={handleFirstName}
          />

          <input
            required
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={handleLastName}
          />

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
          <button onClick={handleBtnSend}>Register</button>
        </form>
        {/* <p onClick={handleLinkSwap}>
          Have an account? <Link to={"/login"}>Login</Link>
        </p> */}
      </>
    );
  }
}

export default Register;
