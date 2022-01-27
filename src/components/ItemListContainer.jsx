import ItemCount from './ItemCount';

function showCartCount(varCount){
    alert(varCount);
}

function ItemListContainer(props) {
  return (
    <>
        <h3 className="ml-1 mt-2"> {props.greeting} </h3>
        <ItemCount stock="5" initial="1" onAdd={showCartCount}/>
    </>
  );
}


export default ItemListContainer;