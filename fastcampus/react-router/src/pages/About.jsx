import queryString from "query-string";

export default function About(props) {
  const searchParams = props.location.search;

  // URLSearchParams
  //   const obj = new URLSearchParams(searchParams);
  //   const name = obj.get('name');

  // query-string (npm i query-string -S)
  const query = queryString.parse(searchParams);
  const name = query.name;

  return (
    <div>
      <h2>about</h2>
      <div>{name && <p>name은 {name}</p>}</div>
    </div>
  );
}
