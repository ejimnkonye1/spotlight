import React, {useState, useEffect } from "react";
import { LuPlus } from "react-icons/lu";
import { PiTelevisionDuotone } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import axios from 'axios';
export const Listdet = ({ setshowlistpage, displaylist, selectedListitem }) => {
  const back = () => {
    setshowlistpage(false);
  };

  // State to keep track of the selected list index
  const [selectedListIndex, setSelectedListIndex] = useState(0);

  // Function to handle selecting a different list
  const selectList = (index) => {
    setSelectedListIndex(index);
  };

  // Get the selected list based on selectedListIndex
  const selectedList = displaylist[selectedListIndex];

  return (
    <div>
      <nav className="navbar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="icon-head">
            <MdArrowBackIos style={{ cursor: 'pointer' }} onClick={back} />
          </div>
          <div className="list-item">
            <h4>{selectedListitem?.listName} ({selectedListitem?.movies.length})</h4>
          </div>
          <div className="icon-head m-2">
            <AiFillDelete className="plus-icon text-danger" />
          </div>
        </div>
      </nav>

      <div className="container mt-4 list-results">
        {selectedListitem && (
          <div className="row">
            {selectedListitem.movies.map((movie, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card rounded" style={{width:'70%'}}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    className="card-img-top"
                    alt={movie.title}
                    width="100%"
                    
                    height="200px"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <p className="card-text text-secondary">{movie.title}</p>
                    <p className="card-text text-danger">Delete</p>
                      </div>
                    

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
