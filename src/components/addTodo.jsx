import React, { useState } from 'react';

function AddTodo({ onAddTodo }) {
  const [inputText, setInputText] = useState('');

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function addToList() {
    if (inputText.trim() !== '') {
      // Call the onAddTodo function to update the parent component state
      onAddTodo(inputText);
      setInputText('');
    }
  }

  return (
    <div>
      <input
        className="input"
        value={inputText}
        onChange={handleInputChange}
      ></input>
      <button className="addButton" onClick={addToList}>
        Add To List
      </button>
    </div>
  );
}

export default AddTodo;
