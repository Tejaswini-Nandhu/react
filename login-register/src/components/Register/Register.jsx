import { React } from 'react';
import { useState } from 'react';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [passWord, setPassword] = useState('');
    const [message, setMessage] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();
        if (firstName === '' || lastName === '' || email === '' || passWord === '') {
            setMessage('Please fill all the fields');
            return;
        }
        console.log('submit button is pressed!');
    }
    return (
        <div>
            <h1>this is the register page</h1>
            <h5>Register</h5>
            <form onSubmit={submitHandler}>
                <div className='form-data'>
                    <input type='text' placeholder='First Name' value={firstName} onChange={event => setFirstName(event.target.value)} />
                </div>
                <div className='form-data'>
                    <input type='text' placeholder='Last Name' value={lastName} onChange={event => setLastName(event.target.value)} />
                </div>
                <div className='form-data'>
                    <input type='text' placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} />
                </div>
                <div className='form-data'>
                    <input type='password' placeholder='Password' value={passWord} onChange={event => setPassword(event.target.value)} />
                </div>
                <input type='submit' value="Register" />
            </form>
            {message && <p className='message'>{message}</p>}
        </div>
    );
}

export default Register;