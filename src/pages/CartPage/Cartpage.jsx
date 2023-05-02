import React  from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  clearCart } from '../../slice/cartSlice';
import CartItem from './CartItem/CartItem';
import Cartreceipt from './CartItem/Cartreceipt';

import {BsCaretRightFill} from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai'
import styles from './cartpage.module.scss';
import classNames from 'classnames';

const Cartpage = () => {
  const dispatch = useDispatch();
  const {data:cartProducts,totalItems, deliveryCharge} = useSelector((state) => state.cart)
  const emptyCartMsg = 'No Items Found!';  
  return (
    <section className={styles.cart_page_section}>
      <nav className={styles.nav_locator}>
        <span className={styles.home_btn} >
          <Link to='/'>
            <AiFillHome className={styles.icon_home} />
          </Link>
        </span>
        <span>
            <BsCaretRightFill  className={styles.right_arrow} />
        </span>
        <span className={styles.nav_name}>          
          Cart
        </span>
      </nav>
      <div className={styles.cart_container}>
        <ul className={styles.list_container}>
          <h4 className={styles.my_cart_title}>My Cart</h4>
          {
            cartProducts.length === 0 ?  emptyCartMsg 
            :
            (
              cartProducts.map((item, index) => (
                
                <CartItem  
                  key={`${item.payload.title}`} 
                  item={item.payload}
                  />
              ))
            )
          }
          <button className={classNames(styles.clearBtn,{
            [styles.off] : false
          })}
          onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </ul>
        {
          cartProducts.length > 0 ? <Cartreceipt cartProducts={cartProducts} deliveryCharge={deliveryCharge} totalItems={totalItems} /> : null
        }
      </div>
    </section>
  )
}

export default Cartpage