import { Routes, Route } from "react-router-dom";

import Auth from "./components/Auth";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Register from "./components/Register";
import componentDidMount from "./dispatchStuff/index";

componentDidMount.componentDidMount();

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="auth" element={<Auth />}></Route>

        <Route path="profile/*/*" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
