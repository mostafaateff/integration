import TrashIcon from "../assets/svg/TrashIcon.svg";
import TimeDropDown from "./TimeDropDown";
import  AddIcon  from"../assets/svg/AddIcon.svg";

const WorkingDays = () => {
  return (
    <>
      <div className="col-md-12 ">
        <div
          className="card p-3 my-3 mr-5"
          style={{ border: "2px solid #EAEAEA " }}
        >
          <div className="card-body p-2 sm:p-1">
            <div>
              <h4 className=" w-100 border-bottom p-3 "> Working days </h4>
            </div>
            <div
              className="accordion mt-3 border-bottom w-100"
              id="accordionPanelsStayOpenExample"
            >
              {[
                "Saturday",
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ].map((day, index) => (
                <div
                  class="accordion mt-3 border-bottom w-100 "
                  id="accordionPanelsStayOpenExample "
                >
                  <div className="accordion-item " key={index}>
                    <h2
                      className="accordion-header border-bottom w-100  "
                      id={`panelsStayOpen-headingTwo-${day}`}
                    >
                      <div>
                      <button
                        className="accordion-button bg-transparent text-dark btn-xs buttons"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#panelsStayOpen-collapse-${day}`}
                        aria-expanded="false"
                        aria-controls={`panelsStayOpen-collapse-${day}`}
                      >
                        <div className="row justify-content-between w-100">
                          <div className="col-8">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id={`flexSwitchCheck-${day}`}
                              />
                              <label
                                className="form-check-label fw-bold"
                                htmlFor={`flexSwitchCheck-${day}`}
                              >
                                {day}
                              </label>
                            </div>
                          </div>
                          <div className="col-4 d-flex justify-content-end">
                            <span className="text-dark fw-bold buttons">8 orders</span>
                          </div>
                        </div>
                      </button>
                      </div>
                    </h2>
                    <div
                      id={`panelsStayOpen-collapse-${day}`}
                      class="accordion-collapse collapse"
                      aria-labelledby={`panelsStayOpen-heading-${day}`}
                    >
                      <div class="accordion-body">
                        <div className="row ">
                          <div className="d-flex align-item-center ">
                            <div className="col-4">
                              <h6 className="mb-0 buttons ">From</h6>
                              <TimeDropDown />
                            </div>
                            <span className="mx-3 d-flex justify-content-center align-items-center  mt-0 fs-4">-</span>
                            <div className="col-4">
                              <h6 className="mb-0 buttons"> to</h6>
                              <TimeDropDown />
                            </div>
                            <div className="col-2 ">
                              <div  className="ms-2">
                              <h6 className="buttons mb-0">Slots</h6>
                              <div class="input-group flex-nowrap">
                                <input className="SlotCss  rounded"
                                  type="number"
                                  class="form-control"
                                  placeholder="select no."
                                  aria-describedby="addon-wrapping"
                                  min="0" 
                                 step="1" 
                                />
                              </div>
                              </div>
                            </div>
                            <div className="col-1  me-3 m-4" >
                            <button class="btn p-0 border-0">
                              <img src={TrashIcon} className="w-100 "  />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row ">
                          <div className="d-flex align-item-center ">
                            <div className="col-4">
                              <h6 className="mb-0 buttons ">From</h6>
                              <TimeDropDown />
                            </div>
                            <span className="mx-3 d-flex justify-content-center align-items-center  mt-0 fs-4">-</span>
                            <div className="col-4">
                              <h6 className="mb-0 buttons"> to</h6>
                              <TimeDropDown />
                            </div>
                            <div className="col-2 ">
                              <div  className="ms-2">
                              <h6 className="buttons mb-0">Slots</h6>
                              <div class="input-group flex-nowrap">
                                <input className="SlotCss  rounded"
                                  type="number"
                                  class="form-control"
                                  placeholder="select no."
                                  aria-describedby="addon-wrapping"
                                  min="0"  
                                  step="1" 
                                />
                              </div>
                              </div>
                            </div>
                            <div className="col-1  me-3 m-4" >
                            <button class="btn p-0 border-0">
                              <img src={AddIcon} className="w-100 "  />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingDays;

