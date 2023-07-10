import React, { useState } from "react";
import "./claimReward.css";

export default function ClaimReward() {
  const [codeCopied, setCodeCopied] = useState(false);

  const handleCopyCode = () => {
    const code = "ABC123";
    navigator.clipboard.writeText(code);
    setCodeCopied(true);
  };

  return (
    <div className="claim-reward-container">
      <div className="gift-card">
        <h3>Congratulations!</h3>
        <p>Unlock a $100 Amazon Gift Card</p>
        <div className="code-container">
          <p className="gift-card-code">Code: ABC123</p>
          <button className="copy-button" onClick={handleCopyCode}>
            <span role="img" aria-label="Copy" className="copy-symbol">
              &#128203;
            </span>
          </button>
        </div>
        {codeCopied && <p className="copy-status">Code copied!</p>}
      </div>
    </div>
  );
}
