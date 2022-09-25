import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "green",
};

export default function Links() {
  return (
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={activeStyle}>
          home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" exact activeStyle={activeStyle}>
          profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile/1" activeStyle={activeStyle}>
          profile/1
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          exact
          activeStyle={activeStyle}
          isActive={(match, location) => {
            console.log("location", location);
            console.log("match", match);
            return match && location.search === "";
          }}
        >
          about
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=mark"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            return match && location.search === "?name=mark";
          }}
        >
          about?name=mark
        </NavLink>
      </li>
    </ul>
  );
}
