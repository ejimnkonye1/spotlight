import React,{useState} from "react"

export const Modal = ({showMainModal,handleCloseMainModal,setShowMainModal,list,addtofav,handleListChange,movie}) => {
    const [showNestedModal, setShowNestedModal] = useState(false);
    const handleShowNestedModal = () => {
        setShowNestedModal(true);
        setShowMainModal(false); // Close the main modal when opening nested modal
    };

    const handleCloseNestedModal = () => {
        setShowNestedModal(false);
        // setShowMainModal(true); // Reopen the main modal when closing nested modal
    };
    const hadleaddtofav = () =>{
        addtofav(list)
    }
return(
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
                    <button type="button" className="btn btn-primary" onClick={hadleaddtofav}>add to list</button>
                </div>
            </div>
        </div>
    </div> 
</div>

)
}