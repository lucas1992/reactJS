import './Item.css';
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap';

function Item( { item }) {
  return (
    <Card className="card-margin" >
      <Card.Img variant="top" src={`${item.pictureUrl}`} className="imagen-producto" />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
            {item.description}
            <br />
            <strong>PRECIO: {item.price}</strong>
        </Card.Text>
        <ItemCount stock={item.stock} initial="0" onAdd=""/>
      </Card.Body>
    </Card>
  );
}

export default Item;
