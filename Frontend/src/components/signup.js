import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import LandingPage from './LandingPage';

function Signup() {
  const [loggedIn ,setLoggedIn]=useState(false);
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');
const [gender,setGender]=useState('');
const [age,setAge]=useState('');
const [phone,setPhone]=useState('');
const [address,setAddress]=useState('');
const [email,setEmail]=useState('');
const [isEmailValid,setIsEmailValid]=useState('');

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
// const submitHandler = (e) => {
//     console.log('Signing up with:', username, password, gender, age, phone, address, email);

//   e.preventDefault();

//   const form = document.getElementById('formdata');
//   const formData = new FormData(form);

//   var requestOptions = {
//     method: 'POST',
//     body: formData,
//     redirect: 'follow'
//   };
//   fetch("https://64b8-2401-4900-1afe-1536-1df9-48e3-47f5-34d2.ngrok-free.app/api/signup/", requestOptions)
//   .then(response => response.json())
//   .then(result =>{
//     console.log(result);
//     if (result.success) {
//       // Update the active tab to the sign-in tab
//       setJustifyActive('tab2');

//     }


//   })
//   .catch(error => console.log('error', error));

// };
const emailHandler=(e)=>{
  setEmail(e.target.value);
  setIsEmailValid(e.target.value.includes('@'));

}
const validFormHandler=()=>{
  if(isFormVaild && isEmailValid===true){
   return true;

  }
  else
 return false;
}


const isFormVaild= username.trim()!=='' && password.trim()!=='' && gender.trim()!=='' && age.trim()!=='' && address.trim()!=='' && email.trim()!=='' 


const submitHandler = (e) => {
      console.log('Signing up with:', username, password, gender, age, phone, address, email);
  e.preventDefault();
  const form = document.getElementById('formdata');
  const formData = new FormData(form);

  var requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };
  // ... (rest of your code)

  fetch("https://5343-2401-4900-1d35-4206-d127-976f-2c6b-b43e.ngrok-free.app//api/signup/", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);

      if (result.success) {
        // Update the active tab to the sign-in tab
        setJustifyActive('tab1');
      }
     else if(result.message){
      alert("Username already exists")
     }
      else {
        // Handle the case when the backend request was not successful
        // For example, show an alert to inform the user about the issue
        alert("Failed to create a new account. Please try again.")
      }

     
    })
    .catch(error => console.log('error', error));
    // handleFormSubmission();


};


const handleFormSubmission = () => {
  if (validFormHandler()) {
    // Update the active tab to the sign-in tab
    setJustifyActive('tab1');
    alert("New account created")
  } else {
    alert("Please enter all details correctly to proceed!!");
  }
};


// const submitLoginHandler=()=>{
//   console.log('Loging in with: ',email,password);
//   const form = document.getElementById('formlogin');
//   const formData = new FormData(form);

//   var requestOptions = {
//     method: 'POST',
//     body: formData,
//     redirect: 'follow'
//   };
//   // ... (rest of your code)

//   fetch("https://8ce5-223-184-243-61.ngrok-free.app/api/login/", requestOptions)
//     .then(response => response.json())
//     .then(result => {
//       console.log(result);

//       if (result.success) {
//         // Update the active tab to the sign-in tab
//         // setJustifyActive('tab1');
//         console.log("Login successful through backend");
//       }
//      else if(result.message){
//       // alert("Username already exists")
//       console.log("Login not successful through backend");
//      }
//       else{
//         // Handle the case when the backend request was not successful
//         // For example, show an alert to inform the user about the issue
//         alert("Failed to login a new account. Please try again.");
//       }

     
//     })
//     .catch(error => console.log('error', error));

// }


// const submitLoginHandler = (e) => {
//   console.log('Login in:', username, password);
// e.preventDefault();
// const form = document.getElementById('formlogin');
// const formData = new FormData(form);

