import React from "react";
import Logo from "../assets/images/Group.png";
import SmollLogo from "../assets/images/Smoll_ESTBN_Logo.png";
import "./Sidenav.css";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Orders from "../assets/svg/Orders.svg";
import Clients from "../assets/svg/Clients.svg";
import Vehicles from "../assets/svg/Vehicles.svg";
import Calendar from "../assets/svg/Calendar.svg";
import Staff from "../assets/svg/Staff.svg";
import Analysis from "../assets/svg/Analytics.svg";
import Stock from "../assets/svg/Stock.svg";
import Equipments from "../assets/svg/Equipments.svg";
import Services from "../assets/svg/Services.svg";

import Settings from "../assets/svg/Settings.svg";
import Logout from "../assets/svg/Logout.svg";

import { useNavigate } from "react-router-dom";

function SideNav({ isOppen, setIsOppen }) {
  const navigate = useNavigate();

  return (
    <div className="bg-black position-relative vh-100">
      {isOppen ? (
        <button
          type="button"
          className=" tuggle-menu text-darck bg-light"
          onClick={() => setIsOppen(false)}
        >
          <KeyboardArrowLeftIcon />
        </button>
      ) : (
        <button
          className={` tuggle-menu text-darck bg-light `}
          type="button"
          onClick={() => setIsOppen(true)}
        >
          <KeyboardArrowRightIcon />
        </button>
      )}

      <div
        className={`text-light bg-black ${
          window.matchMedia("(max-width: 700px)").matches && !isOppen
            ? "d-none"
            : ""
        }`}
      >
        <div className="imgeOfSidenav ">
          {isOppen ? (
            <img className="w-100" src={Logo} alt="Logo" />
          ) : (
            <img className="w-100" src={SmollLogo} alt="Logo" />
          )}
        </div>
        <div
          className={`
          ${isOppen ? "allMinu" : "allMinu m-0"}
          ${
            window.matchMedia("(max-width: 500px)").matches && isOppen
              ? "justify-content-evenly"
              : ""
          }
        `}
        >
          <ul
            className={`
            ${isOppen ? "list-unstyled" : "list-unstyled allMinuInClose"}
            ${
              window.matchMedia("(max-width: 700px)").matches && !isOppen
                ? "w-100"
                : ""
            }
          `}
          >
            {isOppen ? <p className="Pmanu">Menu</p> : null}
            <li className={`${isOppen ? "mb-1" : "p-2 m-1"} sbishlLiOfmenu`}>
              {!isOppen ? (
                <img src={Orders} alt="" />
              ) : (
                <>
                  <button
                    className="sbishlLiOfmenu btn btn-toggle text-light align-items-center rounded collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#home-collapse"
                    aria-expanded="false"
                  >
                    <span className="me-2 ">
                      <img src={Orders} alt="" />
                    </span>
                    Orders
                    <span className="ps-5 ">
                      <KeyboardArrowRightIcon />
                    </span>
                  </button>
                  <div className="collapse" id="home-collapse">
                    <ul className="ms-5 btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>Overview</li>
                      <li>Updates</li>
                      <li>Reports</li>
                    </ul>
                  </div>
                </>
              )}
            </li>
            <li className={`${isOppen ? "mb-1" : "p-2 m-1"} liOfmenu`}>
              {!isOppen ? (
                <img src={Clients} alt="" />
              ) : (
                <>
                  <span className="me-2 ">
                    <img src={Clients} alt="" />
                  </span>
                  Clients
                </>
              )}
            </li>
            <li className={`${isOppen ? "mb-1" : "p-2 m-1"} liOfmenu`}>
              {!isOppen ? (
                <img src={Vehicles} alt="" />
              ) : (
                <>
                  <span className="me-2 ">
                    <img src={Vehicles} alt="" />
                  </span>
                  Vehicles
                </>
              )}
            </li>
            <li className={`${isOppen ? "mb-1" : "p-2 m-1"} liOfmenu`}>
              {!isOppen ? (
                <img src={Calendar} alt="" />
              ) : (
                <>
                  <span className="me-2 ">
                    <img src={Calendar} alt="" />
                  </span>
                  Calendar
                </>
              )}
            </li>
            <li
              onClick={() => {
                navigate("/staff");
              }}
              className={`${isOppen ? "mb-1" : "p-2 m-1"} liOfmenu`}
            >
              {!isOppen ? (
                <img src={Staff} alt="" />
              ) : (
                <>
                  <span className="me-2 ">
                    <img src={Staff} alt="" />
                  </span>
                  Staff
                </>
              )}
            </li>
            <li className={`${isOppen ? "mb-1" : "p-2 m-1"} liOfmenu`}>
              {!isOppen ? (
                <img src={Analysis} alt="" />
              ) : (
                <>
                  <span className="me-2 ">
                    <img src={Analysis} alt="" />
                  </span>
                  Analysis
                </>
              )}
            </li>
            <li className={`${isOppen ? "mb-1" : "p-2 m-1"} liOfmenu`}>
              {!isOppen ? (
                <img src={Stock} alt="" />
              ) : (
                <>
                  <span className="me-2 ">
                    <img src={Stock} alt="" />
                  </span>
                  Stock
                </>
              )}
            </li>
            <li className={`${isOppen ? "mb-1" : "p-2 m-1"} liOfmenu`}>
              {!isOppen ? (
                <img src={Equipments} alt="" />
              ) : (
                <>
                  <span className="me-2 ">
                    <img src={Equipments} alt="" />
                  </span>
                  Equipments
                </>
              )}
            </li>
            <li className={`${isOppen ? "mb-1" : "p-2 m-1"} liOfmenu`}>
              {!isOppen ? (
                <img src={Services} alt="" />
              ) : (
                <>
                  <span className="me-2 ">
                    <img src={Services} alt="" />
                  </span>
                  Services
                </>
              )}
            </li>
          </ul>
          <div
            className={`${
              isOppen
                ? "Settings text-light"
                : "Settings text-light allMinuInClose"
            }`}
          >
            <ul>
              <li className={`${isOppen ? "mb-1" : "p-2 m-1"} liOfmenu`}>
                {!isOppen ? (
                  <img src={Settings} alt="" />
                ) : (
                  <>
                    <span className="me-2 ">
                      <img src={Settings} alt="" />
                    </span>
                    Settings
                  </>
                )}
              </li>
              <li className={`${isOppen ? "mb-1" : "p-2 m-1"} liOfmenu`}>
                {!isOppen ? (
                  <img src={Logout} alt="" />
                ) : (
                  <>
                    <span className="me-2 ">
                      <img src={Logout} alt="" />
                    </span>
                    Log Out
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
