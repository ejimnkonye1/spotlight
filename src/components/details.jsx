
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/details.css'
import { LuPlus } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { PiTelevisionDuotone } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
export const Moviedetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading , setLoading] = useState(true)
    const [trailerKey, setTrailerKey] = useState(null);
    const [relatedMovies, setRelatedMovies] = useState([]);
    const [movieImages, setMovieImages] = useState([]);
    const [mainImage, setMainImage] = useState('');
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        const apiKey = '1a4ccc89abfa206e97d2fc3f73b1e3e2';
        const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
        const videosUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;
        const relatedMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US`;
        const imagesUrl = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}`;
        const genresResponseurl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
           
    
        // Fetch movie details
        axios
          .get(movieUrl)
          .then((response) => {
            setMovie(response.data);
              setLoading(false);
              axios.get(genresResponseurl)
              .then((genresResponse) => {
              setGenres(genresResponse.data.genres)
              })
            axios.get(relatedMoviesUrl)
          .then((relatedResponse) => {
            setRelatedMovies(relatedResponse.data.results.slice(0,4));
          })
          .catch((relatedError) => {
            console.error('Error fetching related movies:', relatedError);
          });
    
          axios.get(imagesUrl)
          .then((imagesResponse) => {
            setMovieImages(imagesResponse.data.backdrops);
            // Set the initial main image to the first backdrop image
            if (imagesResponse.data.backdrops.length > 0) {
              setMainImage(`https://image.tmdb.org/t/p/original${imagesResponse.data.backdrops[0].file_path}`);
            }
          })
          .catch((imagesError) => {
            console.error('Error fetching movie images:', imagesError);
          });
            // Fetch trailer key
            axios.get(videosUrl)
              .then((videosResponse) => {
                const trailer = videosResponse.data.results.find(video => video.type === 'Trailer');
                if (trailer) {
                  setTrailerKey(trailer.key);
                }
              })
              .catch((videosError) => {
                console.error('Error fetching movie videos:', videosError);
              });
          })
          .catch((error) => {
            console.error('Error fetching movie details:', error);
            setLoading(false);
          });
      }, [id]);
      if (!movie) {
        return <p>Movie not found.</p>;
      }
      const moviepic = {
        height : "100vh",
        width : "100%",
        backgroundSize: 'cover',
        backgroundImage: movie ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")` : 'none',
        
        }
        const rating = Math.round(movie.vote_average / 10 * 10) * 1;

        const formattedRating = Math.floor(rating);
        const runtime = movie.runtime;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const formattedRuntime = `${hours} hour ${minutes}  minutes`;
  const getGenreNames = () => {
    const genreNames = movie.genre_ids.map(genreId => {
      const genre = genres.find(g => g.id === genreId);
      return genre ? genre.name : 'Unknown';
    });
    return genreNames.join(', ');
  };
    return(

        <div className="container-fluid movie-details-container " >
           
     <div className='back' style={moviepic} >
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

<div className="overview container ">
          {movie && (
            <div>
              <div>
              <p className="">{movie.title}</p>
              </div>
              <div>
                <h6>Overview</h6>
                <p className='w-50'>{movie.overview}</p>
              </div>
              <div className='d-flex'>
              <p className='p-1'><IoIosStar  className='star'/> <span className='rate'>{rating}/10</span></p>
              <p className='p-1'> <CiClock2 /> <span className='run'>{formattedRuntime}</span></p>
                </div>
              
             
              <p>Genre: </p>
            </div>
          )}
        </div>


     </div>
   
     
     <div class="container-fluid">
        <div class="row m-1">
          
            <div class="col-6">
                <h6 className='subheading'>Thriller</h6>
                <div className="movie-image-container details mt-3 card rounded m-2"

style={{
  position: 'relative',
  width: '100%',
  height: '310px',
  backgroundColor: 'rgb(0, 0, 0)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}
>
  
{movie && (
  <div className="movie-trailer-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${trailerKey}`}
      title="Movie Trailer"
      frameBorder="0"
      allowFullScreen
      style={{ borderRadius: '10px' }} // Add border radius or other styles as needed
    />
  </div>
)}


</div>
            </div>
        
            <div class="col-6">
                <h6 className='subheading'>Images</h6>
                <div className="movie-image-container details mt-3 card rounded m-2"
          style={{
            position: 'relative',
            width: '100%',
            height: '310px',
            backgroundColor: 'rgb(0, 0, 0)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {mainImage && (
            <div className="movie-trailer-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <img
                width="100%"
                height="100%"
                src={mainImage}
                alt="Movie Backdrop"
                style={{ borderRadius: '10px' }}
              />
              <div className="movie-images-overlay" style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                display: 'flex',
                gap: '10px',
                zIndex: 1,
              }}>
                {movieImages.slice(0, 5).map((image, index) => (
                  <img
                    key={index}
                    src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                    alt={`Movie Scene ${index + 1}`}
                    onClick={() => setMainImage(`https://image.tmdb.org/t/p/original${image.file_path}`)}
                    style={{
                      width: '50px',
                      height: '75px',
                      borderRadius: '5px',
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
            </div>
        </div>
    

    {/* more container */}

    <div class="container=-fluid">
        <div class="row m-3">

            <div class="col-6 button-side">
                <h6 className='subheading-2'>More</h6>
              <div className='big-button'>
                <button  style={{
                  // width : "100%",
                  //   borderRadius: "10px",
                  //  margin:'5px'
                    
                }} className=' blue-button'>More Info About This Movie <MdArrowOutward /></button>
              </div>
              <div className='d-flex justify-content-between mt-2'>
                <button className='sec-button text-style'
                style={{
                  width: "50%",
                  // borderRadius: "10px",
                  //   backgroundColor: "white",
                    margin:"5px",
                  //     height:"35px"
                }} > <LuPlus /> Add to favourite</button>
                <button className='sec-button text-style'
                 style={{
                  width: "50%",
                      // borderRadius: "10px",
                      // backgroundColor: "white",
                        margin:"5px",
                      //   height:"35px"
                 }}><PiTelevisionDuotone /> Watch now</button>
              </div>
            </div>
           
            <div class="col-6 mb-4">
            <div className='related-movies-container ' style={{ overflowX: 'auto', width: "%" }}>
        <h6 className='subheading-2'>Related Movies</h6>
        <div className='d-flex flex-row'>
          {relatedMovies.map((relatedMovie) => (
            <div key={relatedMovie.id} className='mb-4 m-2'>
              <div className='' style={{width:"100%"}}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${relatedMovie.poster_path}`}
                  className='img-fluid img-det'
                  alt={relatedMovie.title}
                  style={{
                    width: "150px",
                    height: "225px",
                    
                    // objectFit: "cover"
                  }}
                />
                <div className='card-body p-0'>
                  <h6 className='card-title text-center mt-2'>{relatedMovie.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

            </div>
        </div>
    </div>
        </div>
    )

}