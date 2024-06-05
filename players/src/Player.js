import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Player=({FullName, Age, Team, Nationality, JerseyNumber, ImageUrl}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ImageUrl} />
      <Card.Body>
        <Card.Title>{FullName}</Card.Title>
        <Card.Text>
          <p>Team:{Team}</p>
          <p>Nationality:{Nationality}</p>
          <p>JerseyNumber:{JerseyNumber}</p>
          <p>Age:{Age}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}
Player.defaultProps={ FullName: "Player Name",
Team: "Team Name",
Nationality: "Nationality",
JerseyNumber: 0,
Age: 0,
ImageUrl: "https://via.placeholder.com/150"}
export default Player;