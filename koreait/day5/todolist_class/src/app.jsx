import React, {Component} from 'react';
import './app.css';
import Todos from './components/todos';
import NavBar from './components/navbar';

class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Study', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0},
    ]
  }

  handleIncrement = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index].count++;
    this.setState({todos});
  }

  handleDecrement = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    const count = todos[index].count - 1;
    todos[index].count = count < 0? 0 : count;
    this.setState({todos});
  }

  handleDelete = todo => {
    const todos = this.state.todos.filter(item => item.id !== todo.id);
    this.setState({todos});
  }

  handleAdd = name => {
    const todos = [...this.state.todos, {id: Date.now(), name: name, count: 0}];
    this.setState({todos});
  }

  handleReset = () => {
    const todos = this.state.todos.map(todo => {
      todo.count = 0;
      return todo;
    });
    this.setState({todos});
  }

  render(){
    return(
      <>
        <NavBar totalCount={this.state.todos.filter(item => item.count > 0).length}/>
        <Todos
          todos={this.state.todos}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    )
  }
}

export default App;