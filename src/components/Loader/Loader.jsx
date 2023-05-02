import React from 'react';

import {loader} from '../../utils/images'
import styles from './loader.module.scss';

const Loader = () => {
  return (
    <section className={styles.loader_container}>
      <img className={styles.loader_img} src={loader} alt="" />
    </section>
  )
}

export default Loader