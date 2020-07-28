const userReducer = (
  state = {
    name: "",
    age: 0,
  },
  action
) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload,
      };
      break;
  }

  return state;
};

export default userReducer;
