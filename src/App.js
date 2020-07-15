import React from 'react';
import ToDoList from './ToDo/ToDoList'

function App() {
  let todos = [
    {
      id: 1,
      completed: false,
      title: 'Погулять с собакой'
    },
    {
      id: 2,
      completed: false,
      title: 'Сходить в магазин'
    },
    {
      id: 3,
      completed: false,
      title: 'Сделать тренировку'
    }
  ]

  function toggleTodo(id) {
    todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  })
  }

  return (
    <div className='wrapper'>
      <h1>React JS Project</h1>
      <ToDoList todos={todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
