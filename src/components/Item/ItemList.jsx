import Item from './Item';

function ItemList({ items }) {
  return (
    <>
      {
        items.length
        ? items.map(producto => ( <Item item={producto} key={producto.id} />))
        : <p>Cargando productos...</p>
      }
    </>
  );
}

export default ItemList;
