import React from 'react';
import ReactDOM from "react-dom";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from './components/TodoComponents/TodoList';

const data = [];
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

  toggleCompleted = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task, completed: !task.completed
          };
        } else {
          return task;
        }
      })
    })
  };

  deleteCompleted = e => {
    console.log("button works!")
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.completed
      })
    })
  }

  render() {
    return (
      <div className="todo_list">
        <h1 className="heading">Todo List</h1>
        <div className="form">
        <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList
        deleteCompleted= {this.deleteCompleted} 
        toggleCompleted= {this.toggleCompleted}
        tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
