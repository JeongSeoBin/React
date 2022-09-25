import { useEffect } from "react";
import axios from "axios";

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
