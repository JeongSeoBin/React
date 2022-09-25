import { useContext, useEffect, useState } from "react";
import ReduxContext from "../contexts/ReduxContext";

export default function useReduxContext() {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });

    return () => {
      unsubscribe();
    };
  }, [store]);

  return state;
}
