import React from 'react'
import styles from "./Contact.module.css"
import location from "../../images/Group 77 (3).png";
import working from "../../images/Group 77 (2).png";
import email from "../../images/Group 77 (1).png";
import emer from "../../images/Group 77.png";
const Contact = () => {
  return (
    <div className={styles.main}>
    <div className={styles.container}>
      <span>Get In Touch</span>
      <span>Contact</span>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
        <img src={emer} />
        </div>
        <div className={styles.box} style={{backgroundColor: '#1F2B6C'}}>
        <img src={location} />
      
        </div>
        <div className={styles.box}>
          <img src={working} />
        </div>
        <div className={styles.box}>
          <img src={email} />
        </div>
      </div>
    </div>

    </div>
  )
}

export default Contact