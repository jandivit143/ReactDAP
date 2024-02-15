import React from "react";
import useFetch from "./usefetch";

const RESTFulCallTodos = () => {
    // using custom hook - useFetch
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');
    return(
        <>
            {data && data.map((item) => {
                return <p key={item.id} className="text-info display-6">
                    {item.title}
                </p>
            })}
        </>
    )
}
export default RESTFulCallTodos;

export const RESTFulCallUsers = () => {
    // using custom hook - useFetch
    const [data] = useFetch('https://jsonplaceholder.typicode.com/users');
    return(
        <>
            {data && data.map((item) => {
                return <p key={item.id} className="text-info display-6">
                    {item.name}
                </p>
            })}
        </>
    )
}

// import React, { useEffect, useState } from "react";

// const RESTFulCallTodos = () => {
//     const url = 'https://jsonplaceholder.typicode.com/todos';
//     const [data, setData] = useState(null);
//     useEffect(() => {
//         // fetching the data from RESTFul Service - doing side effect stuff in useEffect hook only once
//         fetch(url)
//         .then((res) => res.json())
//         .then((data) => setData(data));
//     },[]); // componentDidMount - where only once you will be making RESTFul Service call

//     return(
//         <>
//             {data && data.map((item) => {
//                 return <p key={item.id} className="text-info display-6">
//                     {item.title}
//                 </p>
//             })}
//         </>
//     )
// }
// export default RESTFulCallTodos;