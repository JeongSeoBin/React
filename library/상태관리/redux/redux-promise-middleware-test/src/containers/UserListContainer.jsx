import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import UserList from "../components/UserList"
import { getUsersPromise, getUsersThunk } from "../redux/actions";

export default function UserListContainer() {
    const users = useSelector(state => state.users.data);
    const dispatch = useDispatch();

    const getUsers = useCallback(() => {
        dispatch(getUsersPromise())
    }, [dispatch]) 

    return <UserList users={users} getUsers={getUsers} />
}