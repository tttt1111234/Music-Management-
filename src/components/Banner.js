import React from 'react';
import './Banner.css'; // Assuming you'll create this CSS file

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <img src="/assets/273f0ff5-2e12-4576-87bb-270681a88337.jpeg" alt="App Logo" className="banner-logo" />
                <div className="banner-text">
                    <h1>Music Manager</h1>
                    <p>Empower your music career</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
