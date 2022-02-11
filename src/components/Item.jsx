import './Item.css';
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap';
import {useNavigate, NavLink} from 'react-router-dom';
import { useState, useContext } from 'react';
import CartContext from './CartContext';


function Item( { item }) {
  const cart = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);
  const navigate = useNavigate();

  function showCartCount(varCount){
    setCantidad(varCount);
    console.log(cart);
    cart.addItem(item, varCount);
    navigate('/cart', {replace: true})
  }

  return (
    <Card className="card-margin" >
      <NavLink to={`/item/${item.itemId}`} activeClassName="current-category" className="category">
          <Card.Img variant="top" src={`${item.image}`} className="imagen-producto" />
      </NavLink>
      <Card.Body>
        <Card.Text>
            <h3 className="ml-1">{item.name}</h3>
            <br />
            <strong className="ml-1">PRECIO: ${item.cost}</strong>
        </Card.Text>
        <ItemCount stock={item.stock} initial="0" onAdd={showCartCount}/>
      </Card.Body>
    </Card>
  );
}

export default Item;
