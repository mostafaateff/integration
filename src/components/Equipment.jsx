import SearchIcon from "../assets/svg/SearchIcon.svg";
import Emptyfile1 from "../assets/svg/Emptyfile1.svg";
import { useNavigate } from "react-router-dom";
import VanProfileCard from "./Cards/VanProfileCard";
import VanCardBtns from "./VanCardBtns";

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
const Equipment = () => {
  const navigate = useNavigate();
  return (
    <>
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
                    className={
                      "form-control ps-4 bg-transparent rounded pright"
                    }
                    placeholder={"Search"}
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                  <img src={SearchIcon} className="search-icon" />
                </div>
                <div className=" container d-flex justify-content-end align-items-center ">
                  <div className="row d-flex justify-content-between align-items-center gap-1 ">
                    <button
                      type="button"
                      className="align-items-center flex-nowrap justify-content-start bg-transparent border rounded-2 btn-xs buttons"
                      style={{ width: "auto", height: "48px" }}
                    >
                      <img src={TransferIcon1} />
                      Transfere Equipment
                    </button>
                    <button
                      type="button"
                      className=" align-items-center flex-nowrap justify-content-between bg-transparent border rounded-2 btn-xs buttons"
                      style={{ width: "130px", height: "48px" }}
                    >
                      + Add Equipment
                    </button>
                  </div>
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
                    <div>No equipment added yet.</div>
                    <div>Start by adding your first item.</div>
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
export default Equipment;
