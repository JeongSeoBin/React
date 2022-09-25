import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import UserList from "../components/UserList"
import { getUsersFail, getUsersStart, getUsersSuccess } from "../redux/actions";
import axios from 'axios'

/* 컴포넌트에서 비동기 처리할때 */
// export default function UserListContainer() {
//     const users = useSelector(state => state.users.data);
//     const dispatch = useDispatch();

//     const start = useCallback(() => {
//         dispatch(getUsersStart())
//     }, [dispatch])
//     const success = useCallback((data) => {
//         dispatch(getUsersSuccess(data));
//     }, [dispatch])
//     const fail = useCallback((error) => {
//         dispatch(getUsersFail(error));
//     }, [dispatch])

//     return <UserList users={users} start={start} success={success} fail={fail} />
//}

/* 컨테이너에서 비동기 처리할때 */
export default function UserListContainer() {
    const users = useSelector(state => state.users.data);
    const dispatch = useDispatch();

    const getUsers = useCallback( async () => {
        try {
            dispatch(getUsersStart())

            const response = await axios.get("https://api.github.com/users")
 
            dispatch(getUsersSuccess(response.data))

        } catch (error) {
            dispatch(getUsersFail(error));
        }
    }, [dispatch])

    return <UserList users={users} getUsers={getUsers} />
}