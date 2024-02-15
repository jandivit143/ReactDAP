import React, { useEffect, useState } from "react";
import Todo from "./todo";
import todoStore from "../stores/todoStore";
import { createTodoActionCreator, reloadTodoActionCreator } from "../actions/todoactions";

// Controller View / Container Component
const Todos = () => {
    // let todoList = [
    //     {
    //         id: 1111123232,
    //         text: 'Go Shopping',
    //         complete: false
    //     },
    //     {
    //         id: 23232323232,
    //         text: 'Play Chess',
    //         complete: true
    //     },
    //     {
    //         id: 3323223232,
    //         text: 'Watch Movie',
    //         complete: false
    //     }
    // ]

    // const [todos, setTodos] = useState(
        // [
        //     {
        //         id: 1111123232,
        //         text: 'Go Shopping',
        //         complete: false
        //     },
        //     {
        //         id: 23232323232,
        //         text: 'Play Chess',
        //         complete: true
        //     },
        //     {
        //         id: 3323223232,
        //         text: 'Watch Movie',
        //         complete: false
        //     }
        // ]
    // )

    const [todos, setTodos] = useState([]);
    const [val, setVal] = useState('');
    const [status, setStatus] = useState('');

    const getTodos = () => {
        console.log('getTodos!');
        // return todoList;
        // return todos;

        // grabbing the state from the store
        setTodos([...todoStore.getAll()]); // spread operator
    }

    useEffect(() => {
        // grabbing the state from the store
        setTodos([...todoStore.getAll()]);

        // Subscribing to the 'change' event of TodoStore
        todoStore.on('change',getTodos);

        // Unsubscribing
        return () => {
            // release the resource
            todoStore.off('change',getTodos);
        }
    },[]);

    const createTodoFun = () => {
        let txt = document.getElementById('todoInput').value;
        let status = document.getElementById('statusInput').value;
        if(status === 'true'){
            status = true;
        }else{
            status = false;
        }
        console.log('The status is ', status);
        createTodoActionCreator(txt, status);
        setVal('');
        setStatus('');
        document.getElementById('todoInput').focus();
    }

    const reloadTodosFun = () => {
        reloadTodoActionCreator();
    }

    // const TodosComponents = 
    //     todoList.map((todo) => {
    //         return <Todo key={todo.id} {...todo} />
    //     })

    // using useState
    const TodosComponents = 
        todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        })

    return(
        <div>
            <span style={{fontWeight: 'bolder'}}>Todo</span>:- <input type="text"
            id="todoInput" value={val} onChange={(evt) => {
                setVal(evt.target.value)
            }} /><br/><br/>
            <span style={{fontWeight: 'bolder'}}>Complete</span>:- <input type="text"
            id="statusInput" value={status} onChange={(evt) => {
                setStatus(evt.target.value)
            }} /><br/>
            <button className="btn btn-warning btn-outline-dark" style={{margin: '10px'}}
            onClick={createTodoFun}>
                Create Todo!
            </button><br/>
            <button className="btn btn-warning btn-outline-dark" style={{margin: '10px'}}
            onClick={reloadTodosFun}>
                Reload Todos!
            </button><br/>
            <h1>Todos</h1>
            <ul>
                {TodosComponents}
            </ul>
        </div>
    )
}
export default Todos;