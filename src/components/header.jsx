import React,{useState} from "react";
import { LuPlus } from "react-icons/lu";
import { PiTelevisionDuotone } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";

export const Header = () => {
    const handleBack = () => {

    }
    const handleFav = () => {

    }
    const handleWatch = () => {

    }
    return(
        <nav class="navbar ">
        <div class="container">
          <div className='icon-head'>
              
          <MdArrowBackIos className='' />
         
          </div>
        
         <div className='d-flex'>
         <div className="icon-head m-2" >
                  <LuPlus className='plus-icon' />
                </div>
                <div className="icon-head m-2">
                    <PiTelevisionDuotone className='tv' />
                  </div>
         </div>
         
      
        </div>
      </nav>

    )
 
}