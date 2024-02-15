import React, { useState } from 'react';

const Todos = () => {
    // Maintaining the collection of todo
    const [todos, setTodos] = useState(['Prepare Presentation', 'Learn React', 'Watch Movie']);
    // todo
    const [todo, setTodo] = useState('Default Todo');
    return(
        <div>
            Todo:- <input type="text" value={todo} onChange={(evt) => {
                setTodo(evt.target.value)
            }} />
            <button onClick={() => {
                console.log(todo);
                setTodos((todos) => [...todos, todo]);
            }}>Add</button>
            <ul className='list-unstyled'>
                {todos.map((td) => {
                    return <li className='display-6 text-primary' key={td}>{td}</li>
                })}
            </ul>
        </div>
    )
}
export default Todos;