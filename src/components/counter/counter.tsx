import useContextState from "@/hooks/useContextState";
import useReducedState from "@/hooks/useReducedState";
import dynamic from "next/dynamic";
import React, { lazy, memo, useRef } from "react";
//const AppButton = lazy(() => import("../appButton/AppButton"));
const AppButton = dynamic(() => import("../appButton/AppButton"));

const Counter = ({ text }: any) => {
  const { state, dispatch } = useReducedState();
  const { state: couonterState, dispatch: counterDispatch } = useContextState();
  const appButtonRef: any = useRef(null);
  console.log("rerender");

  const onTitleChanged = (event: any) => {
    dispatch({ type: "title", payload: event?.target?.value });
    counterDispatch({ type: "title", payload: event?.target?.value });
  };

  const onCountChanged = (event: any) => {
    dispatch({ type: "count", payload: event?.target?.value });
    counterDispatch({ type: "count", payload: event?.target?.value });

    console.log("forward reference: ", appButtonRef?.current?.value);
  };

  return (
    <>
      <h1>
        {`${state.count} - ${state.value} (${couonterState.count} / ${couonterState.title})`}
      </h1>
      <input type="text" onChange={onTitleChanged} />{" "}
      <input type="number" onChange={onCountChanged} />
      {couonterState?.count > 0 && <AppButton ref={appButtonRef} />}
    </>
  );
};

export default Counter;
