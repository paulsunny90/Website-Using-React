import { useState } from 'react'
import Navbar from './components/Navbar'

import Hero from './components/Heroo.jsx'
import TrustedBy from './components/TrustedBy'
import Services from './components/Servicess.jsx'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import FooterFile from'./components/Footer'


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light')
  return (

    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>  
      <TrustedBy />
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
      <FooterFile theme={theme} setTheme={setTheme} />
    

      
    
     
      

    </div> 
  )

}

export default App
 