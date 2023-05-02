import React, { useEffect, useState } from 'react';
import {RiSubtractFill} from 'react-icons/ri';
import {AiOutlinePlus,AiFillDelete} from 'react-icons/ai';
import { formatPrice } from '../../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './cartitem.module.scss';
import { removeFromCart, toggleCartQty } from '../../../slice/cartSlice';

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const {title,price,images, quantity,id,totalPrice} = item;      
    return (
        <section className={styles.cart_item_container}>
            <div className={styles.img_container}>
                <img className={styles.item_cart_img} src={images} alt="" />
                <button className={styles.delete}
                    onClick={() => dispatch(removeFromCart(id))}
                >
                <AiFillDelete className={styles.icon_delete} />
                </button>
            </div>
            <div className={styles.cart_item_details}>
                <h6 className={styles.item}>{title}</h6>
                <div className={styles.order}>
                    Qty:
                    <button className={classNames(styles.btn,{
                        [styles.inactive] : false
                    })}
                    onClick={() => dispatch(toggleCartQty({id:id,type:'DEC'}))}
                    >
                        <RiSubtractFill />
                    </button>
                        {quantity}
                    <button className={classNames(styles.btn,{
                    })}
                    onClick={() => dispatch(toggleCartQty({id:id,type:'INC'}))}
                    >
                        <AiOutlinePlus />
                    </button>
                </div>
                <p className={styles.item_price}>
                Price: {formatPrice(price)}
                    <span className={styles.total}>
                        Subtotal: {formatPrice(totalPrice)}
                    </span>
                </p>
                
            </div>
            {/* <div className={styles.subTotal}>
                Subtotal: 
            </div> */}
        </section>
    )
}

export default CartItem;