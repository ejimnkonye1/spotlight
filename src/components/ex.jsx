
import React,{useState} from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { PiTelevisionDuotone } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setFAV, setListName } from "../action";
import { IoIosArrowForward } from "react-icons/io";

const Ex = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [count , setCount] = useState(0)
    const [list, setList] = useState([])
    const [showMainModal, setShowMainModal] = useState(false);
    const [showNestedModal, setShowNestedModal] = useState(false);

    const handleShowMainModal = () => setShowMainModal(true);
    const handleCloseMainModal = () => setShowMainModal(false);

    const handleShowNestedModal = () => {
        setShowNestedModal(true);
        setShowMainModal(false); // Close the main modal when opening nested modal
    };

    const handleCloseNestedModal = () => {
        setShowNestedModal(false);
        // setShowMainModal(true); // Reopen the main modal when closing nested modal
    };
  const incresea = () => {
    setCount(count + 1)
    console.log("this is", count)
  }
    const dispatch = useDispatch()
   const favourite = useSelector((state) => state.favourite)
   const mylist = useSelector((state) => state.listName)
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
    
 
    const addtofav = (movie, list) => {
      if (list) {
          dispatch(setFAV(movie));
          console.log("added", movie);
          console.log("Adding", movie, "to list", list);
          console.log("my list", list);
      }
  }

  const handleListChange = (e, index) => {
      const value = e.target.value;
      
      setList(value);
      // You can dispatch an action to update the list name in Redux state if needed
      console.log('list name', value);
  }
    return(
      
      <div className="container-fluid  ">
        <div className="row">
          <div className="col-md-12">
    <div className="" id="chat3">
          <div className="">
     <div className="row">

                <div className="col-md-6 col-lg-5 col-xl-3 mb-4 mb-md-0 ">
        <div className="user ">
                     
                      <div class="list border-bottom  p-4 ">
                      <CiViewList size={40} className="viewl" /> <span>Your list</span>
    </div>
    
                      <div className="user-list" >
                      <div class="container mt-3">
        <div class="content">
           
            <ul class="list-group">
        {favourite.map((favMovie, index) => (
          <div>

           
           <li key={index} className="list-group-item list-group-item-primary custom-background" 
    style={{ 
        backgroundImage: `url(https://image.tmdb.org/t/p/w200${favMovie.poster_path})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '50px', 
        width: '100%', 
        borderRadius: '10px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '10px', 
        color: 'white' // Ensures text is visible over the background image
    }}>
    <div>
        <div style={{ fontWeight: 'bold' }}>{favMovie.title}</div>
        <div>{list}</div>
    </div>
    <div>
    <IoIosArrowForward />
   
    </div>
</li>

          
          </div>
         
        ))}
      </ul>

     
        </div>
    </div>

                      </div>
                      <div class=" p-2 mt-5 content-bottom  border-top">
                        {/* <div className="bor-bot"></div> */}
        <p class="text-center mb-0">Footer content</p>
    </div>
                    </div>
                  </div>

  <div className="col-md-6 col-lg-7 col-xl-9 cl card " >
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
      <div className="container">
            {/* Main Modal */}
            <div className={`modal fade ${showMainModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showMainModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Main Modal title</h5>
                            <button type="button" className="close" onClick={handleCloseMainModal}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <a href="#" onClick={handleShowNestedModal}>Open Nested Modal</a>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Add to list</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nested Modal */}
            <div className={`modal fade ${showNestedModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showNestedModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Nested Modal title</h5>
                            <button type="button" className="close" onClick={handleCloseNestedModal}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                          
                        <input
                                type="text"
                                value={list}
                                onChange={handleListChange}
                                placeholder="Enter List Name"
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseNestedModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => addtofav (movie, list)}>add to list</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
            <button className="sec-butto text-styl" onClick={handleShowMainModal} style={{ width: "50%", margin: "10px" }}>
              <LuPlus /> Add to favourite
            </button>
            <button className="sec-butto text-styl" onClick={incresea} style={{ width: "50%", margin: "10px" }}>
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