import React from 'react'
import styles from "./Special.module.css";
import heart from "../../images/Vector (2).png";

const Special = () => {
  return (

    <div className={styles.container}>
<div  className={styles.main}>
<div className={styles.text}>
    <span>Always Caring</span>
    <span>Our Specialties</span>
</div>
<div className={styles.boxContainer}>
    <div className={styles.box}>
        <img src={heart} alt="" />
        Bones</div>
    <div className={styles.box}>
        <img src={heart} alt="" />
        Oncology</div>
    <div className={styles.box}>
        <img src={heart} alt="" />
        Neurology</div>
    <div className={styles.box}>
        <img src={heart} alt="" />
        Otorhinolaryngology</div>
    <div className={styles.box}>
        <img src={heart} alt="" />
        Ophthalmology</div>
    <div className={styles.box}>
        <img src={heart} alt="" />
        Cardiovascular</div>
    <div className={styles.box}>
        <img src={heart} alt="" />
        Pulmonology</div>
    <div className={styles.box}>
        <img src={heart} alt="" />
        Renal Medicine</div>
    <div className={styles.box}>
        <img src={heart} alt="" />
        Gastroenterology</div>
    <div className={styles.box}>
        <img src={heart} alt="" />
        Urology</div>
    <div className={styles.box}>
        <img src={heart} alt="" />
        Dermatology</div>
    <div className={styles.box}>
        <img src={heart} alt="" />
        Gynaecology</div>
</div>
</div>
    </div>
  )
}

export default Special