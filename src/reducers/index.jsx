const initState = {
  user: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "login":
      localStorage.setItem("JWT_PAYLOAD", action.token);
      localStorage.setItem("_ID", action._id);
      return {
        ...state,
        user: action.user
      };

    // EVERY REDUCER NEEDS A DEFAULT!!!
    default:
      return state;
  }
};

export default reducer;
