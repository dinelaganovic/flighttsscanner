import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return ( < div className = 'hero-container'>
        <video  src = '/videos/video-2.mp4'
        autoPlay loop muted />
        <h1> FIND A SUITABLE FLIGHT AND SECURE A HOTEL </h1>    
        <p> FOR YOUR TRIP </p>   
        <div className = 'hero-btns' >
        <Button className = 'btns'
        buttonStyle = 'btn--outline'
        buttonSize = 'btn--large' >
        LET 'S SEARCH </Button> </div > </div>
    );
}

export default HeroSection;