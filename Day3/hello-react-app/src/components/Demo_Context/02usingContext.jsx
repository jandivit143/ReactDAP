import React, { createContext, useContext, useState } from 'react';

// Context
// createContext - lets you create a context that components can provide or read.
const NameContext = createContext();

export const ComponentOne = () => {
    const [name, setName] = useState('Sachin');
    return(
        <NameContext.Provider value={name}>
            <input type="text" value={name} style={{margin:'10px'}}
            onChange={(evt) => {setName(evt.target.value)}} />
            <h1 className='text-info'>Component One!</h1>
            <h3 className='text-success'>{`Welcome ${name}!`}</h3><br/>
            <ComponentTwo />
        </NameContext.Provider>
    )
}

export const ComponentTwo = () => {
    return(
        <>
            <h1 className='text-info'>Component Two!</h1>
            <ComponentThree />
        </>
    )
}

export const ComponentThree = () => {
    const name = useContext(NameContext);
    return(
        <>
            <h1 className='text-info'>Component Three!</h1>
            <h3 className='text-success'>{`Welcome ${name}!`}</h3><br/>
            <ComponentFour />
        </>
    )
}

export const ComponentFour = () => {
    return(
        <>
            <h1 className='text-info'>Component Four!</h1>
            <ComponentFive />
        </>
    )
}

export const ComponentFive = () => {
    const name = useContext(NameContext);
    return(
        <>
            <h1 className='text-info'>Component Five!</h1>
            <h3 className='text-success'>{`Welcome ${name}!`}</h3>
        </>
    )
}