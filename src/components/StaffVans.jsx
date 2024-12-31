import Emptyfile1 from "../assets/svg/Emptyfile1.svg";
import { useNavigate } from "react-router-dom";
import TransferIcon1 from "../assets/svg/TranseferIcon1.svg";

function InfoItem({ label, value }) {
  return (
    <h6
      className="d-flex justify-content-between align-items-center text-secondary"
      style={{ lineHeight: "26.24px" }}
    >
      {label}
      <span
        className=" text-dark"
        style={{
          fontWeight: "600px",
          lineHeight: "26.24px",
          marginLeft: "auto",
        }}
      >
        {value}
      </span>
    </h6>
  );
}
const StaffVans = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div> */}
        {/* <div className="container mt-4">
          <div className="row align-items-center mb-4 ">
            <div className="col-md-5">
              <h1 className="fontFamily-arial profileCss">Van Profile</h1>
            </div>
            <div className="col-md-5 text-md-end">
              <nav className="nav nav-pills">
                <button className="btn btn-outline-dark me-1 btn-xs buttons" onClick={()=> navigate("/van-profile")}>Orders</button>
                <button className="btn btn-outline-dark me-1 btn-xs buttons">History</button>
                <button className="btn btn-outline-dark me-1 btn-xs buttons">License</button>
                <button className="btn btn-outline-dark me-1 btn-xs buttons">Working Hours</button>
                <button className="btn btn-outline-dark btn-xs buttons" onClick={() => navigate("/Equipment")}>Equipment</button>
               <button className="btn btn-outline-dark me-1 btn-xs buttons">Services</button>
              </nav>
            </div>
            <div className="col-md-2 content-right">
              <button
                type="button"
                className=" btn  bg-transparent border rounded-2"
              >
                <i class="fa-solid fa-location-dot"></i>
                <span className="p-2">Location on map</span>
              </button>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div
            className="card p-3 my-3 col-md-12 "
            style={{ border: "2px solid #EAEAEA " }}
          >
            <div className="card-body p-2 sm:p-1 position-relative">
              <div className="container d-flex align-items-center justify-content-between">
                <div
                  className="input-group flex-nowrap rounded-2 "
                  style={{ maxWidth: "300px", height: "48px" }}
                >
                  <input
                    type="text"
                    className="form-control ps-4 bg-transparent rounded "
                    placeholder="Select Date"
                    aria-label="Select Date"
                    aria-describedby="addon-wrapping"
                  />
                  <span className="input-group-text bg-transparent border-0 CalenderStyle ">
                    <i className="fa-solid fa-calendar"></i>
                  </span>
                </div>
                <div className=" container d-flex justify-content-end align-items-center ">
                <div className="row d-flex justify-content-between align-items-center gap-1 ">
                  <button
                    type="button"
                    className="align-items-center flex-nowrap justify-content-start bg-transparent border rounded-2 btn-xs buttons"
                    style={{ width: "auto", height: "48px" }}
                  >
                    <img src={TransferIcon1} />
                    Transfere Staff
                  </button> 
                  <button
                  type="button"
                  className=" align-items-center flex-nowrap justify-content-between bg-transparent border rounded-2 btn-xs buttons"
                  style={{ width: "116px", height: "48px" }}
                >
                  + Add Staff
                </button>
 
                </div>
              </div>
              <div className=" d-flex  flex-column  align-items-center justify-content-center vh-100 ">
                <div className=" text-center ">
                  <div>
                    <img
                      src={Emptyfile1}
                      className="img-fluid "
                      alt="No Staff"
                    />
                  </div>
                  <div className="lh-lg StaffStyle ">
                    <div>No staff assigned yet.</div>
                    <div>Add staff to this van to get started.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StaffVans;
