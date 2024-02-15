// Here we wrote the code to communicate from parent component to child component using useRef() and for
// function components, we used forwardRef, useImperativeHandle to refer to the components.
import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ParentComp = () => {
    // Create a Ref
    const childRef = useRef();
    return(
        <>
            <h1>Inside Parent Component</h1>
            <ChildComp ref={childRef} />
            <button onClick={() => {
                childRef.current.instanceMethod("Some data from Parent " + 123);
                childRef.current.anotherInstanceMethod("Some data from Parent Component Abhijith");
            }}>Pass Data!</button>
        </>
    )
}
export default ParentComp;

// // Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to
// // use React.forwardRef()?
// const ChildComp = () => {
//     function instanceMethod(data){
//         console.log('Receiving data from the parent ' + data);
//     }

//     return(
//         <>
//             <h1>Inside Child Component</h1>
//         </>
//     )
// }

// Solution: Wrap a child component in forwardRef
// Use the useImperativeHandle hook in the child to add a function to the child
// Call the child's function from the parent component
const ChildComp = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        instanceMethod(data){
            console.log('Receiving data from parent '+ data);
        },
        anotherInstanceMethod(data){
            console.log('Receiving data from parent '+ data);
        }
    }))
    return(
        <>
            <h1>Inside Child Component</h1>
        </>
    )
})