import {useState} from "react";
import Todo from "./Todo";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";


const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [updateFormFlag, setUpdateFormFlag] = useState(false);
    const [update, setUpdate] = useState(null);

    const addTodo = todo => {
        if (!todo.text.trim()) return
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const updateTodo = (todo) => {
        setUpdate(todo);
        setUpdateFormFlag(true);
    }

    const saveEdit = (todo) => {
        setUpdateFormFlag(false);
        setTodos(prev => prev.map(el => (el.id === todo.id ? todo : el)));
    }

    const removeTodo = (todoId) => {
        const filteredArr = todos.filter(el => el.id !== todoId);
        setTodos(filteredArr);
    }

    const doneTodo = (todoId) => {
        let updatedTodos = todos.map(el => {
            if (el.id === todoId) el.done = !el.done;
            return el;
        });
        setTodos(updatedTodos);
    }

    return (
        <>
        {
            updateFormFlag ? <UpdateForm update={update} saveEdit={saveEdit}/> :
                <>
                <h1>Todo List App</h1>
                <AddForm onSubmit={addTodo}/>
                <Todo
                    todos={todos}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                    doneTodo={doneTodo}
                />
            </>
        }
        </>
    );
}

export default TodoList;