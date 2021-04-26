

const Todo = ({todos, doneTodo, removeTodo, updateTodo}) => {

    return todos.map((todo, index) => (

        <div className={ todo.done ? "todo-row complete" : "todo-row"} key={index}>
            <div onClick={() => doneTodo(todo.id)}>{todo.text}</div>
            <div>
                <i className="fa fa-trash" onClick={() => removeTodo(todo.id)}/>
                <i className="fas fa-edit" onClick={() => updateTodo(todo)}/>
            </div>
        </div>
    ));
}

export default Todo;


