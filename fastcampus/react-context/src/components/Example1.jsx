import PersonContext from "../contexts/PersonContext";

export default function Example1() {
    return (
        <PersonContext.Consumer>
            {(perosns) => {
                return (
                    <ul>
                        {perosns.map(person => (
                            <li>{person.name}</li>
                        ))}
                    </ul>
                )
            }}
        </PersonContext.Consumer>
    )
}