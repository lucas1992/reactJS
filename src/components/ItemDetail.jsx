import { Card } from 'react-bootstrap';
import './ItemDetail.css';
import ItemCount from './ItemCount';

function ItemDetail( { item }) {
  return (
    <Card className="card-margin" >
      <Card.Body>
        <div className="view-card-body">
            <img src={`${item.image}`} alt="imagen producto" className="imagen-producto "/>
            <div className="view-card-description">
                <h4 className="ml-1">{item.name}</h4>
                <h6 className="ml-1 mt-2">{item.description}</h6>
                <h6 className="ml-1 mt-4"><strong>Stock:</strong> {item.stock} </h6>
                <h6 className="ml-1" ><strong>Vendidos:</strong> {item.sales} </h6>
                <h3 className="ml-1"><strong>PRECIO: ${item.cost}</strong></h3>
                <div className="view-item-count mt-4">
                    <ItemCount stock={item.stock} initial="0" onAdd=""/>
                </div>
            </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
