import { useState } from "react";
import { Link } from "react-router-dom";
import Register from "../Register";

function Login() {
  // state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    };

    const response = await fetch("http://localhost:3000/login", options);
    const data = await response.json();

    // based on if you can get the jwt value for user in obj
    if (data.user) {
      alert("Login successful");
      window.location.href = "/";
    } else {
      alert("Login failed");
    }
  };

  // functions for setter functions
  const handleEmail = (e) => {
    setEmail((prevEmail) => {
      prevEmail = e.target.value;
      return prevEmail;
    });
  };

  const handlePassword = (e) => {
    setPassword((prevPassword) => {
      prevPassword = e.target.value;
      return prevPassword;
    });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <button>Login</button>
      </form>
      <p>
        Don't have an account? <Link to={"/register"}>Register</Link>
      </p>
    </>
  );
}

export default Login;

/*
{
    "email":"test@test.com",
    "password":"test"
}
*/
