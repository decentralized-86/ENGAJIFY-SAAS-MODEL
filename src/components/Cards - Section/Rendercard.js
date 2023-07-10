import React, { useState } from "react";
import Card from "./Card";
import Input from "./Input";

export default function Rendercard() {
  const [cards, setCards] = useState([]);
  const [showInput, setShowInput] = useState(false);


  const addCard = (newCard) => {
    const { campaignName, activity } = newCard;
    const newCardObj = {
      id: cards.length + 1,
      img_src: 'engajify/public/pexels-ketut-subiyanto-4719924.jpg',
      title: campaignName,
      content: activity,
    };
    setCards([...cards, newCardObj]);
    setShowInput(false);
  };

  const handleAddCampaign = () => {
    setShowInput(true);
  };

  return (
    <div className="card-container">
      {showInput ? (
        <Input addCard={addCard} />
      ) : (
        <div>
          {cards.length > 0 ? (
            cards.map((card) => (
              <Card key={card.id} src={card.img_src} title={card.title} content={card.content} />
            ))
          ) : (
            <p>No campaigns found. Create a new campaign.</p>
          )}
        </div>
      )}
       {!showInput && (
        <button className="card-button" onClick={handleAddCampaign}>
          Add Campaign
        </button>
      )}
    </div>
  );
}
