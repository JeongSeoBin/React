import { useRef } from "react";

export default function TodoForm({ add }) {
  const inputRef = useRef();

  const click = () => {
    add(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>add</button>
    </div>
  );
}
