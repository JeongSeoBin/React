import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/todoTemplate';
import TodoHead from './components/todoHead';
import TodoList from './components/todoList';
import TodoCreate from './components/todoCreate';
import {TodoProvider} from './todoContext';

//createGlobalStyle: 앱 전체에 스타일을 주고 싶을때
const GlobalStyle = createGlobalStyle`
  body{
    background-color: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle/>
        <TodoTemplate>
          <TodoHead/>
          <TodoList/>
          <TodoCreate/>
        </TodoTemplate>
      </TodoProvider>
    </>
  );
}

export default App;
