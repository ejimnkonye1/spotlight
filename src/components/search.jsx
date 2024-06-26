import React from "react";

export const Searchbar = ({setQuery,handleSearch,query}) => {
    return(
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid search-input">

                <input
                    className="form-control me-2 search mt-auto "
                    type="search"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSearch(e);
                        }
                      }}
                />

           
        </div>
    </nav>
    )
}