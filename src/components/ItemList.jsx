import Item from './Item';

function ItemList({ items }) {
  return (
    <>
      {
        items.map(producto => (
            <Item item={producto} />
        ))
      }
    </>
  );
}

export default ItemList;
