import { useContext } from 'react';
import './Cart.css';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { MdKeyboardReturn } from 'react-icons/md';

const Cart = () => {
    let cart = useContext(CartContext).cartList;
    const navigate = useNavigate();
    return (
        <div>
        {
            cart.length
            ? cart.map((itemCart) => (
                <Card className="card-margin-cart" key={"card-" + `${itemCart.item.id}`}>
                  <Card.Body key={"card-body-" + `${itemCart.item.id}`}>
                    <div className="view-card-body-cart" key={"card-body-div-" + `${itemCart.item.id}`}>
                        <img src={`${itemCart.item.image}`} alt="imagen producto" className="imagen-producto-cart" key={"card-body-div-img-" + `${itemCart.item.id}`}/>
                        <div className="view-card-description" key={"card-body-div-div-" + `${itemCart.item.id}`}>
                            <h4 key={"card-body-div-div-h4-" + `${itemCart.item.id}`}>{itemCart.item.name}</h4>
                            <div key={"card-body-div-div-div-" + `${itemCart.item.id}`} className="detail-inline">
                                <h6 key={"card-body-div-div-div-h6-1-" + `${itemCart.item.id}`}><strong>Cantidad:</strong> {itemCart.quantity}</h6>
                                <h6 key={"card-body-div-div-div-h6-2-" + `${itemCart.item.id}`} className="ml-1"><strong>Precio unitario:</strong> ${itemCart.item.cost} </h6>
                                <h6 key={"card-body-div-div-div-h6-3-" + `${itemCart.item.id}`} className="ml-1"><strong>Precio total:</strong> ${parseFloat(itemCart.item.cost) * parseInt(itemCart.quantity)} </h6>
                            </div>
                        </div>
                        <div key={"card-body-div-div-2-" + `${itemCart.item.id}`} className="action-buttons-cart">
                          <a key={"card-body-div-div-2-a-" + `${itemCart.item.id}`} className="ml-1" onClick={() => cart.removeItem(itemCart.item.id)} href="#"><MdDelete size={42} /></a>
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
            cart.length
            ? <div>
                <h3 className="ml-1"><strong>Precio total:</strong> ${cart.total}</h3>
            </div>
            : ""
        }

        </div>
    );
}

export default Cart;