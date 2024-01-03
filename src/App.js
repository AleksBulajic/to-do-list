import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import List from './components/List';

function TodoApp() {
  // State to manage todo items
  const [todoItems, setTodoItems] = useState([]);

  // Function to add a new item to the todo list
  function addTodoItem(newItem) {
    setTodoItems([...todoItems, newItem]);
  }

  return (
    <div>
      {/* Pass state and function as props to AddTodo */}
      <AddTodo onAddTodo={addTodoItem} />

      {/* Pass todoItems as a prop to List */}
      <List todoItems={todoItems} />
    </div>
  );
}

export default TodoApp;
