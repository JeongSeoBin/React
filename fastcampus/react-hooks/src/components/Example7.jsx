import { useState, useMemo, useCallback } from "react";

function sum(persons) {
  console.log("sum 실행");
  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}

export default function Exmaple7() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "mark", age: 10 },
    { name: "hana", age: 38 },
  ]);

  // persons에 의존적인 함수
  // persons가 변경될때만 해당 함수를 실행
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  // dependency를 빈 배열로 두면 최초 랜더할때만 해당 함수를 정의
  const click = useCallback(() => {
    // 최초 랜더링되었을때만 함수를 정의하고 그 이후에는 정의해둔 함수를 사용하기 때문에
    // 최초 정의 값인 ''만 계속 찍힌다
    console.log("value", value);
  }, []);

  const change = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>click</button>
    </div>
  );
}
