import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFAV, setList } from "../action";
import { IoIosArrowForward } from "react-icons/io";
import { Modal } from "./modal";
import { Searchbar } from "./search";
import { Searchresult } from "./searchresult";
import { CiViewList } from "react-icons/ci";
const Ex = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [count, setCount] = useState(0);
   const [listName, setListName] = useState('')
  const [displaylist, setDisplaylist] = useState([]);
  const [showMainModal, setShowMainModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favourite);
  const mylist = useSelector((state) => state.listName);

  const handleSearch = async () => {
    console.log('Search triggered with query:', query);
    const apiKey = '1a4ccc89abfa206e97d2fc3f73b1e3e2';
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`;

    setLoading(true);
    try {
      const response = await axios.get(apiUrl);
      const result = response.data.results.slice(0, 10);
      setSearchResults(result);
      console.log('Search results:', response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setLoading(false);
    }
  };
  const handleListChange = (e,) => {
    const value = e.target.value;
    setListName(value);
    console.log('list name', value);
    
  };
  // const addtofav = (e, movie, list) => {
  //   if (list) {
  //     dispatch(setFAV(movie));
  //     console.log("added", movie);
  //     // console.log("Adding", movie, "to list", listName);
  //     // console.log("my list", list);
      
  //       setDisplaylist([...displaylist,list]);
  //       setList('')
      
    
  //   }
  // };

  const addtofav = (movie) => {
    if (listName) {
      dispatch(setFAV(movie)); // Dispatch action to add movie to favorites
      dispatch(setList(listName)); // Dispatch action to set the current list name
      
      // Create a new list entry every time a movie is added
      const newListEntry = { listName, movies: [movie] };
      setDisplaylist([...displaylist, newListEntry]); // Update displaylist with new list and movie
      
      setListName(''); // Clear list name input
      setShowMainModal(false); // Close main modal
    }
  };
  const handleShowMainModal = (movie) => {
    setSelectedMovie(movie);
    setShowMainModal(true);
  };

  const handleCloseMainModal = () => {
    setShowMainModal(false);
    setSelectedMovie(null);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div id="chat3">
            <div className="">
              <div className="row">
                <div className="col-md-6 col-lg-5 col-xl-3 mb-4 mb-md-0">
                  <div className="user">
                    <div className="list border-bottom p-4">
                      <CiViewList size={40} className="viewl" /> <span>Your list</span>
                    </div>
                    <div className="user-list">
                      <div className="container mt-3">
                        <div className="content">
                        <ul className="list-group">
            {favourite.map((favMovie, index) => (
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
                  color: 'white'
                }}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{favMovie.title}</div>
                  <div className="text-danger">
                    {displaylist
                      .filter((listItem) => listItem.movies.includes(favMovie))
                      .map((filteredItem, idx) => (
                        <div key={idx}>
                          <p>List Name: {filteredItem.listName}</p>
                        </div>
                      ))}
                  </div>
                </div>
                <div>
                  <IoIosArrowForward />
                </div>
              </li>
            ))}
          </ul>
                          
                        </div>
                      </div>
                    </div>
                    <div className="p-2 mt-5 content-bottom border-top">
                      <p className="text-center mb-0">Footer content</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7 col-xl-9 cl card">
                  {showMainModal && (
                    <Modal
                      showMainModal={showMainModal}
                      handleCloseMainModal={handleCloseMainModal}
                      setShowMainModal={setShowMainModal}
                      addtofav={addtofav}
                      movie={selectedMovie}
                      listName={listName}
                      handleListChange={handleListChange}
                    />
                  )}
                  <div className="search-results">
                    <Searchresult searchResults={searchResults} handleShowMainModal={handleShowMainModal} />
                  </div>
                  <Searchbar
                    setQuery={setQuery}
                    handleSearch={handleSearch}
                    query={query}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex;
