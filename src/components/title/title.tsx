import useContextState from "@/hooks/useContextState";
import useReducedState from "@/hooks/useReducedState";

const Title = ({ text }: any) => {
  const { state, dispatch } = useReducedState();
  const { state: couonterState } = useContextState();

  return (
    <>
      <h2 data-testid="heading">{`${text} - (${state.count} / ${state.title}) (${couonterState.count} / ${couonterState.title})`}</h2>
      <img src="/vercel.svg" />
    </>
  );
};

export default Title;
