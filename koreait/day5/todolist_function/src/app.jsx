import React, {useState} from 'react';
import './app.css';
import Todos from './components/todos';
import NavBar from './components/navbar';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, name: 'Study', count: 0},
    {id: 2, name: 'Running', count: 0},
    {id: 3, name: 'Coding', count: 0},
  ]);

  const handleIncrement = todo => {
    const items = todos.map(item => {
      if(item.id === todo.id){
        return {...todo, count: todo.count + 1}
      }
      return item
    })
    setTodos(items);
  }

  const handleDecrement = todo => {
    const items = todos.map(item => {
      if(item.id === todo.id){
        const count = todo.count - 1;
        return {...todo, count: count < 0 ? 0 : count}
      }
      return item
    })
    setTodos(items);
  }

  const handleDelete = todo => {
    const items = todos.filter(item => todo.id !== item.id);
    setTodos(items);
  }

  const handleAdd = name => {
    const items = [...todos, {id: Date.now(), name: name, count: 0}];
    setTodos(items);
  }

  const handleReset = () => {
    const items = todos.filter(item => {
      item.count = 0;
      return item
      ;
    });
    setTodos(items);
  }


  return (
    <>
      <NavBar totalCount={todos.filter(item => item.count > 0).length}/>
      <Todos
        todos={todos}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}/>
    </>
  );
}

export default App;
