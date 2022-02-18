import ItemList from './ItemList';
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ItemListContainer(props) {

  const [productos, setProdutos] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
        let filtered_products = props.items.filter(prod => prod.category.id === parseInt(categoryId));
        ((filtered_products.length) ? setProdutos(filtered_products) : setProdutos(props.items));
  }, [categoryId, setProdutos, props])

  return (
    <>
        <section id="section-products-list">
            <div className="flex-container">
                <ItemList items={productos} />
            </div>
        </section>
    </>
  );
}


export default ItemListContainer;