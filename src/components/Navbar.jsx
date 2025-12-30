import React from "react";
import assets from "../assets/assets.js"

const navbar = ({ theme, setTheme }) => {
    return (
        <div className="flex justify-between items-center px-4 sm:px-12 lg-px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl;font-medium bg-white/50 dark:bg-gary-900/70 ">
            <img src={theme === "dark" ? assets.logo_dark : assets.logo} alt="" className="w-32" />
            
            < div className="text-gray-700 dark:text-white sm:text-sm max-sm:w-60 max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full
             max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all">

                <img src={assets.close_icon} alt="" className="w-5 absolute right-4 top-4 sm:hidden"/>

               
                <a href="#" className="sm:hover:border-b">Home</a>
                <a href="#Services" className="sm:hover:border-b">Services</a>
                <a href="#sm:hover:border-b" className="sm:hover:border-b">Our Work</a>
                <a href="#Contact Us" className="sm:hover:border-b" >Contact Us</a>
            </div>
            <div>
                <a href="#Contact Us"className="text-sm max-sm:hidden flex
                    items-center gap-2 bg-primary text-white px-6 py-2 rounded-full 
                     cursor-pointer hover:scale-103 transition-all ">
                    connect <img src={assets.arrow_icon} alt="arrow_icon" className="width={14}"/>
                </a>
            </div>
        </div>



    )
}
export default navbar; 

