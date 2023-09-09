import React from 'react';
import styles from "./welcome.module.css";
import arrow from "../../images/Vector (1).png";
import goodone from "../../images/Group 183.png";
const Welcome = () => {
  return (
    <>
    <div className={styles.container}> 
    <div className={styles.mainDiv}>
        <span>Welcome to Meddical</span>
        <span>A Great Place to Receive Care</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</span>
        <span>Learn More <img src={arrow}/></span>
        </div>
        <img src={goodone} />
    </div>

    </>
    
  )
}

export default Welcome