// var requestOptions = {
// method: 'POST',
// body: formData,
// redirect: 'follow'
// };
// // ... (rest of your code)

// fetch("https://8ce5-223-184-243-61.ngrok-free.app/api/login/", requestOptions)
// .then(response => response.json())
// .then(result => {
//   console.log(result);

//   if (result.success) {
//     // Update the active tab to the sign-in tab
//     // setJustifyActive('tab1');
//     console.log("User success")
//   }
//  else if(result.message){
//   alert("Username already exists")
//   console.log("User fail")

//  }
//   else {
//     // Handle the case when the backend request was not successful
//     // For example, show an alert to inform the user about the issue
//     alert("Failed to create a new account. Please try again.")
//   }

 
// })
// .catch(error => console.log('error', error));
// };

const submitLoginHandler = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  // const username = document.getElementById('username').value; // Get the username input value
  // const password = document.getElementById('password').value; // Get the password input value

  console.log('Logging in:', username, password);

  const form = document.getElementById('formlogin');
  const formData = new FormData(form);

  var requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow',
  };

  fetch("https://5343-2401-4900-1d35-4206-d127-976f-2c6b-b43e.ngrok-free.app/api/login/", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);

      if (result.success) {
        console.log("User success");
       setLoggedIn(true);
      } else if (result.message) {
        alert("Login not successful. Username or password is incorrect.");
        console.log("User fail");
      } else {
        alert("Failed to login. Please try again.");
      }
    })
    .catch(error => console.log('error', error));
};



  return (
    <>

{loggedIn ? ( 
<LandingPage />
) : (

  <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

  <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
    <MDBTabsItem>
      <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
        Login
      </MDBTabsLink>
    </MDBTabsItem>
    <MDBTabsItem>
      <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
        Register
      </MDBTabsLink>
    </MDBTabsItem>
  </MDBTabs>

  <MDBTabsContent>

    <MDBTabsPane show={justifyActive === 'tab1'}>

      <div className="text-center mb-3">
        <p>Sign in with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>
        </div>

        <p className="text-center mt-3">or:</p>
      </div>
    <form id="formlogin">

   
      <MDBInput wrapperClass='mb-4' label='User name' name='username' id='form1' type='text' onChange={(e)=>setEmail(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' name='password' type='password' onChange={(e)=>setPassword(e.target.value)}  />

      <div className="d-flex justify-content-between mx-4 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4 w-100" onClick={submitLoginHandler}>Sign in</MDBBtn>
      <p className="text-center">Not a member? <a href="#!">Register</a></p>
      <p className="text-center">Login with OTP </p>
      </form>
    </MDBTabsPane>

    <MDBTabsPane show={justifyActive === 'tab2'}>


{/* REGISTER */}
      <div className="text-center mb-3">
        <p>Sign in with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>
        </div>

        <p className="text-center mt-3">or:</p>
      </div>
    <form id="formdata">
    <MDBInput wrapperClass='mb-4' label='Username' name="username" id='form1' type='text' onChange={(e)=>setUsername(e.target.value)}  />
      <MDBInput wrapperClass='mb-4' label='Password' name="password" id='form1' type='password' onChange={(e)=>setPassword(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Gender' id='form1' name="gender" type='text' onChange={(e)=>setGender(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Age' id='form1' name="age" type='number' onChange={(e)=>setAge(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Phone' id='form1' name="phone" type='number' onChange={(e)=>setPhone(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Address' id='form1' name="address" type='text' onChange={(e)=>setAddress(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Email' id='form1' name="email" type='email' onChange={emailHandler}/>
      <div className='d-flex justify-content-center mb-4'>
        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
      </div>

      <MDBBtn className="mb-4 w-100" onClick={submitHandler}>Sign up</MDBBtn>
      </form>




    </MDBTabsPane>

  </MDBTabsContent>

</MDBContainer>
)}


   


    </>
  );
}

export default Signup;