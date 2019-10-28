import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";

const data = [
  {
    task: "Clean Room",
    id: Date.now(),
    completed: false
  },
  {
    task: "Rearrange Furniture",
    id: Date.now(),
    completed: false
  },
  {
    task: "Do Laundry",
    id: Date.now(),
    completed: false
  }
];
console.log(data);

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm />
      </div>
    );
  }
}

export default App;
