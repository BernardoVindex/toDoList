import React from 'react';
import { useTodos } from '../App/useTodos';

function TodoForm({addTodo, setOpenModal}) {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    
    const onCancel = () => {
        setOpenModal(false)
    }   
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    
    return(
        <form
            onSubmit={onSubmit}
        >
            <label></label>
            <textarea
                placeholder="Cortar cebolla para botones"
                value={newTodoValue}
                onChange={onChange}
            ></textarea>
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                > 
                Cancealr
                </button>
                <button
                    type="submit"       
                >
                Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };