import { inject, observer } from "mobx-react";
import { useCallback } from "react";
import UserList from "../components/UserList";
import axios from "axios";

const UserListContainer = ({ userStore }) => {
  /* container에서 비동기 처리하는 법 */
  //   const getUsers = useCallback(async () => {
  //     try {
  //       userStore.pending();
  //       const response = await axios.get("https://api.github.com/users");
  //       console.log(response);
  //       userStore.success(response.data);
  //     } catch (error) {
  //       userStore.fail(error);
  //     }
  //   }, [userStore]);

  const getUsers = useCallback(() => {
    /* store에서 비동기 처리 함수 만들기 */
    // userStore.getUsers();

    /* flow를 이용하여 비동기 처리 함수 만들기 */
    userStore.getUsersFlow();
  }, [userStore]);

  const users = userStore.state.users;

  return <UserList getUsers={getUsers} users={users} />;
};

export default inject("userStore")(observer(UserListContainer));
