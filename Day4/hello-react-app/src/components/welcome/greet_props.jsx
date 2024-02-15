import React, { Component } from 'react';

//props are there to hold some information as well as to represent / display that information.

//in a component for props generally a data / information coming from the parent component.

//props are immutable.

// class component
// class GreetNew extends Component {
//     static defaultProps = {
//         name: 'Raj'
//     }
//     render() {
//         return (
//             <h2 className='text-danger display-6'>
//                 Welcome {this.props.name}!
//             </h2>
//         );
//     }
// }

// export default GreetNew;

// functional component
export default function GreetNew(props){
    return(
        (props.name) ?
            <h2 className='text-info display-3'>
                Welcome {props.name}!
            </h2> :
            <h2 className='text-success display-3'>
                Welcome Raj!
            </h2>
    )
}

// functional component
export function HelloMsgNew(props){
    return(
        // <div>
        // <React.Fragment>
        <>
            <h2 className='text-danger display-3'>
                Welcome to {props.title}!
            </h2>
            <h3 className='text-info display-6'>
                {props.children}
            </h3>
        </>
        // </React.Fragment>
        // </div>
    )
}

//cars brand name and model
//brand name Tata - model Safari
//brand name Ford - model Mustang
// functional component
export function CarsNew(props){
    return(
        <>
            <h2 className='text-danger display-6'>
                {props.brand.name}-
            <b className='text-info display-6'>
                {props.brand.model}!
            </b>
            </h2>
        </>
    )
}

// // functional component
// export function SimpleTitleNew(props){
//     if(props.showTitle){
//         return <h2 className='display-6 text-warning'>{props.title}</h2>
//     }else{
//         return null;
//     }
// }

// // functional component - destructure the props
// export function SimpleTitleNew({showTitle, title}){
//     if(showTitle){
//         return <h2 className='display-6 text-secondary'>{title}</h2>
//     }else{
//         return null;
//     }
// }

// functional component - destructure the props
export function SimpleTitleNew(props){
    // destructuring
    // const {showTitle, title} = props;

    // (or)
    
    // spread operator
    const {showTitle, title} = {...props};
    if(showTitle){
        return <h2 className='display-6 text-primary'>{title}</h2>
    }else{
        return null;
    }
}