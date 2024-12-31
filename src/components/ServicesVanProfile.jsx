import React, { useState } from "react";
import SearchIcon from "../assets/svg/SearchIcon.svg";
import Emptyfile1 from "../assets/svg/Emptyfile1.svg";
import AssignServiceToVan from "./Modals/AssignServiceToVan";
const ServicesVanProfile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AssignServiceToVan show={show} handleClose={handleClose} />
      <div className="col-md-12 ">
        <div className="container">
          <div
            className="card p-3 my-3 col-md-12 "
            style={{ border: "2px solid #EAEAEA " }}
          >
            <div className="card-body p-2 sm:p-1 position-relative">
              <div className="container d-flex align-items-center justify-content-between">
                <div
                  className="input-group flex-nowrap position-relative justify-content-s rounded-2 "
                  style={{ maxWidth: "300px", height: "48px" }}
                >
                  <input
                    type="text"
                    className={`form-control ps-4 bg-transparent rounded pright`}
                    placeholder={`Search`}
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                  <img src={SearchIcon} className="search-icon" />
                </div>
                <button
                  onClick={handleShow}
                  type="button"
                  className=" align-items-center flex-nowrap justify-content-between bg-transparent border rounded-2 btn-xs buttons text-secondary"
                  style={{ width: "130px", height: "48px" }}
                >
                  + Assign Service
                </button>
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
                    <div>No Services added yet. </div>
                    <div>Start by adding your first service.</div>
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

export default ServicesVanProfile;
