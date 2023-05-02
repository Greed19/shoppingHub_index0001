import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
//category
import { fetchCategories, fetchProductsByCategory } from '../../slice/categorySlice';
// product
import { fetchProducts } from '../../slice/productSlice';
// components
import Slider from '../../components/Slider/Slider';
import Category from '../../components/Category/Category.jsx';
import Singlecategory from '../../components/SingleCategory/Singlecategory';
import Productlist from '../../components/ProductList/Productlist';

import styles from './homepage.module.scss';

const HomePage = () => {
  const dispatch = useDispatch()
  const {data: categories, status: categoryStatus} = useSelector((state) => state.category)
  const {categoryProductAll : productsByCategory, categoryProductAllStatus :catProductAllStatus} = useSelector((state) => state.category)

  const {data: product, status: productStatus} = useSelector((state) => state.product)
    
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProducts())
    dispatch(fetchProductsByCategory(1,'all'));
    dispatch(fetchProductsByCategory(2,'all'));
    dispatch(fetchProductsByCategory(3,'all'));
    dispatch(fetchProductsByCategory(4,'all'));
    dispatch(fetchProductsByCategory(5,'all'));
  },[])


  return (
    <section className={styles.homepage_container}>
      <Slider />
      <Category categories={categories} status={categoryStatus}/>
      <Productlist product={product} status={productStatus} />
      {
        categories.map((item,index) => (
            productsByCategory[index] && <Singlecategory key={`${item} ${index}`} 
              product={ productsByCategory[index]}
              status={catProductAllStatus}
              />
          
        ))
      }

    </section>
  )
}

export default HomePage;



// {
//   productsByCategory[0] && <Singlecategory 
//     product={ productsByCategory[0]}
//     status={catProductAllStatus}
//     />
// }