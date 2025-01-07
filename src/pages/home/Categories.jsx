import React from 'react'
import category1 from"../../assets/category-1.jpg"
import category2 from"../../assets/category-2.jpg"
import category3 from"../../assets/category-3.jpg"
import category4 from"../../assets/category-4.jpg"
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = [
        {name:"Women's Collection",path:'dress', inage:category1},
        {name:"Men's Collection",path:'boyswear', inage:category2},
        {name:"Kid's Collection",path:'kidswear', inage:category3},
        {name:"Seasonal & Occasion Wear",path:'seasonal', inage:category4},
    ]
  return (
    <>
    <div className='product__grid'>
        {
            categories.map((category)=>(
                <Link key={category.name} to={`/categories/${category.path}`} 
                className='categories__card' >
                    <img src = {category.inage} alt={category.name}/>
                    <h4>{category.name}</h4>
                
                </Link>
            ))
        }

        
    </div>
    </>
  )
}

export default Categories