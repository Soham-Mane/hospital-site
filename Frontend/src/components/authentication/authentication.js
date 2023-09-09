import React, { useState } from 'react';
import OtpInput from 'otp-input-react';
import {BsFillShieldLockFill, BsTelephone} from "react-icons/bs";
import { auth } from './firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import  { CgSpinner } from 'react-icons/cg';
import './authetication.css';
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
import { toast, Toaster } from 'react-hot-toast';


const Authentication = () => {
    const [otp,setOtp] = useState('');
    const [ph,setPh] =useState('');
    const [loading,setLoading]=useState(false);
    const [showOtp,setShowOtp]=useState(true);
    const [showDjango,setShowDjango]=useState(true);
    
    const [showOTP, setShowOTP] = useState(false);
    const [user,setUser]=useState(false);
    const [justifyActive, setJustifyActive] = useState('tab1');

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },auth);
    }
  }
  function onDjango() {
    setLoading(true);
    setShowDjango(false);
    setTimeout(() => {
      // Simulate an asynchronous action
      // Set loading back to false when the action is done
      setLoading(false);
    }, 2000);
  }
    function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

    const handleJustifyClick = (value) => {
      if (value === justifyActive) {
        return;
      }
  
      setJustifyActive(value);
    };
  return (
    <>
        
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

<MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
  <MDBTabsItem>
    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
      Email
    </MDBTabsLink>
  </MDBTabsItem>
  <MDBTabsItem>
    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
      Phone Number
    </MDBTabsLink>
  </MDBTabsItem>
</MDBTabs>

<MDBTabsContent>

  <MDBTabsPane show={justifyActive === 'tab1'}>


  
{user ? (
 <h2>User is successful added</h2>
) : (
<>
<div className="text-center mb-3">
      <p>Sign in with:</p>
      <Toaster toastOptions={{duration: 4000}}/>
      <div id="recaptcha-container"></div>
     

      <p className="text-center mt-3">or:</p>
    </div>
{!showDjango ? ( 
  <>
 <section>
      <BsFillShieldLockFill size={30} />
        <div>
          <div>
            <label htmlFor="otp" className=''>
              Enter your OTP
            </label>
            <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container"
                  ></OtpInput>
          </div>
        </div>
  
        <MDBBtn className="mb-4 w-100 " onClick={()=>{setUser(true)}} >
        {/* {loading &&  <CgSpinner size={20} style={{ marginRight: '5px' }} className="spin-animation"  />  } */}
       
        <span>Verify OTP</span>
        </MDBBtn>
      </section>
  </>
) : ( 
  <>
<section>
<form id="formlogin">
    <MDBInput wrapperClass='mb-4' label='Email' name='email' id='form1' type='email' />

    <div className="d-flex justify-content-between mx-4 mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <MDBBtn className="mb-4 w-100" onClick={onDjango} disabled={loading} >
    {loading &&  <CgSpinner size={20} style={{ marginRight: '5px' }} className="spin-animation"  />  }
    <span>Send code via SMS</span>
    </MDBBtn>
    <p className="text-center">Not a member? <a href="#!">Register</a></p>
 
    </form>
</section>
  </>
) }
   
</>
)

}











  </MDBTabsPane>





  <MDBTabsPane show={justifyActive === 'tab2'}>



{/* PHONE NUMBER */}

    <div className="text-center mb-3">
      <p>Sign in with OTP</p>
<Toaster toastOptions={{duration: 4000}}/>
    <div id="recaptcha-container"></div>



{user ? (
<h2>Login Successfull</h2>
): (
  <div>

  {!showOtp ? 
  (
  <>
  <section>
      <BsFillShieldLockFill size={30} />
        <div>
          <div>
            <label htmlFor="otp" className=''>
              Enter your OTP
            </label>
            <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container"
                  ></OtpInput>
          </div>
        </div>
  
        <MDBBtn className="mb-4 w-100 " >
        {loading &&  <CgSpinner size={20} style={{ marginRight: '5px' }} className="spin-animation"  />  }
       
        <span>Verify OTP</span>
        </MDBBtn>
      </section>
  </>
  ) : (
  <>
  <section>
      <BsTelephone size={30} />
        <div >
          <div className='center'>
            <label htmlFor="ph" className=''>
             Verify your Phone Number
            </label>
            <div className='center2'>
            <PhoneInput country={"in"} value={ph} onChange={setPh} className="phone" />
            </div>
     
         
        
  
            <MDBBtn className="mb-4 w-100 " onClick={onSignup} >
        {loading &&  <CgSpinner size={20} style={{ marginRight: '5px' }} className="spin-animation"  />  }
       
        <span>Send code via SMS</span>
        </MDBBtn>
          </div>
        </div>
  
       
      </section>
  </>
  )
  }
  </div>
)
}

    </div>
  

   
 




  </MDBTabsPane>

</MDBTabsContent>

</MDBContainer>



    </>
  )
}

export default Authentication