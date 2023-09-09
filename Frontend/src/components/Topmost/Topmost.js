import React from 'react'
import styles from "./Topmost.module.css";
import emergency from "../../images/Group 8.png";
import location from "../../images/Group 12.png"
import work from "../../images/Group 11.png"
const Topmost = () => {
  return (
    <>
 <div className={styles.container}>
 <div className={styles.logo}><span>MED</span><span>DICAL</span></div>
 <div className={styles.images}>
    <img src={emergency}/>
    <img src={work}/>
    <img src={location}/>
 </div>
 </div>

    </>
  )
}

export default Topmost
