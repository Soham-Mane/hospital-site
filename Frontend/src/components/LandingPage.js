import React from 'react'
import Topmost from './Topmost/Topmost';
import Navbar from './Navbar/Navbar';
import Main from './main/main';
import Welcome from './welcome/welcome';
import Special from './Special/Special';
import Form from './form/Form';
import Contact from './contact/Contact';
const LandingPage = () => {
  return (
    <div>
        <Topmost/>
<Navbar/>
<Main/>
<Welcome/>
<Special/>
<Form/>
<Contact/>
    </div>
  )
}

export default LandingPage