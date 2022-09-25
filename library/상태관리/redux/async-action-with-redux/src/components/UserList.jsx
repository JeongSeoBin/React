import { useEffect } from "react";
import axios from "axios";

/* 컴포넌트에서 비동기 처리할때 */
// export default function UserList({users, start, success, fail}) {

//     useEffect(() => {
//         async function getUsers() {
//             try {
//                 start();
//                 const response = await axios.get("https://api.github.com/users")
//                 success(response.data)
//             } catch (error) {
//                 fail(error)
//             }
//         }

//         getUsers();
//     }, [users, start, success, fail])

//     if(users.length === 0) {
//         return <p>user x</p>
//     }

//     return (
//         <ul>
//             {users.map(user => (<li key={user.id}>{user.login}</li>))}
//         </ul>
//     )
// }

/* 컨테이너에서 비동기 처리할때 */
export default function UserList({ users, getUsers }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (users.length === 0) {
    return <p>user x</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
}
