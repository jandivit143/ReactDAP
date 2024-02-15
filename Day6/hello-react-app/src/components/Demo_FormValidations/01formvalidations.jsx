import React, { useState } from 'react';
import './myform.css';
import { useEffect } from 'react';

export default function MyForm(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [errors,setErrors] = useState({});

    useEffect(() => {
        const errs = {};
        if(!name){
            errs.name = 'Name is required!';
        }

        if(!email){
            errs.email = 'Email is mandatory!';
        }else if(!/\S+@\S+\.\S+/.test(email)){
            errs.email = 'Invalid Email!';
        }

        if(!password){
            errs.password = 'Password is required!';
        }else if(password.length < 6){
            errs.password = 'Password must be at least 6 characters!';
        }

        setErrors(errs);
    },[name, email, password]);

    function handleSubmit(evt){
        evt.preventDefault();
        console.log(name+' '+email+' '+password);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <button className='btn btn-info'>Submit</button>
        </form>
    )
}