
import React,{useState} from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { PiTelevisionDuotone } from "react-icons/pi";
const Ex = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
       
        console.log('Search triggered with query:', query);
        const apiKey = '1a4ccc89abfa206e97d2fc3f73b1e3e2';
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`;
    
        setLoading(true);
        try{
            const response = await  axios.get(apiUrl)
            const result = response.data.results.slice(0,10)
            setSearchResults(result)
            console.log('Search results:', response.data.results);
        }catch(error) {
            console.error('Error fetching search results:', error);
            setLoading(false);
          };
    };
  
    return(
      
      <div className="container-fluid py-2 ">
        <div className="row">
          <div className="col-md-12">
    <div className="" id="chat3">
          <div className="">
     <div className="row">

                <div className="col-md-6 col-lg-5 col-xl-3 mb-4 mb-md-0 card">
        <div className="user ">
                     
                      <div class="list border-bottom  p-3 bg-light">
        <i class="fas fa-clipboard-list"></i> Your List
    </div>
    
                      <div className="user-list" >
                      <div class="container mt-3">
        <div class="content">
            <p>Your content goes here.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
        </div>
    </div>

                      </div>
                      <div class=" p-3 content-bottom bg-light border-top">
        <p class="text-center mb-0">Footer content</p>
    </div>
                    </div>
                  </div>

  <div className="col-md-6 col-lg-7 col-xl-9 " >
  <div className="search-results">
  {searchResults.map((movie) => (
    <div key={movie.id} className="d-flex search-item">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
          className="search-img mb-4"
          width="400px"
          height="500px"
        />
      </Link>
      <div className="p-3 d-flex flex-column justify-content-between">
        <div>
          <h6 className="search-title">{movie.title}</h6>
          <p className="search-overview">{movie.overview}</p>
        </div>
        <div className="more-se">
          <div className="big-button">
            <button className="blue-button">
              More Info About This Movie <MdArrowOutward />
            </button>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <button className="sec-button text-style" style={{ width: "50%", margin: "5px" }}>
              <LuPlus /> Add to favourite
            </button>
            <button className="sec-button text-style" style={{ width: "50%", margin: "5px" }}>
              <PiTelevisionDuotone /> Watch now
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

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
       </div>

  
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    )
}

export default Ex;