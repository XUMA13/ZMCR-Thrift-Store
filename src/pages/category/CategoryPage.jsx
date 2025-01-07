import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import products from "../../data/products.json"
import { useState } from 'react';
import ProductCards from '../shop/ProductCards';

const CategoryPage = () => {
    const{categoryName} = useParams();
    console.log(categoryName)
    const [filteredProduct,setfilteredProduct] = useState([]);

    useEffect(() =>
    {
        const filtered = products.filter(product => product.category === categoryName.toLowerCase());
        setfilteredProduct(filtered);
    } ,[categoryName])

    useEffect(() =>
    {
        window.scrollTo(0, 0);
    },[]);
  return (
    <>
    <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>{categoryName}</h2>
        <p className='section__subheader'>
            Find the best {categoryName} products here.
        </p>

    </section>
     {/* Product cards */}

     <div className='section__container'>
        <ProductCards products ={filteredProduct}/>
     </div>

    </>
  );
}

export default CategoryPage