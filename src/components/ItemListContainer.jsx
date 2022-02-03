import ItemList from './ItemList';
import './ItemListContainer.css';

function showCartCount(varCount){
    alert(varCount);
}

function ItemListContainer(props) {
  return (
    <>
        <section id="section-products-list">
            <div className="flex-container">
                <ItemList items={props.items} />
            </div>
        </section>
    </>
  );
}


export default ItemListContainer;