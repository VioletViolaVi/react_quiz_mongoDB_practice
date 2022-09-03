import axios from "axios";

import store from "../store";

const componentDidMount = () => {
  if (localStorage.getItem("_ID")) {
    axios
      .get(`/api/users/${localStorage.getItem("_ID")}`)
      .then((res) => {
        store.dispatch({
          user: res.data.user,
          type: "set_user"
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default { componentDidMount };
