import React, { useState } from "react";
import "./mainPreviewpage.css";
import VideoCard from "./VideoCard";

export default function MainPreview() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState(null);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVideoSelect = (e) => {
    const file = e.target.files[0];
    setSelectedVideo(file);
  };

  const handleVideoVerify = () => {
    // Perform video verification logic
    if (selectedVideo) {
      // Simulating video verification with a delay
      setVerificationStatus("analyzing");
      setTimeout(() => {
        setVerificationStatus("success");
      }, 4000);
    } else {
      console.log("No video selected for verification");
    }
  };

  const handleReupload = () => {
    setVerificationStatus(null);
  };

  return (
    <div className="main-preview-container">
      {verificationStatus ? (
        <VideoCard
          videoSrc={URL.createObjectURL(selectedVideo)}
          verificationStatus={verificationStatus}
          onReupload={handleReupload}
        />
      ) : (
        <div className="preview-component">
          <h2>Why Boys Have All The Fun</h2>
          <p>
            Record And Upload A Video Of Yourself Running While Wearing Nike 3
            Shoes, And Unlock A $100 Amazon Gift Card
          </p>

          <div className="input-container">
            <input
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <input
              type="text"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="video-upload-container">
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoSelect}
            />

            <div className="video-instructions">
              <p>Instructions:</p>
              <ol>
                <li>
                  Start the video by showing shoes in front of the camera.
                </li>
                <li>Video length should be no longer than 120 seconds.</li>
                <li>
                  You can only participate once, so give your best shot.
                </li>
              </ol>
            </div>
          </div>

          <button onClick={handleVideoVerify}>Verify Your Video</button>
        </div>
      )}
    </div>
  );
}
