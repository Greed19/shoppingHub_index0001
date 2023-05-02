import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setModalData,setIsModalVisible } from '../../slice/modalSlice';

import { formatPrice } from '../../utils/helpers';
import styles from './grid.module.scss';


const GridProducts = ({product}) => {

    const dispatch = useDispatch();
    const handleModalVisible = (product) => {
        dispatch(setModalData(product))
        dispatch(setIsModalVisible(true))
        }

    return (
        <div className={styles.grid_map}>
            {
                product.map((single,sIndex) => (
                    <div 
                        key={`${single} ${sIndex}`} 
                        className={styles.grid_item} 
                        onClick={() => handleModalVisible(single)}
                    >
                            <img className={styles.grid_img} src={single.images[0]} alt='item' />
                            <div className={styles.grid_name}>{single.category.name}</div>
                            <h6 className={styles.grid_title}>{single.title}</h6>
                            <h5 className={styles.grid_price}>{formatPrice(single.price)}</h5>
                    </div>
                ))
            }
        </div>
  )
}

export default GridProducts