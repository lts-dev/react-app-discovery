import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

interface ICountContextProvider {
  children: React.ReactNode;
}

const CountContext = createContext<any>(undefined);
CountContext.displayName = "count-context";

const intialState = {
  count: 0,
  title: "",
};

const reducer = (state: any, action: any) => {
  console.log(state, action);

  if (action?.type === "count") {
    state = { ...state, count: action.payload };
  } else {
    state = { ...state, title: action.payload };
  }

  return state;
};

const CountContextProvider = (props: ICountContextProvider) => {
  const [state, dispatch] = useReducer(useCallback(reducer, []), intialState);
  const val = { state, dispatch };

  return (
    <CountContext.Provider value={val}>{props.children}</CountContext.Provider>
  );
};

const useContextState = () => {
  const context = useContext(CountContext);
  return context;
};

export { CountContextProvider };

export default useContextState;
