import React, { useState, useEffect } from 'react';
import productsData from '../../data/products.json';
import ProductCards from './ProductCards';
import ShopFiltring from './ShopFiltring';

const filters = {
    categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics'],
    colors: ['all', 'black', 'red', 'gold', 'blue', 'silver', 'beige', 'green'],
    priceRanges: [
        { label: 'Under $50', min: 0, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
        { label: '$100 - $200', min: 100, max: 200 },
        { label: '$200 and above', min: 200, max: Infinity },
    ]
}

const ShopPage = () => {
    const [products, setProducts] = useState(productsData);
    const [filtersState, setFiltersState] = useState({
        category: 'all',
        color: 'all',
        priceRange: '',
    });

    useEffect(() => {
        let filteredProducts = productsData;

        if (filtersState.category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category.toLowerCase() === filtersState.category.toLowerCase());
        }

        if (filtersState.color !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.color.toLowerCase() === filtersState.color.toLowerCase());
        }

        if (filtersState.priceRange) {
            const [min, max] = filtersState.priceRange.split('-').map(Number);
            filteredProducts = filteredProducts.filter(product => product.price >= min && product.price <= max);
        }

        setProducts(filteredProducts);
    }, [filtersState]);

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Shop Page</h2>
                <p className='section__subheader'>
                    Shop the best products here.
                </p>
            </section>

            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
                    {/* Leftside */}
                    <ShopFiltring 
                        filters={filters} 
                        filtersState={filtersState}
                        setFiltersState={setFiltersState}
                        clearFilters={() => setFiltersState({ category: 'all', color: 'all', priceRange: '' })}
                    />

                    {/* Rightside */}
                    <div>
                        <h3 className='text-xl font-medium mb-4'>Available Products {products.length}</h3>
                        <ProductCards products={products} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default ShopPage;