import React, { useEffect, useRef, useState } from 'react';
import styles from './slider.module.scss';
import {img1,img2,img3} from '../../utils/images'

const Slider = () => {
    const bannerArr = [img1,img2,img3]
    const [count,setCount] = useState(0)
    const moveRef = useRef(null)

    useEffect(() => {        
        const bannerTimer = setInterval(() => {
            const bannerWidth = +count * +moveRef.current.children[0].offsetWidth;
            if(count < bannerArr.length - 1){
                setCount(prev => prev + 1)               
            }else if (count >= bannerArr.length -1 ){
                setCount(0)
            }
            moveRef.current.style.transform = `translateX(-${bannerWidth}px)`;        
        },1000)

        return () => {
            clearInterval(bannerTimer)
        }
    },[count])

  return (
    <section className={styles.slider_container}>
        <div className={styles.banner_container} ref={moveRef}>
            {
                bannerArr.map((banner,bNdx) => (
                    <img  key={bNdx} className={styles.banner} src={banner} alt={`banner-${bNdx}`}/>
                ))
            }
        </div>
    </section>
  )
}

export default Slider;