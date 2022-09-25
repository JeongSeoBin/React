import useReduxContext from "../hooks/useReduxContext";
import {connect} from "react-redux";

/* react-redux를 사용하지 않은 경우 */
// export default function TodoList() {
//     const state = useReduxContext();

//     return (
//         <ul>
//             {state.todos.map(todo => {
//                 return <li>{todo.text}</li>
//             })}
//         </ul>
//     )
// }


/* react-redux를 사용하는 경우 */
export default function TodoList({todos}) {
    return (
        <ul>
            {todos.map(todo => {
                return <li>{todo.text}</li>
            })}
        </ul>
    )
}
