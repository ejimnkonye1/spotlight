import React from "react"
import img from '../assets/img.jpg'
import { IoIosLogOut } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Mylist } from "./list";
export const HeaderSm = ({displaylist,selectedListIndex, handleListLinkClick}) => {
    return(
<div className="  ">
<nav class="navbar   d-lg-none  d-md-block sm-screen-head">
  
  <div class="container">
    <div>
    <RxHamburgerMenu data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" />
    
    </div>

  
    <div className="d-flex ml-auto">
  <div className="img-contaier-sm">
   <img src={img} className="circle-img" />
  </div>
  <div className="log-out">
  <IoIosLogOut className="log-out-icon" />

  </div>

    </div>
    </div>
  
</nav>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Your List</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div className="content">
                <Mylist
                  displaylist={displaylist}
                  selectedListIndex={selectedListIndex}
                  handleListLinkClick={handleListLinkClick}
                />
              </div>
  </div>
</div>
</div>

    )
}
