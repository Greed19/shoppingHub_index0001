import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useLocation,Link } from 'react-router-dom';

import GridProducts from '../../components/GridProducts/GridProducts';
import Singleproduct from '../../components/SingleProduct/Singleproduct';
import { STATUS } from '../../utils/status';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { fetchCategories, fetchProductsByCategory } from '../../slice/categorySlice';
import { fetchProducts } from '../../slice/productSlice';
import {AiFillHome} from 'react-icons/ai';
import {BsCaretRightFill} from 'react-icons/bs';
import styles from './categorypage.module.scss';

const CategoryPage = () => {
const dispatch = useDispatch();
const location = useLocation();
const {categoryProductAll: productsByCategory,categoryProductAllStatus :catProductAllStatus} = useSelector((state) => state.category);
const {isModalVisible} = useSelector((state) => state.modal);
const tempUrl = location.pathname.split('/')
const tempId = tempUrl[tempUrl.length-1]
const [usedId , setUsedId] = useState(tempId)
const [path, setPath] = useState(localStorage.getItem('catName'))
const catMap = productsByCategory[usedId - 1]
useEffect(() => {
  dispatch(fetchCategories())
  dispatch(fetchProducts())
  dispatch(fetchProductsByCategory(1,'all'));
  dispatch(fetchProductsByCategory(2,'all'));
  dispatch(fetchProductsByCategory(3,'all'));
  dispatch(fetchProductsByCategory(4,'all'));
  dispatch(fetchProductsByCategory(5,'all'));
  setUsedId(tempId)
  setPath(localStorage.getItem('catName'))
},[location.pathname])
// useEffect(() => {
//   const newUrl = location.pathname.split('/')
//   const newId = newUrl[newUrl.length-1]
//   setUsedId(newId)
// },[location.pathname])

if(catProductAllStatus === STATUS.LOADING || productsByCategory.length < 1 ) return (<Loader/>)
if(catProductAllStatus === STATUS.ERROR || productsByCategory.length < 1 ) return (<Error/>)
  return (
    <section className={styles.category_main_container}>
        <nav className={styles.nav_locator}>
          <span className={styles.home_btn}>
            <Link to='/'>
              <AiFillHome className={styles.icon_home} />
            </Link>
          </span>
          <span>
              <BsCaretRightFill  className={styles.right_arrow} />
          </span>
          <span className={styles.nav_name}>          
            {path}
          </span>
      </nav>
      {/* <h3 className={styles.title}>{catMap[1]?.category.name}</h3> */}
      <h3 className={styles.title}>{path}</h3>
      {
        isModalVisible && <Singleproduct product={catMap} />
      }
      <GridProducts product={catMap} />

    </section>
  )
}

export default CategoryPage;