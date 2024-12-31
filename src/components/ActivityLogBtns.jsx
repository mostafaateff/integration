const ActivityLogBtns = ()=> {
    return(
        <div className="col-md-6 text-md-end  ms-3 mt-2">
        <nav className="nav nav-pills">
          <button className="btn btn-outline-dark me-1 btn-xs buttons "
          >
            Orders Details
          </button>
          <button className=" btn btn-outline-dark me-1 btn-xs buttons  active"
          >
            Activity Logs
          </button>
          <button className=" btn btn-outline-dark me-1 btn-xs buttons"
          >
            Call Clients 
          </button>
          <button className="btn btn-outline-dark me-1 btn-xs buttons">
            License
          </button>
        </nav>
      </div>
    )
}
export default ActivityLogBtns