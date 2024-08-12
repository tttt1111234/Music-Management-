import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <h3>Menu</h3>
                <ul>
                    <li>Master Files</li>
                    <li>Meta Data</li>
                    <li>Contracts</li>
                    <li>Stems</li>
                    <li>Deals</li>
                </ul>
                <button className="invite-button">Invite Partners</button>
            </div>
            <div className="content">
                <div className="header">
                    <h2>Dashboard</h2>
                    <div className="user-controls">
                        <span>Welcome, User</span>
                        
                    </div>
                </div>
                <div className="widgets">
                    <div className="widget">
                        <h3>Recent Deals</h3>
                        <p>Details about recent deals...</p>
                    </div>
                    <div className="widget">
                        <h3>Active Contracts</h3>
                        <p>Details about active contracts...</p>
                    </div>
                    <div className="widget">
                        <h3>Revenue</h3>
                        <p>Details about revenue...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
