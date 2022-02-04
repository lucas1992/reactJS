import Item from './Item';

function ItemList({ items }) {
  return (
    <>
      {
        items.map(producto => (
            <Item item={producto} key={producto.id} />
        ))
      }
    </>
  );
}

export default ItemList;
