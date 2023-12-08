import { Card } from 'react-bootstrap';


function Cards({ veri }) {
  const { username, email, firstname, lastname, image } = veri
  console.log(username);
  return (
    <Card className='text-center mx-auto mt-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <Card.Text> {firstname} {lastname}</Card.Text>
      </Card.Body>
      <Card.Footer className='text-body-secondary'>
        {email}
      </Card.Footer>

    </Card>
  );
}

export default Cards;