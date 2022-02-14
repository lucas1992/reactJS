import './Item.css';
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap';
import {useNavigate, NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';


function Item( { item }) {
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  function addToCart(varCount){
    cart.addItem(item, varCount);
    navigate('/cart', {replace: true})
  }

  return (
    <Card className="card-margin" >
      <NavLink to={`/item/${item.itemId}`} className="category">
          <Card.Img variant="top" src={`${item.image}`} className="imagen-producto" />
      </NavLink>
      <Card.Body>
        <div>
            <h3 className="ml-1">{item.name}</h3>
            <br />
            <strong className="ml-1">PRECIO: ${item.cost}</strong>
        </div>
        <ItemCount stock={item.stock} initial="0" onAdd={addToCart}/>
      </Card.Body>
    </Card>
  );
}

export default Item;
