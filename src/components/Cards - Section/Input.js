import React, { useState } from "react";
import "./Input.css"

export default function Input({addCard }) {
  const [campaignName, setCampaignName] = useState("");
  const [activity, setActivity] = useState("");
  const [RewardCode, InputRewardCode] = useState("");

  const handleAddCard = () => {
    if (campaignName && activity) {
      const newCard = {
        campaignName,
        activity,
      };

      addCard(newCard);
      setCampaignName("");
      setActivity("");
    }
  };

  return (
    <div className="input__container">
      <h3>Create a Campaign</h3>
      <label>
        Campaign Name:
        <input
          type="text"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
        />
      </label>
      <label>
        Select Activity:
        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
          <option value="">Select Activity</option>
          <option value="Walking">Walking</option>
          <option value="Running">Running</option>
          <option value="Sleeping">Sleeping</option>
        </select>
      </label>
      <label>
        Input Reward Code
        <input
          type="text"
          value={RewardCode}
          onChange={(e) => InputRewardCode(e.target.value)}
        />
      </label>
      <button onClick={handleAddCard}>Publish Campaign</button>
    </div>
  );
}
