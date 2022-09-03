import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  // state variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // sending form content to backend
  const handleRegister = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password
      })
    };

    const response = await fetch("http://localhost:3000/register", options);
    const data = await response.json();
    console.log("data ===> ", data);
  };

  // functions for setter functions
  const handleFirstName = (e) => {
    setFirstName((prevFirstName) => {
      prevFirstName = e.target.value;
      return prevFirstName;
    });
  };

  const handleLastName = (e) => {
    setLastName((prevLastName) => {
      prevLastName = e.target.value;
      return prevLastName;
    });
  };

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
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          required
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstName}
        />
        <input
          required
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastName}
        />
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
        <button>Register</button>
      </form>
      <p>
        Have an account? <Link to={"/login"}>Login</Link>
      </p>
    </>
  );
}

export default Register;
