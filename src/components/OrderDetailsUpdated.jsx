import React, { useState } from "react";
import client from "../assets/images/Ellipse 1.png";
import './OrderDetailsUpdated.css'

export default function OrderDetailsUpdated() {
  const [isOilServiceOpen, setIsOilServiceOpen] = useState(false);

  const toggleOilServiceDetails = () => {
    setIsOilServiceOpen(!isOilServiceOpen);
  };

  return (
    <>
      <div className="order-details d-flex justify-content-between align-items-center my-2 mx-4 ">
        <div className="order-number">
          <p className=" fs-4 text-muted mt-2">
            Order <span className=" fw-bolder text-black">#210</span>
          </p>
        </div>
        <div>
          <button className="btn border border-1 p-2 mx-3 text-muted">
            <i className="fa-solid fa-truck "></i> Assign To van
          </button>
          <button className="btn border border-1 p-2 text-muted">
            <i className="fa-solid fa-location-dot me-1"></i>
            Location on map
          </button>
        </div>
      </div>
      <div className="details-filter mx-4">
        <button className="btn">Order Details</button>
        <button className="btn">Activity logs</button>
        <button className="btn">Client Comments</button>
      </div>
      <div className="service-details">
        <div className="row m-4  justify-content-between">
          <div className=" col-8 border border-1 rounded-2  ">
            <div className=" d-flex justify-content-between p-2 ">
              <h3 className="pt-2">Order Details</h3>
              <button className="btn border border-1  text-muted">
                <i className="fa-solid fa-plus fw-light"></i> Add Service
              </button>
            </div>

            <div className="allDetails">
              <div className="oil-service d-flex justify-content-between align-items-center my-3 px-3 pt-2 text-bg-warning bg-opacity-25 rounded-2 ">
                <div>
                  <i className="fa-solid fa-gas-pump text-warning fs-5"></i>
                  <p className=" d-inline-block mx-2 fw-semibold fs-5">
                    Oil Services
                  </p>
                </div>
                <div className="d-flex justify-content-between pt-1">
                  <p className="mx-5  fw-bolder">1150 EGP</p>
                  <button
                    className="btn p-0 "
                    onClick={toggleOilServiceDetails}
                  >
                    <i
                      className={`fa-solid fa-chevron-${
                        isOilServiceOpen ? "up" : "down"
                      } `}
                    ></i>
                  </button>
                </div>
              </div>
              {isOilServiceOpen && (
                <>
                  <div className="oil-service-details p-3 bg-light rounded-2">
                    <p className="fs-6 text-muted">Check Oil</p>
                    <div className="d-flex  justify-content-between">
                      <div className="  d-flex ">
                        <p className=" small me-2">Oil Leak</p>
                        <p className=" small mx-2 fw-semibold">200.0 EGP</p>
                        <p className=" small mx-2">Check Engine oil</p>
                        <p className=" small mx-2 fw-semibold">100.0 EGP</p>
                      </div>
                      <div className="  d-flex  ">
                        <p className=" fw-semibold me-3">300.0 EGP</p>
                        <i className="fa-solid fa-pen small text-muted me-3 mt-1 fs-6"></i>
                        <i className="fa-solid fa-trash-can mall text-danger mt-1 fs-6 "></i>
                      </div>
                    </div>
                  </div>
                  <div className="oil-service-details p-3 bg-light rounded-2">
                    <p className="fs-6 text-muted">Change Oil</p>
                    <div className="d-flex  justify-content-between">
                      <div className=" d-flex ">
                        <p className="small me-2">Oil Brand</p>
                        <p className=" small fw-semibold me-2">Shell</p>
                        <p className="small me-2">Oil Viscosity</p>
                        <p className=" small fw-semibold me-2 ">5W - 30</p>
                        <p className=" small fw-semibold me-2 ">Oil Liters</p>
                        <p className=" small fw-semibold me-2">3 L</p>
                        <p className=" small fw-semibold me-2">Oil Filter</p>
                        <p className=" small fw-semibold ">American</p>
                      </div>
                      <div className="d-flex ">
                        <p className=" fw-semibold me-3">300.0 EGP</p>
                        <i className="fa-solid fa-pen small text-muted me-3 mt-1 fs-6"></i>
                        <i className="fa-solid fa-trash-can mall text-danger mt-1 fs-6 "></i>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="tire-service d-flex justify-content-between align-items-center my-3 px-3 pt-2 bg-secondary bg-opacity-10 rounded-2 ">
                <div>
                  <i className="fa-brands fa-empire fs-5 text-light-emphasis"></i>
                  <p className=" d-inline-block mx-2 fw-semibold fs-5">
                    Tire Services
                  </p>
                </div>
                <div className=" d-flex justify-content-between pt-1 ">
                  <p className="mx-5 fw-bolder">1150 EGP</p>
                  <i className="fa-solid fa-chevron-down pt-1"></i>
                </div>
              </div>
              <div className="battery-service d-flex justify-content-between align-items-center my-3 px-3 pt-2 bg-danger bg-opacity-10 rounded-2 ">
                <div>
                  <i className="fa-solid fa-car-battery fs-5 text-danger"></i>{" "}
                  <p className=" d-inline-block mx-2 fw-semibold fs-5">
                    Tire Services
                  </p>
                </div>
                <div className=" d-flex justify-content-between pt-1 ">
                  <p className="mx-5 fw-bolder">200.0 EGP</p>
                  <i className="fa-solid fa-chevron-down pt-1"></i>
                </div>
              </div>
              <div className="carCare-service d-flex justify-content-between align-items-center my-3 px-3 pt-2 bg-info bg-opacity-10 rounded-2 ">
                <div>
                  <i className="fa-solid fa-car-on fs-5 text-info"></i>
                  <p className=" d-inline-block mx-2 fw-semibold fs-5">
                    Car Care Services
                  </p>
                </div>
                <div className=" d-flex justify-content-between pt-1 ">
                  <p className="mx-5 fw-bolder">600.0 EGP</p>
                  <i className="fa-solid fa-chevron-down pt-1"></i>
                </div>
              </div>
              <div className="Total d-flex justify-content-between align-items-center my-5 px-4 pt-2 bg-black bg-opacity-25 rounded-2 ">
                <p className="  mx-3 fw-semibold fs-5">Total Price : </p>
                <p className=" me-5 pe-2 fw-bolder">6265 EGP</p>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="order-data border border-1 rounded-2 p-3 ms-4 small">
              <p className=" fw-bolder fs-4 ">Order #210</p>
              <div className=" d-flex justify-content-between ">
                <div>
                  <p>Services:</p>
                </div>
                <div className="services-icons">
                  <i className="fa-solid fa-gas-pump text-warning mx-1 fs-5 gas-icon "></i>
                  <i className="fa-brands fa-empire  text-light-emphasis mx-1 fs-5 tire-icon "></i>
                  <i className="fa-solid fa-car-battery  text-danger mx-1 fs-5 battery-icon "></i>
                  <i className="fa-solid fa-car-on  text-info mx-1 fs-5 car-icon "></i>
                </div>
              </div>
              <div className=" d-flex justify-content-between ">
                <p>Order Date:</p>
                <p>july 11 , 2024</p>
              </div>
              <div className=" d-flex justify-content-between ">
                <p>Car Model:</p>
                <p>Volkswagen ID.4 Pro S, 2021</p>
              </div>
              <hr />
              <div className=" d-flex justify-content-between ">
                <p className="fw-semibold">Order Info</p>
                <div className="services-icons">
                  <i className="fa-regular fa-comment-dots fs-5 mx-3"></i>
                  <i className="fa-solid fa-pen fs-5"></i>
                </div>
              </div>
              <div className=" d-flex justify-content-between ">
                <p>Requested Date:</p>
                <p>July 14 . 2024</p>
              </div>
              <div className=" d-flex justify-content-between ">
                <p>Time:</p>
                <p>09:00 am 12:00 pm</p>
              </div>
              <div className=" d-flex justify-content-between ">
                <p>Payment:</p>
                <p>Cash</p>
              </div>
              <div className=" d-flex justify-content-between ">
                <p>Location:</p>
                <p>Nasr City</p>
              </div>
              <div className=" d-flex justify-content-between ">
                <p>Van ID:</p>
                <p>Van #02</p>
              </div>
            </div>
            <div className="client-data border border-1 rounded-2 p-3 ms-4 my-4 small">
              <p className=" fs-5 fw-semibold">Client</p>
              <div className=" d-flex justify-content-between">
                <div className=" d-flex justify-content-between ">
                  <div className=" mt-1">
                    <img src={client} alt="" />
                  </div>
                  <div className=" mx-2">
                    <p className="my-0 fs-6 fw-medium">Menna Ashraf</p>
                    <p className=" text-muted fs-6">
                      <i className="fa-solid fa-cake-candles"></i> 12/2/1998
                    </p>
                  </div>
                </div>
                <div>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <p className=" fs-5 fw-semibold">Client Info</p>
              <p className=" fs-6  text-muted">
                <i className="fa-solid fa-phone me-2"></i>
                01003247882
              </p>
              <p className=" fs-6  text-muted">
                <i className="fa-regular fa-envelope me-2"></i>
                mahitabnabil12@gmail.com
              </p>
              <p className=" fs-6  text-muted">
                <i className="fa-solid fa-car me-2"></i>5 Vehicles
              </p>
              <p className=" text-muted">
                <i className="fa-solid fa-circle me-2"></i>
                Last activity : 2 July 2024 at 04:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
