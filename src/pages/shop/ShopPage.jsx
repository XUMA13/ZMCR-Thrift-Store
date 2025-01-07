import React, { useState, useEffect } from 'react';
import productsData from '../../data/products.json';
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';

const filters = {
    categories: ['all', 'dress', 'boyswear', 'kidswear', 'seasonal'],
    colors: ['all', 'black', 'white', 'gold', 'blue', 'red', 'beige', 'grey'],
    priceRanges: [
        { label: 'Under ৳500', min: 0, max: 500 },
        { label: '৳500 - ৳1000', min: 500, max: 1000 },
        { label: '৳1000 - ৳5000', min: 1000, max: 5000 },
        { label: '৳5000 and above', min: 5000, max: Infinity },
    ]
}

const ShopPage = () => {
    const [filtersState, setFiltersState] = useState({
        category: 'all',
        color: 'all',
        priceRange: '',
    });

    const [currentPage, setCurrentPage] = useState(1)
    const [ProductsPerPage] = useState(8);

    const{ category, color, priceRange} = filtersState;
    const [minPrice, maxPrice] = priceRange.split('-').map(Number);

    const {data: {products = [], totalPages, totalProducts} = {}, error, isLoading} =
        useFetchAllProductsQuery({
        category: category !== 'all' ? category: '',
        color: color !== 'all' ? color: '',
        minPrice: isNaN(minPrice) ? '' : minPrice,
        maxPrice: isNaN(maxPrice) ? '' : maxPrice,
        page: currentPage,
        limit: ProductsPerPage,
    });


    // useEffect(() => {
    //     let filteredProducts = productsData;

    //     if (filtersState.category !== 'all') {
    //         filteredProducts = filteredProducts.filter(product => product.category.toLowerCase() === filtersState.category.toLowerCase());
    //     }

    //     if (filtersState.color !== 'all') {
    //         filteredProducts = filteredProducts.filter(product => product.color.toLowerCase() === filtersState.color.toLowerCase());
    //     }

    //     if (filtersState.priceRange) {
    //         const [min, max] = filtersState.priceRange.split('-').map(Number);
    //         filteredProducts = filteredProducts.filter(product => product.price >= min && product.price <= max);
    //     }

    //     setProducts(filteredProducts);
    // }, [filtersState]);

    // clear the filters
    const clearFilters = () => {
       setFiltersState({
          category: 'all',
          color: 'all',
          priceRange: '' // Assuming priceRange is a string, adjust if needed
        });
           };
    // handle page change
    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
        }
    };

        if(isLoading) return <div>Loading....</div>
        if(error) return <div>Error loading products.</div>

        const startProduct = (currentPage - 1) * ProductsPerPage + 1;
        const endProduct = startProduct + products.length - 1;

      
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
                    <ShopFiltering 
                        filters={filters} 
                        filtersState={filtersState}
                        setFiltersState={setFiltersState}
                        clearFilters={() => setFiltersState({ category: 'all', color: 'all', priceRange: '' })}
                    />
                   

                    {/* Rightside */}
                    <div>
                        <h3 className='text-xl font-medium mb-4'>
                            Showing{startProduct} to {endProduct}of {totalProducts} products
                            </h3>
                        <ProductCards products={products} />
                        <div className='mt-6 flex justify-center'>
                        <button 
                        disabled={currentPage===1}
                        onClick={() => handlePageChange(currentPage-1)}
                        className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2'>Previous</button>
                        {
                        [...Array(totalPages)].map((_, index) => (
                            <button
                            key={index}
                            onClick={()=> handlePageChange(index+1)}
                            className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                            rounded-md mx-1
                            >
                            {index + 1}
                            </button>
                        ))
                        }
                        <button 
                         disabled={currentPage===totalPages}className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2'>Next</button>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}

export default ShopPage;