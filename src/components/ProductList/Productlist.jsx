import React from 'react';

// helpers
import {useDispatch, useSelector} from 'react-redux';
import { setModalData, setIsModalVisible } from '../../slice/modalSlice';
import { formatPrice } from '../../utils/helpers';
import {STATUS} from '../../utils/status';

// components
import Singleproduct from '../SingleProduct/Singleproduct';
import GridProducts from '../GridProducts/GridProducts';
import Error from '../Error/Error'; 
import Loader from '../Loader/Loader';

// scss
import styles from './product.module.scss';

const Productlist = ({product, status}) => {

const dispatch = useDispatch();
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


      {/* <div className={styles.product_list_map}>
        {
            product.map((single,sIndex) => (
              <div className={styles.productlist_item} onClick={() => handleModalVisible(single)}>
                <img className={styles.productlist_img} src={single.images[0]} alt='item' />
                <div className={styles.productlist_name}>{single.category.name}</div>
                <h6 className={styles.productlist_title}>{single.title}</h6>
                <h5 className={styles.productlist_price}>{formatPrice(single.price)}</h5>
              </div>
            ))
          }
      </div> */}