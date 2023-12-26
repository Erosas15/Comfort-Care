import React from "react";
import './Header.css'

const Header = () => { 

    const handleAboutUsClick = () => {
        window.location.href = 'about';
    };



    return (
        <div className='header'>
            <ul className='logo-container'>
                <li className='comfort-care-logo'> Comfort Care 24/7 LLC</li>
            </ul>
            <ul className='navigation-buttons-container'>
                <li className='home-button'>Home</li>
                <li className='about-button' onClick={handleAboutUsClick}>About Us</li>
                <li className='outreach-button'>Outreach</li>
            </ul>
            <ul className='auth-container'>
                <li className='login-button'>Login</li>
                <li className='signup-button'>Sign Up</li>
            </ul>
        </div>  
    );

};


export default Header;