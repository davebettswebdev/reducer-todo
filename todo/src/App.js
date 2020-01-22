import React, { useReducer } from "react";
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { initialState, todoReducer } from "./reducers";
import './App.css';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addNewItem = (item) => {
    dispatch ({ type: 'ADD_ITEM', payload: item})
  }

  const toggleCompleted = itemId =>{
    dispatch ({ type: 'TOGGLE_COMPLETED', payload: itemId})
  }

  const clearCompleted = () =>{
    dispatch ({ type: 'CLEAR_COMPLETED'})
  }

  return (
    <div className="App">
      <header className="App-header">
        <ToDoForm addNewItem={addNewItem} clearCompleted={clearCompleted} />
      </header>
        <ToDoList state={state} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;