import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { fetchCategories } from '../../slice/categorySlice';
import { getCartTotal } from '../../slice/cartSlice';

import {BiSearchAlt} from 'react-icons/bi';
import {AiOutlineShoppingCart,AiOutlineCloseCircle,AiOutlineMenu} from 'react-icons/ai';
import classnames from 'classnames';
import styles from './navbar.module.scss';

const Navbar = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {data: categories} = useSelector((state) => state.category);
  const {totalItems} = useSelector((state) => state.cart)  
  const handleNavigate = (item) => {
    const {id,name} = item
    navigate(`category/${id}`)
    localStorage.setItem('catName', name)
  }
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getCartTotal())
  },[dispatch])
  
  return (
    <section className={styles.header_section}>
      <header className={styles.header_container}>
          <Link to='/' >
            <span className={`${styles.title_blue} ${styles.shop_title}`}>Shopping</span>
            <span className={`${styles.title_gold} ${styles.shop_title}`}>Hub.</span>
          </Link>
          <form
            className={styles.form_search}
            action="">
            <input
              className={styles.search} 
              type="text" 
              placeholder='Search here'
              />
              <button className={styles.search_btn}>
                <BiSearchAlt className={styles.search_icon}/>
              </button>
          </form>
          <div className={styles.cart_container}>
            <AiOutlineShoppingCart className={styles.cart_icon}/>
            <div className={styles.cart_text} onClick={() => navigate('/cart')}>Cart        
              <span className={styles.cart_quantity}>{totalItems}</span>
            </div>
          </div>
      </header>
      <nav className={styles.nav_links_container}>
          <ul className={classnames(styles.nav_links_list,{
            [styles.show_modal] : isSidebarOpen
          })}>
            <button className={styles.close} onClick={() => setIsSidebarOpen(false)}>
              <AiOutlineCloseCircle className={styles.close_icon}/>
            </button>
            {
              categories.map((item,cNdx) => (
                <li key={item.id} className={styles.navlink}>
                  {/* <Link to={`category/${item.id}`} className={styles.map_link}>{item.name}</Link> */}
                  <div onClick={() => handleNavigate(item) } className={styles.map_link}>{item.name}</div>
                </li>
              ))
            }
          </ul>
          <button className={styles.nav_icon_container} onClick={() => setIsSidebarOpen(true)}>
            <AiOutlineMenu className={styles.nav_icon}/>
          </button>
      </nav>
    </section>
      
  )
}

export default Navbar