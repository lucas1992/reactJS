import ItemList from './ItemList';
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchItems from "../../utils/firebase/fetch";

function ItemListContainer(props) {

  const [productos, setProdutos] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
        fetchItems()
            .then (items => {
                let filtered_products = items.filter(prod => prod.category.id === parseInt(categoryId));
                ((filtered_products.length) ? setProdutos(filtered_products) : setProdutos(items));
            })
            .catch(error => console.log(error));
  }, [categoryId, setProdutos])

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