import React,{useState,useEffect} from "react";
import axios from "axios";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Top10 = () => {
    const [top10, setTOp10] = useState(null)
    const apiKey = '1a4ccc89abfa206e97d2fc3f73b1e3e2';
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&region=NG&sort_by=popularity.desc&page=10`;




    const Fetchtop = async () => {
        try{
            const response = await axios.get(apiUrl)
            const TrendMovie = response.data.results.slice(0,5)
            setTOp10(TrendMovie);
        }catch(error){
        console.error(error)
        }
    }
    useEffect(() => {
    Fetchtop()
    },[])
    return(
<div >
<h5>top 10 in your country  <FaAngleRight className="" /></h5>
<div className="top">
          
          {top10 && top10.map((movie, index) => (
              <div className="row p-2">
<div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
<Link to={`/movies/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={"100px"} alt={movie.title} className="top-img" />     
                  </Link>    
                  </div>
  
              </div>
          ))}
          </div>
</div>
       
    )
}

export default Top10;