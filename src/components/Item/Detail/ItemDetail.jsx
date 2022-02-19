import { Card } from 'react-bootstrap';
import './ItemDetail.css';
import ItemCount from '../Count/ItemCount';
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import { CartContext } from '../../Cart/CartContext';

function ItemDetail( { item }) {
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  function addToCart(varCount){
    cart.addItem(item, varCount);
    navigate('/cart', {replace: true})
  }

  return (

    <Card className="card-margin" >
      <Card.Body>
        <div className="view-card-body">
            {
            item.id
            ? <>
                    <img src={`${item.image}`} alt="imagen producto" className="imagen-producto "/>
                    <div className="view-card-description">
                        <h4 className="ml-1">{item.name}</h4>
                        <h6 className="ml-1 mt-2">{item.description}</h6>
                        <h6 className="ml-1 mt-4"><strong>Stock:</strong> {item.stock} </h6>
                        <h6 className="ml-1" ><strong>Vendidos:</strong> {item.sales} </h6>
                        <h3 className="ml-1"><strong>PRECIO: ${item.cost}</strong></h3>
                        <div className="view-item-count mt-4">
                            <ItemCount stock={item.stock} initial="1" onAdd={addToCart}/>
                        </div>
                    </div>
                </>
            : <p>Cargando detalle...</p>
            }
        </div>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
