import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({todos}) => {

    return (
        <div>
            {todos.map((item) => {
                return <TodoItem key={item.id} todo={item} />
            })}
        </div>
    );
};

export default TodoList;