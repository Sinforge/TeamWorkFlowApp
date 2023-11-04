const UpdateTaskModal = ({item, handleCloseModal}) => {
    // update form
    return(
        <div className="modal">
            <div className="modal-content">
              <div>
                <h3>Name</h3>
                <input value={item.name} onChange={(e) => {item.name = e.target.value}} />
                <h3>Description</h3>
                <textarea value={item.description} onChange={(e) => {item.description = e.target.value}} />
                <button>Change</button>
              </div>
              <button>Delete</button>
              <button onClick={handleCloseModal}>Закрыть</button>
            </div>
          </div>
    )
}
export default UpdateTaskModal;