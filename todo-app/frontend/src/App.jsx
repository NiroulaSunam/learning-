import { useState, useEffect } from 'react'

function App() {

    const [newText, setNewText] = useState('')

    const [todos, setTodos] = useState([])
    // todos -> current value in the box. currently its []
    // setTodos -> function to update value in the box. when you call

    // this is for "get" for the frontend to talk to the backend 
    useEffect(() => { // {... }, [] -> function to run and dependency array
        fetch('http://localhost:8000/todos') 
        .then(res => res.json()) // res is the raw HTTP response - status code, headers and body. || res.json() readds that stream and parses it into a JavaScript object
        .then(data => setTodos(data)) 
    }, []) // [] means "run this function once, when the component first loads, and never again. Thats exactly what we want for fetching initial data." If there is todo inside, it will run whenever todo changes.

    // this is for "post" for the frontend to talk to the backend
    function handleAdd() {
        fetch('http://localhost:8000/todos', {
            method: 'POST', // what kind of request
            headers: { 'Content-Type': 'application/json' }, // telling the backend we are sending JSON
            body: JSON.stringify({ text: newText }) // actual data we're sending, converted to a JSON string
            })
            .then(res => res.json())
            .then(data => {
                setTodos([...todos, data]) // instead of adding onto the todo which react won't know, we are copy pasting the todo into the new list and the new item added
                setNewText('') // after successfully adding the text, it sets the input box back to empty
        })
    }

    // this is for "delete" for the frontend to talk to the backend
    function handleDelete(id) {
        fetch(`http://localhost:8000/todos/${id}`, {
            method: 'DELETE' // goes to the delete on backend and makes it run so it filters out the data in backend
        })
        .then(() => { // nothing is given back from the backend so () is empty unlike the post
            setTodos(todos.filter(todo => todo.id !== id)) // filter updates the frontend's display copy to match what the backend already did
        })

    }

    return (
        <div>
            <h1>Todo App</h1>
            <input 
                value={newText}
                onChange={e => setNewText(e.target.value)}
                placeholder="Add a todo"
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleDelete(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App