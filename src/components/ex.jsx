import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFAV, setList } from "../action";
import { IoIosArrowForward } from "react-icons/io";
import { Modal } from "./modal";
import { Searchbar } from "./search";
import { Searchresult } from "./searchresult";
import { CiViewList } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Listdet } from "./listdet";

const Ex = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [count, setCount] = useState(0);
   const [listName, setListName] = useState('')
  const [displaylist, setDisplaylist] = useState([]);
  const [showMainModal, setShowMainModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showlistpage, setshowlistpage] = useState(false)
  const [listNameCounter, setListNameCounter] = useState(1);
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favourite);
  const mylist = useSelector((state) => state.listName);
  const [newListName, setNewListName] = useState('');
  const [selectedList, setSelectedList] = useState(null);


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
  
  const handleCreateNewList = () => {
    if (newListName) {
      const newList = { listName: newListName, movies: [] };
      setDisplaylist([...displaylist, newList]);
      setSelectedList(newList);
      setNewListName('');
    

    }
  };
  const addtofav = (movie) => {
    // if (selectedList) {
      const updatedList = displaylist.map((listItem) =>
        listItem === selectedList ? { ...listItem, movies: [...listItem.movies, movie] } : listItem
      );
      setDisplaylist(updatedList);
      setShowMainModal(false);
      setSelectedMovie(null);
    // }
  };
  
  const handleShowMainModal = (movie) => {
    setSelectedMovie(movie);
    setShowMainModal(true);
  };

  const handleCloseMainModal = () => {
    setShowMainModal(false);
    setSelectedMovie(null);
  };
  const handleListLinkClick = (listId) => {
    // Handle click on list link to navigate and show Listdet
    handleCloseMainModal(); // Close modal
    setshowlistpage(true); // Show Listdet component
    navigate(`/list/${listId}`); // Navigate to list details
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
                            {displaylist.map((listItem, idx) => (
                              <li key={idx} className="list-group-item list-group-item-primary custom-background"
                              
                              >
                                <div>
                                  <div style={{ fontWeight: 'bold' }}>{listItem.listName}</div>
                                  <div className="text-danger">
                                    {listItem.movies.map((movie, index) => (
                                      <div key={index}>
                                        {/* <Link to={`/list/${movie.id}`}> */}
                                        <p onClick={handleListLinkClick}
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
                      </div>
                    </div>
                    <div className="p-2 mt-5 content-bottom border-top">
                      <p className="text-center mb-0">Footer content</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7 col-xl-9 cl card">
                  <div>
     
               {showlistpage ? (
                   <div>
                  <Listdet />

                   </div>
                    ):(
                    <div>
                      {showMainModal && (
                   <Modal
                   showMainModal={showMainModal}
                   handleCloseMainModal={handleCloseMainModal}
                   setShowMainModal={setShowMainModal}
                   addtofav={addtofav}
                   movie={selectedMovie}
                   newListName={newListName}
                   setNewListName={setNewListName}
                   handleCreateNewList={handleCreateNewList}
                   selectedList={selectedList}
                   setSelectedList={setSelectedList}
                   displaylist={displaylist}
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
                    )}
                  
                  </div>
                 

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
