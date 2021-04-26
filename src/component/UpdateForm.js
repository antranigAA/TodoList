
import {useState} from "react";

const UpdateForm = ({saveEdit, update}) => {

    const [input, setInput] = useState(update.text);

    const handleSubmit = (e) => {
        e.preventDefault();
        saveEdit({
            id: update.id,
            text:input,
            done:false
        });
    }

    return(

        <form onSubmit={handleSubmit} className="todo-form">
            <h1>UpdateForm</h1>
            <input type="text"
                   value={input}
                   className="todo-input"
                   onChange={(e)=> setInput(e.target.value)} />
            <button className="todo-button" type="submit">Save!</button>
        </form>

    );
}

export default UpdateForm;


