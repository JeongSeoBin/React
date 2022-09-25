import { useState } from "react"

// 하위 컴포넌트 변경하기
// export default function A() {
//     const [value, setValue] = useState('없음');

//     const click = () => {
//         setValue('값')
//     }

//     return (
//         <div>
//             <B value={value}/>
//             <button onClick={click}>E값 바꾸기</button>
//         </div>
//     )
// }

// function B({value}) {
//     return (
//         <C value={value}/>
//     )
// }

// function C({value}) {
//     return (
//         <D value={value}/>
//     )

// }

// function D({value}) {
//     return (
//         <E value={value}/>
//     )

// }

// function E({value}) {
//     return (
//         <h3>{value}</h3>
//     )
// }


// 상위 컴포넌트 변경하기
export default function A() {
    const [value, setValue] = useState('없음');

    return (
        <div>
            <p>{value}</p>
            <B setValue={setValue}/>
        </div>
    )
}

function B({setValue}) {
    return (
        <C setValue={setValue}/>
    )
}

function C({setValue}) {
    return (
        <D setValue={setValue}/>
    )
}

function D({setValue}) {
    return (
        <E setValue={setValue}/>
    )
}

function E({setValue}) {
    const click = () => {
        setValue('값 변경')
    }
    return (
        <button onClick={click}>click</button>
    )
}