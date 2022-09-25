export default function Profile(props) {
  const id = props.match.params.id; // url에 담긴 동적 데이터
  console.log(id, typeof id); // string

  return (
    <div>
      <h2>Profile</h2>
      {id && <p>id는 {id}</p>}
    </div>
  );
}
