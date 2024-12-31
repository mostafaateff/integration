import { useState } from "react";
import VanProfile from "../pages/Vehicles/VanProfile";
import StaffVans from "./StaffVans";
import Equipment from "./Equipment";
import OrderDetailsCard from "./OrderDetailsCard ";
import VanProfileCard from "./Cards/VanProfileCard";

function VanCardBtns({ setActivePage, activePage }) {
  const getButtonClass = (page) => {
    return activePage === page
      ? "btn btn-dark me-1 btn-xs buttons"
      : "btn btn-outline-dark me-1 btn-xs buttons";
  };
  return (
    <>
      <div className="container mt-4">
        {/* Header Section */}
        <div className="row align-items-center mb-4 ">
          <div className="col-md-3">
            <h1 className="fontFamily-arial profileCss">Van Profile</h1>
          </div>
          <div className="col-md-6 text-md-end">
            <nav className="nav nav-pills">
              <button
                className={getButtonClass("orders")}
                onClick={() => setActivePage("orders")}
              >
                Orders
              </button>
              <button
                className={getButtonClass("StaffVans")}
                onClick={() => setActivePage("StaffVans")}
              >
                Staff
              </button>
              <button
                className={getButtonClass("WorkingDays")}
                onClick={() => setActivePage("WorkingDays")}
              >
                Working Days
              </button>
              <button className="btn btn-outline-dark me-1 btn-xs buttons">
                License
              </button>
              <button
                className={getButtonClass("Equipment")}
                onClick={() => setActivePage("Equipment")}
              >
                Equipment
              </button>
              <button
                className={getButtonClass("Services")}
                onClick={() => setActivePage("Services")}
              >
                Services
              </button>
            </nav>
          </div>
          <div className="col-md-3 content-right">
            <button
              type="button"
              className=" btn  bg-transparent border rounded-2 btn-xs buttons"
            >
              <i class="fa-solid fa-location-dot"></i>
              <span className="p-2">Location on map</span>
            </button>
          </div>
          {/* <div>
            {activePage === "VanProfile" && (
              <div className="mr-5">
                <div className="row m-0">
                  <VanProfileCard />
                  <OrderDetailsCard />
                </div>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
}
export default VanCardBtns;
