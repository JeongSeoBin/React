import { createRef, useRef, useState } from "react";

export default function Exmaple8() {
  const [value, setValue] = useState("");

  const input1Ref = createRef();
  const input2Ref = useRef();

  // 1. null, undefined : 최초 랜더링할때는 저장한 래퍼런스가 없다
  // 2. null, input : createRef로 생성한 래퍼런스 재랜더링시 다시 만들어져 저장한게 없음
  //                  useRef로 생성한 래퍼런스는 기존 래퍼런스를 유지
  console.log(input1Ref.current, input2Ref.current);

  const change = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input value={value} onChange={change} />
      <input ref={input1Ref} />
      <input ref={input2Ref} />
    </div>
  );
}
