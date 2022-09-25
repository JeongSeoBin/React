import { useRef } from "react";
import MyInput from "./components/MyInput";

function App4() {
    const myInputRef = useRef();

    const click = () => {
        console.log(myInputRef.current.value)
    }

  return (
    <div>
        <MyInput ref={myInputRef}/>
        <button onClick={click}>send</button>
    </div>
  )
}

export default App4;