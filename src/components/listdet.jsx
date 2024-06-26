import React, {useState, useEffect } from "react";
import { LuPlus } from "react-icons/lu";
import { PiTelevisionDuotone } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import axios from 'axios';
export const Listdet = ({setshowlistpage,displaylist}) => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const back = () => {
    setshowlistpage(false)
    }

    // useEffect(()=>{
    //     const apiKey = '1a4ccc89abfa206e97d2fc3f73b1e3e2';
    //     const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    //     axios
    //     .get(movieUrl)
    //     .then((response) => {
    //       setMovie(response.data);
         
    //   }) .catch((error) => {
    //     console.error('Error fetching list details:', error);
        
    //   });
    // }, [id])

    // if (!movie) {
    //     return <p>Movie not found.</p>;
    //   }
    return(

        <div>
         <nav class="navbar ">
        <div class="container">
          <div className='icon-head'>
              
          <MdArrowBackIos className=''style={{cursor:'pointer'}} onClick={back} />
         
          </div>
        
         <div className='d-flex'>
         <div className="icon-head m-2" >
                  <AiFillDelete className='plus-icon' />
                </div>
                
         </div>
         
      
        </div>
      </nav>

      {/* <div className='related-movies-container ' style={{ overflowX: 'auto', width: "%" }}>
        <h6 className='subheading-2'>list Movies</h6>
        <div className='d-flex flex-row'>
          {movie.map((movie) => (
            <div key={movie.id} className='mb-4 m-2'>
              <div className='' style={{width:"100%"}}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className='img-fluid img-det'
                  alt={relatedMovie.title}
                  style={{
                    width: "150px",
                    height: "225px",
                    
                    // objectFit: "cover"
                  }}
                />
                <div className='card-body p-0'>
                  <h6 className='card-title text-center mt-2'>{movie.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

<ul className="list-group">
                            {displaylist.map((listItem, idx) => (
                              <li key={idx} className="list-group-item list-group-item-primary custom-background"
                              
                              >
                                <div>
                                  <div style={{ fontWeight: 'bold' }}>{listItem.listName}</div>
                                  <div className="text-danger">
                                    {listItem.movies.map((movie, index) => (
                                      <div key={index}>
                                        {/* <Link to={`/list/${movie.id}`}> */}
                                        <p 
                                        style={{
                                          backgroundImage: `url(https://image.tmdb.org/t/p/w200${movie.poster_path})`,
                                          backgroundSize: 'cover',
                                          backgroundPosition: 'center',
                                          height: '50px',
                                          width: '100%',
                                          borderRadius: '10px',
                                          display: 'flex',
                                          justifyContent: 'space-between',
                                          alignItems: 'center',
                                          padding: '10px',
                                          color: 'white'
                                        }}
                                        >{movie.title}</p>
                                        {/* </Link> */}
                                       
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
        </div>
    )
}