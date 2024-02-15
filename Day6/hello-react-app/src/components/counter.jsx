import React, { useState } from 'react';

const pStyle = {
    marginLeft: '70px',
    fontSize: 'xx-large'
}

const buttonStyle = {
    color: 'maroon',
    backgroundColor: 'peachpuff',
    fontSize: 'xx-large',
    margin: '10px',
    fontWeight: 'bolder',
    width: '40px'
}

// functional component
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p style={pStyle}>Counter <b style={{fontWeight: 'bolder', color: 'maroon'}}>{count}</b></p>
            <button style={buttonStyle} onClick={() => {setCount(count+1)}}>+</button>
            <button style={buttonStyle} onClick={() => {setCount(count-1)}}>-</button>
        </div>
    )
}

export default Counter;