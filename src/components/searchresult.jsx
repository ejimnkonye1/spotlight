import React from "react";
import { Link } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { PiTelevisionDuotone } from "react-icons/pi";
import img from '../assets/img.jpg'
import { LuPencil } from "react-icons/lu";
import { SlReload } from "react-icons/sl";
export const Searchresult = ({ searchResults, handleShowMainModal, query }) => {
  return (
    <div>
      <div class="profile-card mt-3 m-4">
        <div class="profile-header">
            <img src={img} alt="Profile Picture" class="profile-img" />
            <span class="profile-name">Lion</span>
        </div>
        <div class="profile-icons mb-2">
        <LuPencil className="icon " />
        <SlReload  className="icon m-1"/>


        </div>
        <hr className="mt-4"/>
    </div>
   <div className="m-4">
    <h4 className="top">Top Results</h4>
   {searchResults.map((movie) => (
        
         
        <div key={movie.id} className="search-item ">
          
          <Link to={`/movies/${movie.id}`}>
        <div className="image-container">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
            className="search-img mb-4"
            width="400px"
            height="500px"
          />
          <div className="percentage-circle">70%</div>
        </div>
      </Link>
        <div className="p-3 d-flex flex-column justify-content-between">
          <div>
            <h6 className="search-title">{movie.title}</h6>
            <p className="search-overview">{movie.overview}</p>
          </div>
          <div className="more-se">
            <div className="big-button-more">
              <button className="blue-butto">
                About This Movie <MdArrowOutward />
              </button>
            </div>
            <div className="d-flex justify-content-between ">
              <button
                className="sec-butto text-styl"
                onClick={() => handleShowMainModal(movie)}
                style={{ width: "50%", margin: "10px" }}
              >
                <LuPlus /> Add to favourite
              </button>
              <button
                className="sec-butto text-styl"
                style={{ width: "50%", margin: "10px" }}
              >
                <PiTelevisionDuotone /> Watch now
              </button>
            </div>
          </div>
        </div>
        </div>
        
      
    ))}
   </div>
     
    </div>
  );
};
