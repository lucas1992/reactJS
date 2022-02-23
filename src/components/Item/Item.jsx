import './Item.css';
import ItemCount from './Count/ItemCount';
import { Card } from 'react-bootstrap';
import {useNavigate, NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';


function Item( { item }) {
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  function addToCart(varCount){
    cart.addItem(item, varCount);
    navigate('/cart', {replace: true})
  }

  return (
    <Card className="card-margin-item" >
      <NavLink to={`/item/${item.id}`} className="category-item-flex">
          <Card.Img variant="top" src={`${item.image}`} className="imagen-producto-item" />
      </NavLink>
      <Card.Body>
        <div>
            <h3 className="ml-1 text-center">{item.name}</h3>
            <br />
            <strong className="ml-1">PRECIO: ${item.cost}</strong>
        </div>
        <ItemCount stock={item.stock} initial="1" onAdd={addToCart}/>
      </Card.Body>
    </Card>
  );
}

export default Item;
