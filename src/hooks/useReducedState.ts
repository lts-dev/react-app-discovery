import { useReducer } from "react";

const intialState = {
  count: 0,
  value: "",
};

const reducer = (state: any, action: any) => {
  console.log(state, action);

  if (action?.type === "count") {
    state = { ...state, count: action.payload };
  } else {
    state = { ...state, value: action.payload };
  }

  return state;
};

const useReducedState = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return { state, dispatch };
};

export default useReducedState;
