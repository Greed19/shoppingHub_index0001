import React from 'react';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import Singleproduct from '../SingleProduct/Singleproduct';

import { STATUS } from '../../utils/status';
import {useDispatch, useSelector} from 'react-redux';
import {setModalData,setIsModalVisible} from '../../slice/modalSlice';
import { formatPrice } from '../../utils/helpers';
import styles from './singlecategory.module.scss';
import GridProducts from '../GridProducts/GridProducts';

const Singlecategory = ({product,status}) => {
  const dispatch = useDispatch()
  const {isModalVisible} = useSelector((state) => state.modal)

  const handleModalVisible = (data) => {
    dispatch(setModalData(data))
    dispatch(setIsModalVisible(true))
  }

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

      {/* <div className={styles.single_cat_map_container}>
        {
          product.map((single,sIndex) => (
            <div className={styles.product_item} onClick={() => handleModalVisible(single)}>
              <img className={styles.single_item_img} src={single.images[0]} alt='item' />
              <div className={styles.item_cat_name}>{single.category.name}</div>
              <h6 className={styles.item_name}>{single.title}</h6>
              <h5 className={styles.item_price}>{formatPrice(single.price)}</h5>
            </div>

          ))
        }
      </div> */}