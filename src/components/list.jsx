import React from "react"; 

export const Mylist = ({displaylist, selectedListIndex, handleListLinkClick}) => {

    return(
        <ul className="list-group">
        {displaylist.map((listItem, idx) => (
          <li  
            key={idx}
          className={`list-group-item  custom-background mb-3
            
            ${selectedListIndex === idx}`}
            onClick={() => handleListLinkClick(idx)}
            
            style={{
              backgroundImage: listItem.movies.length > 0 ? `url(https://image.tmdb.org/t/p/w200${listItem.movies[0].poster_path})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              color: 'white',
              padding: '10px',
              cursor:'pointer',
              height:'60px'
            }}
          >
            <div style={{ fontWeight: 'bold', }}>
              {listItem.listName}
            </div>
            <div className="text-danger" style={{  }}>
              {listItem.movies.length} {listItem.movies.length === 1 ? 'movie' : 'movies'}
            </div>
          </li>
        ))}
      </ul>
    )
}