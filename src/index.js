import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoList from "./TodoList.js";

class App extends Component {
  state = {
    todoList: JSON.parse(localStorage.getItem("todoList")) || [],
  };

  addTodo = (item, callBack) => {
    this.setState(
      {
        todoList: this.state.todoList.concat(item),
      },
      () => {
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
        callBack && callBack();
      }
    );
  };

  removeTodo = (item, callBack) => {
    this.setState(
      {
        todoList: this.state.todoList.filter((x) => x !== item),
      },
      () => {
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
        callBack && callBack();
      }
    );
  };

  deleteTodo(i) {
    this.state.todo.splice(i, 1);
    this.setState({
      todo: this.state.todo,
    });
  }

  render() {
    return (
      <div className="App">
        <form
          className="App-form"
          onSubmit={(e) => {
            e.preventDefault();
            const titleElement = e.target.elements["title"];
            const descriptionElement = e.target.elements["description"];
            this.addTodo(
              {
                title: titleElement.value,
                description: descriptionElement.value,
              },
              () => {
                titleElement.value = "";
                descriptionElement.value = "";
              }
            );
          }}
        >
          <div>
            <input
              id="title"
              className="form-title"
              placeholder="ex) スーパーに買い物に行く"
            />
            <textarea
              id="description"
              className="form-description"
              placeholder="ex) 卵、きのこ、玉ねぎ、パスタ"
            />
          </div>
          <div>
            <button type="submit"> 追加 </button>
          </div>
        </form>

        <div>
          {this.state.todoList.map((todo) => (
            <ToDoList
              key={todo.title}
              title={todo.title}
              description={todo.description}
              onClick={() => this.removeTodo(todo)}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
