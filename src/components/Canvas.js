import React, { useState } from 'react';
import Card from './Card';
import Arrow from './Arrow';
import './styles/Canvas.css';

const Canvas = () => {
  const [cards, setCards] = useState([
    { id: 1, position: { x: 50, y: 50 }, text: "Card 1 Text" },
    { id: 2, position: { x: 200, y: 200 }, text: "Card 2 Text" }
  ]);

  const [connections, setConnections] = useState([
    { startId: 1, endId: 2 }
  ]);

  // Logic to handle dragging, resizing, etc.

  return (
    <div className="canvas">
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
      {connections.map((conn, index) => {
        const startCard = cards.find(c => c.id === conn.startId);
        const endCard = cards.find(c => c.id === conn.endId);
        return <Arrow key={index} start={startCard} end={endCard} />;
      })}
    </div>
  );
};

export default Canvas;
