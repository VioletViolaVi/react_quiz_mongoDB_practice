import { useState, useEffect } from "react";
// import axios from "axios";

import Register from "../Register/index";
import Login from "../Login/index";

function Auth() {
  const [tab, setTab] = useState("login");

  useEffect(() => {
    setTab(() => {});
  }, []);

  const page = tab === "login" ? <Login /> : <Register />;
  // console.log("tab ===> ", tab);

  return (
    <>
      <h1>Toggles between Register and Login</h1>
      {page}
    </>
  );
}

export default Auth;
