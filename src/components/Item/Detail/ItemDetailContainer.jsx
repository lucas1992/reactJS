import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const { products } = require('../../../utils/products');

function ItemDetailContainer () {
  const [detalle, setDetalle] = useState([]);
  const { itemId } = useParams();
  useEffect(() => {
    let is_ok = true;
    const customFetch = (time, task) => {
        return new Promise((resolve, reject) => {
            if (is_ok) {
                setTimeout(() => {
                    resolve(task)
                }, time);
            } else {
                reject("Error")
            }
        });
    }
    if(itemId != null){
        customFetch(2000, products[parseInt(itemId)])
            .then(response => setDetalle(response))
            .catch(err => console.log(err))
    }else{
        customFetch(2000, products[5])
            .then(response => setDetalle(response))
            .catch(err => console.log(err))
    }

  }, [itemId, setDetalle])


  return (
    <ItemDetail item={detalle} />
  );
}

export default ItemDetailContainer;