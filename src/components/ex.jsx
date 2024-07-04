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
import { useNavigate } from "react-router-dom";
import { Mylist } from "./list";
import { Button } from "bootstrap";
import "../css/search.css"
import { HeaderSm } from "./smheader";
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
const navigate = useNavigate()

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
  
  const handleCreateNewList = (movie) => {
    if (newListName) {
      // Create a new list with the movie included
      const newList = { listName: newListName, movies: [movie] };
      
      // Add the new list to the display list
      setDisplaylist([...displaylist, newList]);
      
      // Set the newly created list as the selected list
      setSelectedList(newList);
      setNewListName('');
      setShowMainModal(false);
      setSelectedMovie(null);
    }
  };
  
  const addtofav = (movie) => {
    if (selectedList) {
      const updatedList = displaylist.map((listItem) =>
        listItem === selectedList ? { ...listItem, movies: [...listItem.movies, movie] } : listItem
      );
      setDisplaylist(updatedList);
      setShowMainModal(false);
      setSelectedMovie(null);
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
  // State to keep track of the selected list index
const [selectedListIndex, setSelectedListIndex] = useState(0);


  const handleListLinkClick = (index) => {
    // Handle click on list link to navigate and show Listdet
    handleCloseMainModal(); // Close modal
    setshowlistpage(true); // Show Listdet component
    setSelectedListIndex(index);

  };


// Get the selected list based on selectedListIndex
const selectedListitem = displaylist[selectedListIndex];


  return (
    <div className="container-fluid">
    <div className="row">
      {showlistpage ? (
''
      ):(
        <HeaderSm 
        displaylist={displaylist}
        showlistpage={showlistpage}
        selectedListIndex={selectedListIndex}
        handleListLinkClick={handleListLinkClick}
        />
      )}
     
      <div className="col-md-6 col-lg-5 col-xl-3 mb-4 mb-md-0  hambuger" style={{width:'23%'}}>
        <div className="user">
          
          <div className="list border-bottom p-1">
            <CiViewList size={40} className="viewl" />
            <p className="list-n">Your list</p>
          </div>
  
          <div className="user-list">
            <div className="container mt-3">
              <div className="content">
                <Mylist
                  displaylist={displaylist}
                  selectedListIndex={selectedListIndex}
                  handleListLinkClick={handleListLinkClick}
                />
              </div>
            </div>
          </div>
          {/* Footer Content */}
          <div className="p-2 mt-4 content-bottom border-top">
            {/* <p className="text-center mb-0">Footer content</p> */}
            <button className="btn btn-primary">Signup</button>
          </div>
        </div>
      </div>
  
    
      <div className="col-md-6 col-lg-7 col-xl-9 cl border hambuger-2" style={{width:'77%'}}>
        
         {showlistpage ? (
          <Listdet
            setshowlistpage={setshowlistpage}
            displaylist={displaylist}
            selectedListitem={selectedListitem}
          />
        ) : (
          <>
            
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
              <Searchresult
                searchResults={searchResults}
                handleShowMainModal={handleShowMainModal}
                query={query}
              />
            </div>
        
            <Searchbar
              setQuery={setQuery}
              handleSearch={handleSearch}
              query={query}
            />
          </>
        )} 
      </div>
    </div>
  </div>
  
  );
};

export default Ex;
