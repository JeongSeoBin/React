export default function Person({age10_computed, plus}) {
    return (
        <div>
            <h1>{age10_computed}</h1>
            <p><button onClick={click}>click</button></p>
        </div>
    )

    function click() {
        plus()
    }
}