import React from "react";
import assets from "../assets/assets.js"

const navbar =(theme,setTheme)=>{
    return(
        <div className="flex justify-between items-center pl-30 pt-10 pr-10">
            <img src={theme=== "dark"?assets.logo_dark:assets.logo} alt="" className="w-32"/>
            <div  >
                <a href="">Home</a>
                <a href="">Services</a>
                <a href="">Our Work</a>
                <a href="">Contact Us</a>
            </div>
            <button><img src="" alt="" /></button>
            <button>connect</button>
        </div>
        
        

    )
}
export default navbar;