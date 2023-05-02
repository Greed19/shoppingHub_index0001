import React, { useState } from 'react';
import { formatPrice } from '../../../utils/helpers';

import styles from './cartreceipt.module.scss'

const Cartreceipt = ({cartProducts,deliveryCharge,totalItems}) => {
  const tempTotal = cartProducts.map((item) => {
    return item.payload.totalPrice
  })
  const grandTotal = tempTotal.reduce((total, item) => {
    return total + item
  },0)
  return (
    <aside className={styles.receipt_container}>
    <h4 className={styles.order_summary}>Order Summary</h4>
    <div className={styles.details_container}>
      <p className={styles.order_details}>
        Selected {totalItems} {totalItems === 1 ? 'item' : 'items' } Price
        <span className={styles.price_details}>{formatPrice(grandTotal)}</span>
      </p>
      <p className={styles.order_details}>
        Discount
        <span className={styles.price_details}>- {formatPrice(0.00)}</span>
      </p>
      <p className={styles.order_details}>
        Delivery Cost
        <span className={styles.price_details}>+ {formatPrice(deliveryCharge)}</span>
      </p>
    </div>
    <div className={styles.proceed_container}>
      <p className={styles.totaldet}>
          Grand Total:
        <span className={styles.total}>{formatPrice(grandTotal + deliveryCharge)}</span>
      </p>
      <button className={styles.btn_proceed}>Proceed to Checkout</button>
    </div>

  </aside>
  )
}

export default Cartreceipt