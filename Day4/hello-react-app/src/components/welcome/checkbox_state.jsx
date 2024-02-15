// import React, { Component } from 'react';

// // state
// // like props, state also hold some information about the component
// // but the kind of information and the way to handle that information is
// // going to be different in state as compared to props.

// // state is changable.
// class CheckboxNew extends Component {
//     constructor(){
//         super(); // call to the base / super class
//         // Maintaining the state hence it is stateful component
//         this.state = {
//             checked: true,
//             name: 'pqrs',
//             mindNo: 10
//         }
//         // // 2 binding outer this with handleChange this
//         // this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(){
//         // Modify the State here
//         // Never ever modify the state directly, always use method called as setState to modify the state
//         // this.state.checked = !this.state.checked;

//         // Synchronous Version of setState
//         // this.setState({checked: !this.state.checked});

//         // Asynchronous Version of setState(there could be a chance while re-rendering, one of the state
//         // might be modified, so its better to maintain prevState using asynchronous version of setState)
//         this.setState((prevState,props) => {
//             return {checked: !prevState.checked}
//         });
//     }
//     render() {
//         let msg = '';
//         if(this.state.checked){
//             msg = 'Checked';
//         }else{
//             msg = 'Unchecked';
//         }
//         return (
//             <div>
//                 <input type="checkbox" defaultChecked={this.state.checked}
//                 // // 1 bind outer this
//                 // onChange={this.handleChange.bind(this)} />

//                 // // 2 bind it in the constructor
//                 // onChange={this.handleChange} />

//                 // 3 use a Arrow function
//                 onChange={() => {
//                     // actual code here but right now calling handleChange
//                     this.handleChange();
//                 }} />
//                 <h1>The box is '{msg}'!</h1>
//             </div>
//         );
//     }
// }

// export default CheckboxNew;

import React, { Component, useState } from 'react';

// using functional component
export default function CheckboxNew(){
    // As we don't have constructor in a functional component to maintain a state, from React 16.8 onwards we
    // are able to use React Hooks.
    // useState to maintain the state with functional component

    // const [state, setState] = useState(initialState);
    const [checked, setCheckState] = useState(true);
    let msg = '';
    if(checked){
        msg = 'Checked';
    }else{
        msg = 'Unchecked';
    }
    return(
        <>
            <input type="checkbox" defaultChecked={checked} onChange={() => {
                setCheckState(!checked);
            }} />
            <h1 className='display-4 text-success'>The box is '{msg}'!</h1>
        </>
    )
}