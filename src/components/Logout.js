import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';
import './Dashboard.css';

const Dashboard = () => {
    const { dispatch } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session
        dispatch({ type: 'LOGOUT' });

        // Redirect to login page
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <h1>Welcome to the Dashboard</h1>
            <button className="logout-button" onClick={handleLogout}>
                Logout
            </button>
            {/* Other dashboard content */}
        </div>
    );
};

export default Dashboard;
