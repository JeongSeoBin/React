import { useRef } from "react";
import { connect } from "react-redux";
import useReduxDispatch from "../hooks/useReduxDispatch";
import { addTodo } from "../redux/actions";

/* react-redux 를 사용하지 않는 경우 */
// export default function TodoForm() {
//     const inputRef = useRef();
//     const dispatch = useReduxDispatch();

//     const click = () => {
//         dispatch(addTodo(inputRef.current.value))
//     }

//     return (
//         <div>
//             <input ref={inputRef}/>
//             <button onClick={click}>add</button>
//         </div>
//     )
// }

/* react-redux를 사용하는 경우 */
export default function TodoForm({ add }) {
  const inputRef = useRef();

  const click = () => {
    add(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>add</button>
    </div>
  );
}
