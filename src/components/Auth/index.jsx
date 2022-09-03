import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Register from "../Register/index";
import Login from "../Login/index";
import store from "../../store";
// import Profile from "../Profile";

function forNavigating() {
  const navigate = useNavigate();
  navigate("/profile");
}

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "login"
    };
  }

  logIn = (email, password) => {
    axios
      .post("/api/users/login", { email, password })
      .then((res) => {
        // console.log("res ==> ", res);
        if (res.data.success) {
          store.dispatch({
            type: "login",
            _id: res.data.user._id,
            user: res.data.user,
            token: res.data.token
          });
          console.log("store.getState() ===> ", store.getState());
          // forNavigating();
          // <Route path="profile" element={<Profile />} />;
          this.props.history.push("/profile");
        }
      })
      .catch((error) => {
        console.log("error ==> ", error);
      });
  };

  register = ({ firstName, lastName, email, password }) => {
    axios
      .post("/api/users/register", { firstName, lastName, email, password })
      .then((res) => {
        // console.log("res.data ==> ", res.data);
        if (res.data.success) {
          this.setState({ tab: "login" });
        }
      })
      .catch((error) => {
        // console.log("error ==> ", error);
      });
  };

  changeTab = () => {
    this.setState({
      tab: this.state.tab === "register" ? "login" : "register"
    });
  };

  changeText = () => {
    this.setState({
      tab:
        this.state.tab === "register"
          ? "Click here to register"
          : "Have an account? Login"
    });
  };

  render() {
    const currentPage =
      this.state.tab === "login" ? (
        <Login logIn={this.logIn} />
      ) : (
        <Register register={this.register} />
      );

    return (
      <>
        <h1>Auth Page</h1>
        {currentPage}
        <p onClick={this.changeTab}>
          {this.state.tab === "register"
            ? "Have an account? Click here to login"
            : "New Here? Click here to register"}
        </p>
      </>
    );
  }
}

export default Auth;

/*
{
    "email":"test@test.com" / "test2@test2.com",
    "password":"test" / "test2"
}
*/
