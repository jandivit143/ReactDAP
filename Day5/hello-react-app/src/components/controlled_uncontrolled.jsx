import React, { useRef, useState } from 'react';

const ControlledComponent = () => {
    const [name, setName] = useState('Abhijith');
    const inputEle = useRef();
    const handleChange = (evt) => {
        // Modifying the source first, automatically get reflected to all the targets
        setName(evt.target.value);
        // console.log('state:- '+name);
    }
    return(
        <div>
            <input type="text" /><br/>
            <input type="text" defaultValue='Rahul' /><br/>
            {/* Controlled Component by React */}
            {/* <input type="text" value='Sourav' /><br/> */}
            {/* Controlled Component by React */}
            <input type="text" value={name} onChange={handleChange} /><br/>
            
            {/* Uncontrolled Component */}
            <input type="text" defaultValue={name} ref={inputEle} /><br/>
            <button onClick={() => {
                // through reference getting the value of the control / element
                console.log(inputEle.current.value);
            }}>Get
            </button>

            <h1>{name}!</h1>
        </div>
    )
}

export default ControlledComponent;