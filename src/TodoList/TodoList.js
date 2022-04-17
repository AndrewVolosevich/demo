import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({todos, handleDeleteTodo, handleImportantToggle}) => {

    return (
        <div>
            {todos.map((item) => {
                return <TodoItem key={item.id} todo={item} handleDeleteTodo={handleDeleteTodo} handleImportantToggle={handleImportantToggle} />
            })}
        </div>
    );
};

export default TodoList;