const counterReducer = (
  state = {
    result: 0,
    lastValues: [],
  },
  action
) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, state.result + action.payload],
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, state.result - action.payload],
      };
      break;
  }

  return state;
};

export default counterReducer;
