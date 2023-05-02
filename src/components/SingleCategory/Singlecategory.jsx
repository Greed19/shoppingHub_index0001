import React from 'react';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import Singleproduct from '../SingleProduct/Singleproduct';

import { STATUS } from '../../utils/status';
import {useSelector} from 'react-redux';
import styles from './singlecategory.module.scss';
import GridProducts from '../GridProducts/GridProducts';

const Singlecategory = ({product,status}) => {
  const {isModalVisible} = useSelector((state) => state.modal)


  if(status === STATUS.ERROR) return (<Error/>);
  if(status === STATUS.LOADING) return (<Loader/>);  
  return (
    <section className={styles.single_category_main_container}>
      {
        isModalVisible && <Singleproduct product={product} />
      }
      <h3 className={styles.singe_cat_title}>
      {product[0].category.name}
      </h3>
      <GridProducts product={product}/>

    </section>
  )
}

export default Singlecategory;