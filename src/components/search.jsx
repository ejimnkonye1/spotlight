import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
export const Searchbar = ({setQuery,handleSearch,query}) => {
    return(
        <nav className="navbar">
        <div className="container-fluid search-input">
        <div className="input-container">
                <input
                    className=" me-2 search mt-auto text searchbar"
                    type="text"
                    placeholder="A movie about"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSearch(e);
                        }
                        
                      }}
                      style={{width:'100%',
                        
                      }}
                    
                />
          <FaTelegramPlane className="input-icon" />
           </div>
        </div>
    </nav>
    )
}
// .search-input {
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   background-color: #F1F8FD; /* add a background color to cover the content */
//   padding: 10px;
//   box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); /* add a shadow to separate from content */
// }

// .search-input input {
//   margin-left: 0;
//   margin-right: 0;
//   width: 100%;
//   height: 40px;
// }

// .search-input.input-container {
//   left: 0;
//   width: 100%;
// }

// .search-input.input-icon {
//   right: 20px;
//   top: 50%;
//   transform: translateY(-50%);
// }