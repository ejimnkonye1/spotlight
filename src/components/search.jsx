import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
export const Searchbar = ({setQuery,handleSearch,query}) => {
    return(
        <nav className="navbar">
        <div className="container-fluid search-input">
        <div className="input-container">
                <input
                    className=" me-2 search mt-auto text"
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