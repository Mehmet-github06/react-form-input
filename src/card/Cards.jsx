import {Card } from 'react-bootstrap';


function Cards({veri}) {
    const { username, email,  firstname, lastname, image } = veri
    console.log(username);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <Card.Text>
         {firstname} {lastname}
        </Card.Text>
       
      </Card.Body>
      <Card.Body>
      <Card.Text>
         {email}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;