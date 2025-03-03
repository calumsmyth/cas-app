import React from 'react';
import { useLocation } from 'react-router-dom';

const HeroTitle = () => {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case '/':
                return 'HOME';
            case '/about':
                return 'ABOUT';
            case '/contact':
                return 'CONTACT';
            case '/projects':
                return 'PROJECTS';
            default:
                return 'Welcome to my website';
        }
    };

    return (
        <div className="hero-title">
            <h2>{getTitle()}</h2>
        </div>   
    )
};



export default HeroTitle;