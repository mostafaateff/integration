import FirstServicesIcons from "../assets/svg/FirstServiceIcon.svg";
import SecondServicesIcons from "../assets/svg/SecondServiceIcon.svg";
import SearchIcon from "../assets/svg/SearchIcon.svg";
import TransferIcon1 from "../assets/svg/TranseferIcon1.svg";
function ListInfoItem({ label, value }) {
  return (
    <h6
      className="d-flex justify-content-between align-items-center text-secondary grayColor"
      style={{ lineHeight: "26.24px" }}
    >
      {label}
      <span
        className=" text-dark grayColor"
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

const OrderDetailsCard = () => {
  return (
    <>
      <div className="col-md-12">
        <div
          className="card p-3 my-3 mr-5"
          style={{ border: "2px solid #EAEAEA " }}
        >
          <div className="card-body p-2 sm:p-1">
            <div className="container d-flex align-items-center justify-content-between gap-5">
              <div
                className="input-group flex-nowrap position-relative justify-content-s rounded-2"
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
              <div className=" container d-flex justify-content-end align-items-center ">
                <div className="row d-flex justify-content-between align-items-center gap-1 ">
                  <button
                    type="button"
                    className="align-items-center flex-nowrap justify-content-start bg-transparent border rounded-2 btn-xs buttons"
                    style={{ width: "auto", height: "48px" }}
                  >
                    <img src={TransferIcon1} />
                    Transfere Orders
                  </button>
                  <button
                    type="button"
                    className=" align-items-center flex-nowrap justify-content-end bg-transparent border rounded-2 btn-xs buttons"
                    style={{ width: "116px", height: "48px" }}
                  >
                    + Add Order
                  </button>
                </div>
              </div>
            </div>
            <div
              className="dropdown-menu p- text-body-secondary"
              style={{ maxwidth: "200px" }}
            ></div>
            <div class="accordion mt-5" id="accordionPanelsStayOpenExample ">
              <div class="accordion-item">
                <h2 class="accordion-header " id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button  bg-light text-dark btn-xs buttons"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    <div className="row justify-content-between w-100">
                      <div className="col-8">
                        Order
                        <span className="fw-bold g-1 text-dark m-2">#210</span>
                      </div>
                      <div className="col-4 d-flex justify-content-end">
                        <span className="text-dark fw-bold">5.510 EGP</span>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item ">
                        <div className="row ">
                          <li className=" fw-600 col-4">
                            <div className=" mx-2">
                              <ListInfoItem
                                label="Date:"
                                value="July 14 , 2024"
                              />
                              <ListInfoItem label="Payment:" value="Cash" />
                            </div>
                          </li>
                          <li className="list-group-item fw-600 col-8 border-0">
                            <div>
                              <ListInfoItem
                                label="Time:"
                                value="09:00 am 12:00 pm"
                              />
                              <ListInfoItem
                                label="Location:"
                                value="المنطقه السادسه,مدينه نصر,محافظه القاهره.."
                              />
                            </div>
                          </li>
                          <li className="list-group-item fw-600 col-6 border-0 mx-2">
                            <div>
                              <ListInfoItem
                                label="Car Model:"
                                value="Volkswagen ID.4 Pro S , 2021"
                              />
                            </div>
                          </li>
                        </div>
                      </li>
                      <li className="list-group-item  ">
                        <h4 className="fs-5">
                          <img src={FirstServicesIcons} />
                          Oil Services
                        </h4>
                        <div>
                          <div className="row">
                            <h6
                              style={{
                                fontWeight: "400px",
                                color: "#535353",
                              }}
                            >
                              Check Oil
                            </h6>
                            <div className="row mt-3">
                              <div className="col-md-10 col-sm-12 col-xs-12">
                                <div className="in-block">
                                  <ul className="p-0 m-0 in-block">
                                    <li>
                                      <span className="grayColor">
                                        Oil Leack:
                                      </span>
                                      <span className="itemInfo">200 EGP</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="in-block ml-4">
                                  <ul className="p-0 m-0 in-block">
                                    <li>
                                      <span className="grayColor">
                                        Check Engine Oil:
                                      </span>
                                      <span className="itemInfo">100 EGP</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-2 col-sm-12 col-xs-12 text-right p-0 m-0">
                                <h6 className="fw-bold">1000 EGP </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row">
                            <h6
                              style={{
                                fontWeight: "400px",
                                color: "#535353",
                              }}
                            >
                              Change Oil
                            </h6>
                            <div className="row mt-3">
                              <div className="col-md-10 col-sm-12 col-xs-12">
                                <div className="in-block">
                                  <ul className="p-0 m-0 in-block">
                                    <li>
                                      <span className="grayColor">
                                        Oil Brand:
                                      </span>
                                      <span className="itemInfo">Shell</span>
                                    </li>
                                  </ul>
                                </div>

                                <div className="in-block ml-4">
                                  <ul className="p-0 m-0 in-block">
                                    <li>
                                      <span className="grayColor">
                                        Oil Viscosity:
                                      </span>
                                      <span className="itemInfo">5W - 30</span>
                                    </li>
                                  </ul>
                                </div>

                                <div className="in-block ml-4">
                                  <ul className="p-0 m-0 in-block">
                                    <li>
                                      <span className="grayColor">
                                        Oil Liters:
                                      </span>
                                      <span className="itemInfo">5L</span>
                                    </li>
                                  </ul>
                                </div>

                                <div className="in-block ml-4">
                                  <ul className="p-0 m-0 in-block">
                                    <li>
                                      <span className="grayColor">
                                        Oil Filter:
                                      </span>
                                      <span className="itemInfo">Bosh</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="col-md-2 col-sm-12 col-xs-12 text-right p-0 m-0">
                                <h6 className="fw-bold">1000 EGP </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item ">
                        <h4 className="fs-5">
                          <img src={SecondServicesIcons} />
                          Tire Services
                        </h4>
                        <div>
                          <div className="row">
                            <h6
                              style={{
                                fontWeight: "400px",
                                color: "#535353",
                              }}
                            >
                              Change Tire
                            </h6>
                            <div className="row mt-3">
                              <div className="col-md-10 col-sm-12 col-xs-12">
                                <div className="in-block">
                                  <ul className="p-0 m-0 in-block">
                                    <li>
                                      <span className="grayColor">Type:</span>
                                      <span className="itemInfo">Tubeless</span>
                                    </li>
                                  </ul>
                                </div>

                                <div className="in-block ml-4">
                                  <ul className="p-0 m-0 in-block">
                                    <li>
                                      <span className="grayColor">Brand:</span>
                                      <span className="itemInfo">Pirelli</span>
                                    </li>
                                  </ul>
                                </div>

                                <div className="in-block ml-4">
                                  <ul className="p-0 m-0 in-block">
                                    <li>
                                      <span className="grayColor">
                                        Made in:
                                      </span>
                                      <span className="itemInfo">5L</span>
                                    </li>
                                  </ul>
                                </div>

                                <div className="in-block ml-4">
                                  <ul className="p-0 m-0 in-block">
                                    <li>
                                      <span className="grayColor">
                                        Number of tires:
                                      </span>
                                      <span className="itemInfo">1 tire</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="col-md-2 col-sm-12 col-xs-12 text-right p-0 m-0">
                                <h6 className="fw-bold">4000 EGP </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item ">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    class="accordion-button bg-light text-dark btn-xs buttons"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    <div className="row justify-content-between w-100">
                      <div className="col-8">
                        Order
                        <span className="fw-bold g-1 text-dark m-2">#115</span>
                      </div>
                      <div className="col-4 d-flex justify-content-end">
                        <span className="text-dark fw-bold">3.250 EGP</span>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div class="accordion-body"></div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button
                    class="accordion-button collapsed  bg-light text-dark btn-xs buttons"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    <div className="row justify-content-between w-100">
                      <div className="col-8">
                        Order
                        <span className="fw-bold g-1 text-dark m-2">#65</span>
                      </div>
                      <div className="col-4 d-flex justify-content-end">
                        <span className="text-dark fw-bold">5.510 EGP</span>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div class="accordion-body"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <OrdersButtonCards ListInfoItem={ListInfoItem}/> */}
      </div>
    </>
  );
};

export default OrderDetailsCard;
