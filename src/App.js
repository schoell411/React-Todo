import React from 'react';
import ReactDOM from "react-dom";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from './components/TodoComponents/TodoList';

const data = [
  {
    task: "Clean Room",
    id: 1,
    completed: false
  },
  {
    task: "Rearrange Furniture",
    id: 2,
    completed: false
  },
  {
    task: "Do Laundry",
    id: 3,
    completed: false
  }
];
console.log(data);

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: data
    }
  }

  addTask = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks:[
        ...this.state.tasks, newTask
      ]
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addTask={this.addTask} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
