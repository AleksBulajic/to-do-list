import React from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo'; 
import List from './components/List';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo/>
      <List />
    </div>
  );
}

export default App;
