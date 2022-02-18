import './Item.css';
import ItemCount from './Count/ItemCount';
import { Card } from 'react-bootstrap';
import {useNavigate, NavLink} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Cart/CartContext';


function Item( { item }) {
  const [initial, setInitial] = useState("0");
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  function addToCart(varCount){
    cart.addItem(item, varCount);
    navigate('/cart', {replace: true})
  }

  useEffect(() => {
       if(cart.isInCart(item.id)){
            let item_cart = cart.getItem(item.id);
            setInitial(item_cart[0].quantity);
       }

  }, [item, cart, setInitial, initial])

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
        <ItemCount stock={item.stock} initial={initial} onAdd={addToCart}/>
      </Card.Body>
    </Card>
  );
}

export default Item;
