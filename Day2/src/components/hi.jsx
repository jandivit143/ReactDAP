import React from 'react';

// functional component with normal function syntax
// const Hi = function(){
//     return (
//         <h3>Just to say Hi!</h3>
//     )
// }

// using arrow function syntax with explicit return
// const Hi = () => {
//     return (
//         <h3>Just to say Hi!- with Arrow Syntax 1!</h3>
//     )
// }

// using arrow function syntax with implicit return / lambda expression
// const Hi = () => (
//         <h3>Just to say Hi!- with Arrow Syntax 2 lambda expression!</h3>
//     )
const Hi = () => (
    <h3 className="display-1 text-success">Just to say Hi!- with Arrow Syntax 2 lambda expression!</h3>
)

export default Hi;