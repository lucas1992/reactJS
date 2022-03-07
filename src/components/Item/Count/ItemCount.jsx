import { Button } from 'react-bootstrap';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useState, useEffect } from "react";
import './ItemCount.css';

const ItemCount = ({ stock, initial,  onAdd }) => {
  const [cartCount, setCartCount] = useState(parseInt(initial));


  // Igualmente con el valor por default ya quedaba cubierta la funcionalidad
  useEffect(() => {
        // prevent undefined and stock=0. En la clase se omitio esto.
        if(initial && parseInt(stock) !== 0){
             setCartCount(parseInt(initial));
        }else{
            setCartCount(0);
        }
  }, [initial, stock, setCartCount]);


  const decrement = () => {
    if(cartCount <= 1){
        return;
    }
    setCartCount(cartCount - 1);
  }

  const increment = () => {
    if(cartCount === parseInt(stock)){
        return;
    }
    if(parseInt(stock) <= 0){
        return;
    }
    setCartCount(cartCount + 1);
  }

  return (
    <>
        <ButtonGroup className="ml-1">
          <Button variant="dark" onClick={decrement}>
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <label className="centerLabel">{ cartCount }</label>
          <Button variant="dark" onClick={increment}>
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
        {
            parseInt(stock) > 0
            ? <Button className="ml--2" variant="primary" onClick={() => onAdd(cartCount)}>Agregar al carrito</Button>
            : <Button className="ml--2" variant="primary" disabled>Agregar al carrito</Button>
        }
    </>
  );
}

export default ItemCount;