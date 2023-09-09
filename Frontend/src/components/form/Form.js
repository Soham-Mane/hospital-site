import React, { useState } from 'react'
import photo from "../../images/Rectangle 33.png";
import styles from "./Form.module.css"
const Form = () => {
    const [name,setName]=useState('');
    const [gender,setGender]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [department,setDepartment]=useState('');
    const [doctor,setDoctor]=useState('');
    const [date,setDate]=useState();
    const [time,setTime]=useState();

    const submitHandler=(e)=>{
        e.preventDefault();
        const form=document.getElementById('formdata');
        const formData=new FormData(form);

        var requestOptions={
            method: 'POST',
            body: formData,
            redirect: 'follow'
        };

        fetch("https://5343-2401-4900-1d35-4206-d127-976f-2c6b-b43e.ngrok-free.app/api/send_email/", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
    
          if (result.success) {
            // Update the active tab to the sign-in tab
            alert("Data submitted successfully")          }
         else if(result.message){
          alert("Username already exists")
         }
          else {
            // Handle the case when the backend request was not successful
            // For example, show an alert to inform the user about the issue
            alert("Failed to send Data. Please try again.")
          }
    
         
        })
        .catch(error => console.log('error', error));

console.log(name,gender,email,phone,department,doctor,date,time)
    }

    
  return (
    <>

    <div className={styles.container} >  
    </div>
    
    <div className={styles.leftChild}>
    <span>Book an Appointment</span>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</span>
           </div>
           <div className={styles.rightChild}>
           <form id="formdata" onSubmit={submitHandler} className={styles.form}>
        <div className={styles.inputRow}>
            <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)} placeholder="Name" style={{ color: 'white' }} />
            <input type="text" value={gender} name="gender" onChange={(e)=>setGender(e.target.value)} placeholder="Gender" style={{ color: 'white' }} />
        </div>
        <div className={styles.inputRow}>
            <input type="text" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" style={{ color: 'white' }} />
            <input type="tel" value={phone} name="phone" onChange={(e)=>setPhone(e.target.value)} placeholder="Phone" style={{ color: 'white' }} />
        </div>
        <div className={styles.inputRow}>
      
            <input type="date" value={date} name="date" onChange={(e)=>setDate(e.target.value)} placeholder="Date" style={{ color: 'white' }} />
            <input type="time" value={time} name="time" onChange={(e)=>setTime(e.target.value)} placeholder="Time" style={{ color: 'white' }} />
        </div>
        <div className={styles.inputRow}>
            <input type="text" value={doctor} name="doctor" onChange={(e)=>setDoctor(e.target.value)} placeholder="Doctor" style={{ color: 'white' }} />
            <input type="text" value={department} name="department" onChange={(e)=>setDepartment(e.target.value)} placeholder="Department"  style={{ color: 'white' }}/>
        </div>

        <button className={styles.btns}>Submit</button>

    </form>

           </div>
              </>
  )
}

export default Form