import React from 'react'
import styles from "./main.module.css";
import ell1 from "../../images/Ellipse 1 (1).png";
import ell2 from "../../images/Ellipse 2.png"
import doctor from "../../images/portrait-mature-male-doctor-wearing-white-coat-standing-hospital-corridor_562859-3453.avif"
const Main = () => {
  return (
    <>
<div className={styles.mainDiv} style={{backgroundImage: `url(${doctor})`, backgroundSize: '100% 100%'}} >
  <img src={ell2} alt="" className={styles.ell2}/>
<img src={ell1} className={styles.ell1} />
            <div className={styles.content}>
                <span className={styles.smallText}>CARING FOR LIFE</span>
                <div className={styles.div}>
                <span className={styles.mainText}>Leading the Way </span>  
                <span className={styles.mainText}>in Medical Excellence  </span>
                </div>
              <button className={styles.btn}>Our Services</button>        
</div>
    </div>


    </>
   
  )
}

export default Main