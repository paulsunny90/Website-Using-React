 import React from "react";
import assets from "../assets/assets";
import Title from "./Title";

 const Services=()=>{
    const servicesData = [
  {
    title: 'Advertising',
    description:
      'We turn bold ideas into powerful digital solutions that connect, engage, and convert your audience effectively.',
    icon: assets.ads_icon,
  },
  {
    title: 'Content Marketing',
    description:
      'We help you plan, create, and distribute valuable content that attracts and retains your target customers.',
    icon: assets.marketing_icon,
  },
  {
    title: 'Social Media Management',
    description:
      'Build a strong social presence with strategic posting, audience engagement, and brand storytelling.',
    icon: assets.social_ic_
  }
]

    return(
        <div   id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px=40 pt-30 text-gray-700  dark-text-white"> 
         <img src={assets.bgImage2} alt="" className="absolute -top-110 -left-70 -z-1 dark:hidden" />

         <Title title="how can  we help ?" desc="From strategy to execution, we craft digital solutions that help your business grow and succeed." />

        </div>
    ) 
 }
 export default Services  