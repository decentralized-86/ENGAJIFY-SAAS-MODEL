import React, { useState } from "react";
import "./VideoCard.css";
import ClaimReward from "./claimReward";

export default function VideoCard({ videoSrc, verificationStatus, onReupload }) {
  const [showClaimReward, setShowClaimReward] = useState(false);

  const handleClaimReward = () => {
    // Handle claim reward logic here
    setShowClaimReward(true);
  };

  return (
    <div className="phone-screen">
      {!showClaimReward ? (
        <div className="video-card">
          {videoSrc && <video src={videoSrc} controls />}
          <div className="video-card__overlay">
            {verificationStatus === "analyzing" ? (
              <>
                <p>Analyzing Your Video...</p>
                <div className="loading-spinner"></div>
              </>
            ) : verificationStatus === "success" ? (
              <>
                <p>Verification Successful</p>
                <p>Output on Analyzing the Selected Activity: 80%</p>
                <button className="claim-reward-button" onClick={handleClaimReward}>
                  Claim Reward
                </button>
                <button className="reupload-button" onClick={onReupload}>
                  Reupload your Video
                </button>
              </>
            ) : (
              <>
                <p>Task Not Detected</p>
                <button className="reupload-button" onClick={onReupload}>
                  Reupload Your Video
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <ClaimReward />
      )}
    </div>
  );
}
