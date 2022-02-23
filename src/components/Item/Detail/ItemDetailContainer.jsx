import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import fetchItemById from "../../../utils/firebase/fetchById";


function ItemDetailContainer () {
  const [detalle, setDetalle] = useState({});
  const { itemId } = useParams();
  useEffect(() => {
        fetchItemById(itemId, "items")
            .then (item => {
                setDetalle(item);
            })
            .catch(error => console.log(error));
  }, [itemId, setDetalle])


  return (
    <ItemDetail item={detalle} />
  );
}

export default ItemDetailContainer;