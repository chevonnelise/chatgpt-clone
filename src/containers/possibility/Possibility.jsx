import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section_padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination.</h1>
        <p>ChatGPT-3: Advanced AI generates human-like text, revolutionizing conversational understanding.</p>
      </div>
    </div>
  )
}

export default Possibility