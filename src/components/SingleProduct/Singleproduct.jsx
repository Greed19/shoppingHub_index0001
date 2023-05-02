import React, { useState } from 'react';
import { formatPrice } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setIsModalVisible } from '../../slice/modalSlice';
import { addToCart } from '../../slice/cartSlice';
// scss
import {AiFillCloseCircle} from 'react-icons/ai';
import {GrAdd,GrSubtract} from 'react-icons/gr';
import {FaShoppingCart} from 'react-icons/fa'
import classNames from 'classnames';
import styles from './singleproduct.module.scss';

const Singleproduct = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {data: modalData, isModalVisible} = useSelector((state) => state.modal)  
  const handleCloseModal = () => {
    dispatch(setIsModalVisible(false))
  }
  const [qty, setQty] = useState(1)
  
  const increaseQty = () => {
    // setQty(prevQty => prevQty += 1)
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty
    })
  }
  const decreaseQty = () => {
    // setQty(prevQty => qty > 1 ? (prevQty -= 1) : prevQty = 1)
    setQty((prevQty) => {
      let newQty = prevQty -1;
      if(newQty < 1){
        newQty = 1
      }
      return newQty
    })

  }
  const addToCartHandler = (modalData) => {
    let totalPrice = qty * modalData.price;
    const tempCart = {
      ...modalData,
      quantity: qty,
      totalPrice  
    }
    dispatch(addToCart(tempCart));
    dispatch(setIsModalVisible(false));
    navigate('/cart');
  }


  return (
    <section className={styles.single_modal_container}>
      <div className={styles.modal_container}>
      <AiFillCloseCircle className={styles.closeBtn} onClick={() => handleCloseModal()}/>
        <aside className={styles.left_modal}> 
          <img className={styles.single_img} src={modalData.images[0]} alt="" />
        </aside>
        <aside className={styles.right_modal}>
          <h4 className={styles.modal_title}>{modalData.title}</h4>
          <p className={styles.modal_desc}>{modalData.description}</p>
          <h4 className={styles.modal_price}>Price: {formatPrice(modalData.price)}</h4>
          <div className={styles.modal_line}></div>
          <div className={styles.modal_qty}>
            QTY:
            <button className={classNames(styles.btn_qty,{
              [styles.deactivate] : qty === 1
            })}
            onClick={() => decreaseQty()}
            >
              <GrSubtract className={styles.minus}/>
            </button>
            {qty}
            <button className={styles.btn_qty} onClick={() => increaseQty()}>
              <GrAdd className={styles.add}/>
            </button>
          </div>
          <button className={styles.add_to_cart} onClick={() => addToCartHandler(modalData)}>
            <FaShoppingCart className={styles.modal_cart}/>
            Add To Cart
          </button>
        </aside>
      </div>
    </section>
  )
}

export default Singleproduct