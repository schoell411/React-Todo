import React from "react";
import { format } from "url";

class TodoForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form>
                <label htmlFor="todo">New Task:</label>
                <input type="text" name="todo"/>
                <button>Submit</button>
            </form>
        );
    }
}

export default TodoForm;