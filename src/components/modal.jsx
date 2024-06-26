import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Modal = ({ showMainModal, handleCloseMainModal, setShowMainModal, listName, addtofav, handleListChange, movie }) => {
  const [showNestedModal, setShowNestedModal] = useState(false);

  const handleShowNestedModal = () => {
    setShowMainModal(true); 
    console.log("Opening nested modal");
    setShowNestedModal(true);
  // Ensure this is correctly managing state
  };
  
  const handleCloseNestedModal = () => {
    console.log("Closing nested modal");
    setShowNestedModal(false);
    setShowMainModal(false)
    // If needed, setShowMainModal(true); // Reopen the main modal when closing nested modal
  };
  

  const handleAddToFav = () => {
    addtofav(movie, listName);
  };

  return ReactDOM.createPortal(
    <>
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
              <p onClick={handleShowNestedModal}>Open Nested Modal</p>
              <p>{movie?.title}</p>
            </div>
          </div>
        </div>
      </div>

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
                value={listName}
                onChange={handleListChange}
                placeholder="Enter List Name"
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseNestedModal}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleAddToFav}>Add to list</button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};
