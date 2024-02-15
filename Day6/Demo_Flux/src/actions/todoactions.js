import dispatcher from "../dispatcher";

// Synchronous Action
export function createTodoActionCreator(text, complete){
    // dispatching the action with payload - text, complete
    dispatcher.dispatch({type:'CREATE_TODO',text,complete});
}

// Asynchronous Action
// Simulation Ajax
export function reloadTodoActionCreator(){
    dispatcher.dispatch({type:'FETCH_TODOS'});
    setTimeout(() => {
        dispatcher.dispatch({type:'RECEIVE_TODOS',
        todos:[
            {
                id: 8484848484,
                text: 'Do warm up',
                complete: false
            },
            {
                id: 6262627272,
                text: 'Play Football',
                complete: true
            },
            {
                id: 9982388388,
                text: 'Run 10KM',
                complete: false
            },
            {
                id: 78273882823,
                text: 'Go to Gym',
                complete: true
            }
        ]})
    }, 2000);
}