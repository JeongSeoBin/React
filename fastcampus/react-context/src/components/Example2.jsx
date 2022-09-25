import React from 'react';
import PersonContext from '../contexts/PersonContext';

export default class Example2 extends React.Component{
    // contextType 지정 1
    static contextType = PersonContext;

    render() {
        const persons = this.context;

        return (
            <ul>
                {persons.map(person => (
                    <li>{person.name}</li>
                ))}
            </ul>
        )
    }
}

 // contextType 지정 2
Example2.contextType = PersonContext;