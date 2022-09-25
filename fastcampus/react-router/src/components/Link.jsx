import { Link } from "react-router-dom";

export default function Links() {
  return (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/profile">profile</Link>
      </li>
      <li>
        <Link to="/profile/1">profile/1</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/about?name=mark">about?name=mark</Link>
      </li>
    </ul>
  );
}
