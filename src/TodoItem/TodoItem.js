import React, {Component} from "react";
import './TodoItem.css'

class TodoItem extends Component {

    render() {

        return (
          <div>
              <div className={this.props.todo.important ? 'important' : 'not-important'}>{this.props.todo.title}</div>
              <button onClick={() => {
                  this.props.handleDeleteTodo(this.props.todo.id)
              }}>Delete</button>
              <button onClick={() => this.props.handleImportantToggle(this.props.todo.id)}>Important</button>
          </div>
        )
    }
}

export default TodoItem