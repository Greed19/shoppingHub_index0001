import React from 'react';

import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';

import styles from './footer.module.scss';

const Footer = () => {
  const contact = {
    tel: '678 004 5754',
    email: 'info@shophub.com'
  }
  return (
    <section className={styles.footer_container}>
      <ul className={styles.link}>
        <h6 className={styles.title}>Links</h6>
        <li className={styles.link_item}>About Us</li>
        <li className={styles.link_item}>Contact Us</li>
        <li className={styles.link_item}>Blog</li>
        <li className={styles.link_item}>FAQ's</li>
      </ul>
      <ul className={styles.link}>
        <h6 className={styles.title}>Policies</h6>
        <li className={styles.link_item}>Terms & Conditions</li>
        <li className={styles.link_item}>Cookies Policy</li>
        <li className={styles.link_item}>Data Policy</li>        
      </ul>
      <ul className={styles.link}>
        <h6 className={styles.title}>About Shopping Hub</h6>
        <li className={styles.link_item}>Company Info</li>
        <li className={styles.link_item}>Branches</li>
        <li className={styles.link_item}>Store</li>        
      </ul>
      <ul className={styles.link}>
        <h6 className={styles.title}>Contact</h6>
        <li className={styles.link_item}>
          <BsFillTelephoneFill className={styles.tel}/> +{contact.tel}
        </li>
        <li className={styles.link_item}>
          <MdEmail className={styles.email}/>  {contact.email}
        </li>

      </ul>
    </section>
  )
}

export default Footer