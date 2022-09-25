import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {connect} from "react-redux";
import TodoForm from "../components/TodoForm";
import {addTodo} from "../redux/actions";

/* connect 힘수 이용하여 컨테이너 작성 */
// const TodoFormContainer = connect(
//     state => ({}),
//     dispatch => ({
//         add: text => {
//             dispatch(addTodo(text))
//         }
//     })
// )(TodoForm)

// export default TodoFormContainer;

/* useSelector를 이용하여 컨테이너 작성 */
function TodoFormContainer() {
    const dispatch = useDispatch();

    const add = useCallback(text => {
        dispatch(addTodo(text))
    }, [dispatch])

    return <TodoForm add={add}/>
}

export default TodoFormContainer;

