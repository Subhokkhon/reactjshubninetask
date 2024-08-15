import React from 'react';
import './styles/Popup.css';

const CardPopup = ({ text, closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h3>Card Details</h3>
        <p>{text}</p>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default CardPopup;
