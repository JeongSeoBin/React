import { useRef } from "react";

export default function TodoForm({add}) {
    const ref = useRef();

    function click() {
        add(ref.current.value);
    }

    return (
        <div>
            <p>
                <input ref={ref}/>
                <button onClick={click}>add</button>
            </p>
        </div>
    )
}