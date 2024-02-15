import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos = [
            {
                id: 1111123232,
                text: 'Go Swimming',
                complete: false
            },
            {
                id: 23232323232,
                text: 'Play Cricket',
                complete: true
            },
            {
                id: 3323223232,
                text: 'Watch Movie',
                complete: false
            }
        ]
    }
    getAll(){
        return this.todos;
    }
    createTodo(text, complete){
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete
        });
        // raise custom event
        this.emit('change'); // raising or publishing a custom event 'change'
        console.log(this.todos);
    }

    // callback that will be registerd with dispatcher
    handleActions(action){
        console.log('TodoStore received an action ', action);
        switch(action.type){
            case 'CREATE_TODO':
                this.createTodo(action.text, action.complete)
                break;
            case 'RECEIVE_TODOS':
                this.todos = action.todos;
                this.emit('change');
                break;
            default:
                console.log('Default case!');
                break;
        }
    }
}
const todoStore = new TodoStore();

// exposing todoStore to browser window
// window.todoStore = todoStore;

// dispatcher - register and dispatch
// dispatcher.register will register with callback provided by store
dispatcher.register(todoStore.handleActions.bind(todoStore));

// dispatching the actions
// dispatcher.dispatch({type:'CREATE_TODO',text:'Make Lunch',complete:true})

// expose the dispatcher to browsers window
window.dispatcher = dispatcher;

export default todoStore;