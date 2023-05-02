import React from 'react'

import styles from './error.module.scss';
import { alert } from '../../utils/images';

const Error = () => {
  return (
    <section className={styles.error_container}>
      <img src={alert} alt="" />
    </section>
  )
}

export default Error;