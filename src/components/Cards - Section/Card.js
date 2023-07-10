import React, { useState } from 'react';
import './Card.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Card({ src, title, content }) {
    const [ShowDetails,setShowDetails] = useState(false);

    const handleLearnMore = () => {
        setShowDetails(true);
      };
    
      const handleHideDetails = () => {
        setShowDetails(false);
      };
    

  return (
    <MDBCard className="card">
      <MDBCardImage src={src} position='top' alt='...' className="card-image" />
      <MDBCardBody>
        <MDBCardTitle className="card-title">{title}</MDBCardTitle>
        <MDBCardText className="card-content">
          {content}
        </MDBCardText>
        {!ShowDetails ? (
          <MDBBtn onClick={handleLearnMore}>More details</MDBBtn>
        ) : (
          <div>
            <div>
                <p style={{ fontFamily: 'Source Sans Pro', fontSize: '16px' }}>More Details about the Campaign</p>
            </div>
            <MDBBtn onClick={handleHideDetails}>Less details</MDBBtn>
          </div>
        )}
      </MDBCardBody>
    </MDBCard>
  );
}
