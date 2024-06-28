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
  setSelectedList, }) => {
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

            <ul>
              {displaylist.map((listItem, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name="selectedList"
                      value={listItem.listName}
                      checked={selectedList === listItem}
                      onChange={() => setSelectedList(listItem)}
                    />
                    {listItem.listName}
                  </label>
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
