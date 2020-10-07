import React, { Component } from "react";
import "./TodoList.css";

class TodoList extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <>
        <div className="ToDoItem">
          <div className="ToDoItem-title">{title}</div>
          <div className="ToDoItem-description">{description}</div>
        </div>
      </>
    );
  }
}

export default TodoList;
