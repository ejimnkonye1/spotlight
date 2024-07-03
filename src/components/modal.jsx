import React, { useState } from "react";
import { CiViewList } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import { FiPlus } from "react-icons/fi";
import { LuFilePlus2 } from "react-icons/lu";
export const Modal = ({ showMainModal,
  handleCloseMainModal,
  setShowMainModal,
  addtofav,
  movie,
  newListName,
  setNewListName,
  displaylist,
  handleCreateNewList,
  selectedList,
  setSelectedList, 
  selectedListIndex,}) => {
  const [showNestedModal, setShowNestedModal] = useState(false);

  const handleShowNestedModal = () => {
  
    console.log("Opening nested modal");
    setShowNestedModal(true);
    
  
  };
  
  const handleCloseNestedModal = () => {
    console.log("Closing nested modal");
    setShowNestedModal(false);
    setShowMainModal(false)
    // If needed, setShowMainModal(true); // Reopen the main modal when closing nested modal
  };
  
const createlist = (movie) => {
    addtofav(movie)
    handleCreateNewList(movie)
    
}
  const handleAddToFav = () => {
    addtofav(movie, listName);
  };
  const listItems = document.querySelectorAll('ul li');

  listItems.forEach((item) => {
    item.addEventListener('click', () => {
      listItems.forEach((otherItem) => otherItem.classList.remove('active'));
      item.classList.add('active');
    });
  });
  return (
    <>
    {showNestedModal? (
      <div className={`modal fade ${showNestedModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showNestedModal ? 'block' : 'none' }}>
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content" style={{
      width:'70%'
    }}>
      <div className="modal-header">
      <LuFilePlus2  className="list-icon" /> 
  <div className="modal-title d-flex flex-column">
  <span className="add">New List</span>

</div>
        <TiDeleteOutline className="cancel" onClick={handleCloseNestedModal} />
      </div>
      <div className="modal-body" >
      <label htmlFor="list" className="li">List Name</label>
<input
  type="text"
  name="list"
  value={newListName}
  onChange={(e) => setNewListName(e.target.value)}
  className="form-control"
  placeholder="Enter a new list name"
  
/>
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" onClick={() => createlist(movie)}>Create new list</button>
      </div>
    </div>
  </div>
</div>
    ): (
      <div className={`modal fade ${showMainModal ? 'show' : ''}`} tabIndex="-1" role="dialog" 
      style={{ display: showMainModal ? 'block' : 'none' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" style={{width:'80%'}}>
        <div className="modal-header">
  <CiViewList className="list-icon" /> 
  <div className="modal-title d-flex flex-column">
  <span className="add">Add to list</span>
  <span className="please">Please select a list to add movie to</span>
</div>

  
  <div className="d-flex justify-content-end ">
    <TiDeleteOutline className="cancel" onClick={handleCloseMainModal} />
  </div>
</div>
          <div className="modal-body">

            
            <ul className="list-group">
  {displaylist.map((listItem, idx) => (
    <li
      key={idx}
      className={`list-group-  mb-3 `}
      value={listItem.listName}
      checked={selectedList === listItem}
      onClick={() => setSelectedList(listItem)}
      style={{
        backgroundImage: listItem.movies.length > 0 ? `url(https://image.tmdb.org/t/p/w200${listItem.movies[0].poster_path})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        color: 'white',
        padding: '10px',
        cursor: 'pointer',
        height: '60px',
        transition:'all 0.4s',
        border: selectedListIndex === idx ? 'active' : '' // Add border style conditionally
      }}
    >
      
      <div style={{ fontWeight: 'bold' }}>
        {listItem.listName}
      </div>
      <div className="text-danger" style={{  }}>
              {listItem.movies.length} {listItem.movies.length === 1 ? 'movie' : 'movies'}
            </div>
    </li>
  ))}
</ul>



            <a style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleShowNestedModal}> <FiPlus style={{textDecoration:'underline'}} /> new list</a>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary add-b" onClick={() => addtofav(movie)}>Add to this list</button>
          </div>
        </div>
      </div>
    </div>
    )}
    



    </>
  );
};
