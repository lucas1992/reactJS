import ItemCount from './ItemCount';

function ItemListContainer(props) {
  return (
    <>
        <h3 className="ml-1 mt-2"> {props.greeting} </h3>
        <ItemCount />
    </>
  );
}

export default ItemListContainer;