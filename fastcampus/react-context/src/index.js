import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PersonContext from './contexts/PersonContext';

const persons = [
  {id:0, name:'Mark', age:19},
  {id:1, name:'Anana', age:20}
]
ReactDOM.render(
  <React.StrictMode>
    <PersonContext.Provider value={persons}>
      <App />
    </PersonContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);