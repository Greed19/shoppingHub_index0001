import React from 'react';
import { STATUS } from '../../utils/status';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';


import styles from './Category.module.scss';

const Category = ({categories,status}) => {
  const newCat = categories.slice(0,5)
  if(status === STATUS.ERROR) return (<Error/>)
  if(status === STATUS.LOADING) return (<Loader/>)
  
  return (
    <section className={styles.category_main_container}>
      <h3 className={styles.title}>Category</h3>
      <div className={styles.cat_container}>
        <div className={styles.categories_map}>
          {
            newCat.map((item,cNdx) => (
              <div key={`${item.id} ${cNdx} `} className={styles.category_container}>
                <img className={styles.cat_img} src={item.image} alt="" />
                <span className={styles.category_name}>{item.name}</span>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Category;


// {
//   newCat.map((category,cNdx) => (
//     <Link to={`category/${category.id}`} key={`${cNdx}`}>
//       <div className={styles.category_container}>
//         <img className={styles.category_img} src={category.category.image} alt='image/category' />
//         <h5 className={styles.categoryname}>{category.category.name}</h5>
//       </div>
//     </Link>
//   )) 
// }