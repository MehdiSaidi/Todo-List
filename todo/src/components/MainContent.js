import React from "react";
import TodoList from "./TodoList";
import TodoInputBox from "./TodoInputBox";

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      todoArray: [],
      hideCompleted: false,
    };
  }
  test() {
    this.setState({
      hideCompleted: false,
    });
  }

  hideCompletedOnClick() {
    let i;
    let copyArray = [...this.state.todoArray];

    for (i = 0; i < copyArray.length; i++) {
      if (copyArray[i].isCompleted == true) {
        let copyItem = { ...copyArray[i] };
        copyItem.visibility == "visible"
          ? (copyItem.visibility = "hidden")
          : (copyItem.visibility = "visible");
        copyArray[i] = copyItem;
      } else {
        continue;
      }
    }

    this.setState({
      todoArray: copyArray,
      hideCompleted: true,
    });
  }

  addTodo(todo) {
    this.setState({
      todoArray: [todo, ...this.state.todoArray],
    });
  }

  completedTodo(theObject) {
    let i;
    for (i = 0; i < this.state.todoArray.length; i++) {
      if (this.state.todoArray[i].id == theObject.id) {
        let copyArray = [...this.state.todoArray];
        let myItem = { ...copyArray[i] };
        myItem.isCompleted = !myItem.isCompleted;
        copyArray[i] = myItem;

        if (myItem.isCompleted == true) {
          if (this.state.hideCompleted == true) {
            myItem.visibility = "hidden";
          }

          copyArray.splice(i, 1);
          copyArray.push(myItem);
        }

        this.setState({
          todoArray: copyArray,
        });
      } else {
        continue;
      }
    }

    // console.log(todo.isCompleted)
    // todo.isCompleted = !todo.isCompleted
  }

  render() {
    return (
      <div className="MainContent">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i
              className="fa fa-ellipsis-h"
              aria-hidden="true"
              id="dotsIcon"
            ></i>
          </button>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={this.hideCompletedOnClick.bind(this)}
            >
              Hide completed items
            </a>
          </div>
        </div>
        <br></br>

        <TodoInputBox onSubmit={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.todoArray}
          isCompleteMethod={this.completedTodo.bind(this)}
        />
      </div>
    );
  }
}

export default MainContent;
