import { useContext, useEffect } from 'react';
import './Cart.css';
import { CartContext } from './CartContext';
import { useNavigate, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { MdEditNote } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { MdKeyboardReturn } from 'react-icons/md';

const Cart = () => {
    let cart = useContext(CartContext);
    const navigate = useNavigate();
    return (
        <div>
        {
            cart.cart.length > 0
            ? cart.cart.map((itemCart) => (
                <Card className="card-margin-cart" >
                  <Card.Body>
                    <div className="view-card-body-cart">
                        <img src={`${itemCart.item.image}`} alt="imagen producto" className="imagen-producto-cart"/>
                        <div className="view-card-description">
                            <h4>{itemCart.item.name}</h4>
                            <div className="detail-inline">
                                <h6><strong>Cantidad:</strong> {itemCart.quantity}</h6>
                                <h6 className="ml-1"><strong>Precio unitario:</strong> ${itemCart.item.cost} </h6>
                                <h6 className="ml-1"><strong>Precio total:</strong> ${parseFloat(itemCart.item.cost) * parseInt(itemCart.quantity)} </h6>
                            </div>
                        </div>
                        <div className="action-buttons-cart">
                          <NavLink to={`/item/${itemCart.item.itemId}`} className="category">
                              <a href="#"><MdEditNote size={42} /></a>
                          </NavLink>
                          <a className="ml-1" onClick={() => cart.removeItem(itemCart.item.id)} href="#"><MdDelete size={42} /></a>
                        </div>
                    </div>
                  </Card.Body>
                </Card>
            ))
            : <div className="empty-cart">
                <h3 className="ml-1 mt-4"> <MdProductionQuantityLimits /> Aún no hay productos agregados!</h3>
                <Button className="ml-1" variant="primary" onClick={() => navigate('/', {replace: true})}>Volver al catálogo <MdKeyboardReturn /></Button>
            </div>
        }
        {

            cart.cart.length > 0
            ? <div>
                <h3 className="ml-1"><strong>Precio total:</strong> ${cart.total}</h3>
            </div>
            : ""
        }

        </div>
    );
}

export default Cart;