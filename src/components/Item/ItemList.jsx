import Item from './Item';

function ItemList({ items }) {
  return (
    <>
      {
        items.length > 0
        ? items.map(producto => ( <Item item={producto} key={producto.id} />))
        : <p>Cargando productos...</p>
      }
    </>
  );
}

export default ItemList;
