import React from 'react';

// helpers
import {useSelector} from 'react-redux';
import {STATUS} from '../../utils/status';

// components
import Singleproduct from '../SingleProduct/Singleproduct';
import GridProducts from '../GridProducts/GridProducts';
import Error from '../Error/Error'; 
import Loader from '../Loader/Loader';

// scss
import styles from './product.module.scss';

const Productlist = ({product, status}) => {
const {isModalVisible} = useSelector((state) => state.modal)


if(status === STATUS.LOADING) return (<Loader/>)
if(status === STATUS.ERROR) return (<Error/>)

  return (
    <section className={styles.productlist_main_container}>
      {
        isModalVisible && <Singleproduct product={product} />
      }
      <h3 className={styles.product_list_title}>Our Products</h3>
      <GridProducts product={product} />

    </section>
  )
}

export default Productlist
