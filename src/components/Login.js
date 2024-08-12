import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';

const Login = () => {
    const { dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Perform authentication logic here

        // On successful login
        dispatch({
            type: 'LOGIN',
            payload: { username },
        });

        // Redirect to dashboard or home
        navigate('/dashboard');
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;