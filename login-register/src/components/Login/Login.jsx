import { React } from 'react';
import { useState } from 'react';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [passWord, setPassword] = useState('');
    // const [message, setMessage] = useState(null);

    return(
        <div className='form-container'>
            
            <form className='login-form'>
                <h1>Login</h1>
                <div className='form-data'>
                    <input type='text' placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} />
                </div>
                <div className='form-data'>
                    <input type='password' placeholder='Password' value={passWord} onChange={event => setPassword(event.target.value)} />
                </div>
                <input type='submit' value='Login' />
            </form>
        </div>
    )
}

export default Login;