import React, { useState } from 'react';

const formStyle = {
    padding: '30px',
    backgroundColor: 'peachpuff',
    maxWidth: 'fit-content',
    marginLeft: '40%'
}

// const LoginForm = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const printValues = (evt) => {
//         evt.preventDefault(); // prevent the default implementation
//         console.log(username + ' ' + password);
//     }
//     return(
//         <form style={formStyle} onSubmit={printValues}>
//             <label>Username:</label>
//             <input type="text" style={{margin:'10px'}} value={username} name='username'
//             onChange={(evt) => {setUsername(evt.target.value)}} /><br/>
//             <label>Password:</label>
//             <input type="password" style={{margin:'10px'}} value={password} name='password'
//             onChange={(evt) => {setPassword(evt.target.value)}} /><br/>
//             <button>Submit</button>
//         </form>
//     )
// }

// export default LoginForm;

// Convert LoginForm to work with only one state and that too of Object
export default function LoginForm(){
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const printValues = e => {
        e.preventDefault();
        console.log(form.username, form.password);
    };

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return(
        <form style={formStyle} onSubmit={printValues}>
            <label>
                Username:
                <input type="text" style={{margin: '10px'}} value={form.username} name='username'
                onChange={updateField}/>
            </label><br/>
            <label>
                Password:
                <input type="password" style={{margin: '10px'}} value={form.password} name='password'
                onChange={updateField}/>
            </label><br/>
            <button>Submit</button>
        </form>
    )
}