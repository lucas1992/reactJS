import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const { products } = require('../utils/products');

function ItemDetailContainer () {
  const [detalle, setDetalle] = useState([]);

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
    customFetch(2000, products[5])
        .then(response => setDetalle(response))
        .catch(err => console.log(err))
  }, [])


  return (
    <ItemDetail item={detalle} />
  );
}

export default ItemDetailContainer;