import React from "react";
import './TodoItem.css'

const TodoItem = ({todo}) => {

    return <div>{todo.text}</div>
}

export default TodoItem