import React from "react";

// class component
// export default class Hello extends React.Component{
//     render(){
//         return <h1>Hello World - using Webpack! - Class Component</h1>
//     }
// }

// functional component - recommended
export default function Hello(){
    return <h1>Hello World - using Webpack! - Functional Component</h1>
}

// functional components benefits
// => Code is easier to read and understand
// => Easy to debug
// => Easy to test - don't have to worry about any hidden state
// => Better in performance - No state, No lifecycle methods

// class component
// export class HelloII extends React.Component{
//     render(){
//         return <h1>Hello Universe - using Webpack! - Class Component</h1>
//     }
// }

export function HelloII(){
    return <h1>Hello Universe - Functional Component</h1>
}