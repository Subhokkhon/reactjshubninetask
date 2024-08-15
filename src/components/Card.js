import React, { useState } from 'react';
import CardPopup from './CardPopup';
import './styles/Card.css';

const Card = ({ card }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="card" style={{ left: card.position.x, top: card.position.y }}>
      <div className="card-content">
        <p>{card.text.substring(0, 10)}...</p>
        <button onClick={togglePopup}>Show More</button>
      </div>
      {showPopup && <CardPopup text={card.text} closePopup={togglePopup} />}
    </div>
  );
};

export default Card;
