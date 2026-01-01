import React from 'react'
import assets from '../assets/assets'


const FooterFile = ({ theme,setTheme }) => {
  return (
    
      <div id='footer' className='flex flex-col gap-6 py-20   text-center w-full overflow-hidden text-gray-700 dark:text-white pt-50' >

      <div className='grid  grid-cols-4  text-center pt-10  max-md:grid-cols-3 max-sm:grid-cols-2  '>
        <div className=' max-md:col-span-3 max-md:pb-30 '>
           <img src={theme === "dark" ? assets.logo_dark : assets.logo} alt="" className="w-52  pl-10" />
          
        </div>

        <div className='grid grid-row-3  gap-4 text-center pb-5'>
          <h1 className='font-bold'>RESOURECES</h1>
          <p className="max-w-lg text-center text-gray-500 dark:text-white/75 ">Folwbite</p>
          <p className="max-w-lg text-center text-gray-500 dark:text-white/75 ">Twilwind CSS</p>
        </div>
        
        <div className=' grid grid-row-3  gap-4  text-center pb-5'>
          <h1>FOLLOW US</h1>
          <p className="max-w-lg text-center text-gray-500 dark:text-white/75 ">Github</p>
          <p className="max-w-lg text-center text-gray-500 dark:text-white/75 ">Dscord</p>

        </div>

        <div className='max-sm:col-span-2 grid grid-row-3  gap-4 max-sm:pt-30 text-center pb-5'>
          <h1>LEGAL</h1>
          <p className="max-w-lg text-center text-gray-500 dark:text-white/75 ">Privacy Policy</p>
          <p className="max-w-lg text-center text-gray-500 dark:text-white/75 ">Terms & Conditions</p>

        </div>

        <div className='border-t-1 max-sm:col-span-2 max-md:col-span-3 max-lg:col-span-4 lg:col-span-4 max-sm:flex-col  max-sm:text-center  text-start flex justify-between p-10'>
          <p>© Copyright 2021, All Rights Reserved by Postcraft</p>
          <div className='flex gap-10  max-sm:justify-center max-sm:pt-3 '>
          <img src={assets.facebook_icon} alt="" className='w-5' />
          <img src={assets.twitter_icon} alt="" className='w-5' />
          <img src={assets.linkedin_icon} alt=""className='w-5' />
          <img src={assets.instagram_icon} alt=""className='w-5'/>
          </div>
         

        </div>
        
      </div>
      
    </div>
   
    
  );
}

export default FooterFile