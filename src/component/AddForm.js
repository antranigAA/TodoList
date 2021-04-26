
import {useState, useRef, useEffect} from "react";


const AddForm = ({onSubmit}) => {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            id: Date.now(),
            text: input,
            done: false
        });
        setInput("");
    }

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text"
                   className="todo-input"
                   placeholder="Add Todo"
                   value={input}
                   ref={inputRef}
                   onChange={(e)=>setInput(e.target.value)}
            />
            <button className="todo-button" onClick={handleSubmit}>Add Todo</button>
        </form>
    );
}

export default AddForm;

