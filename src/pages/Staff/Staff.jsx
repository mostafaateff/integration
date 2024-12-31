import {
  Autocomplete,
  Box,
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  Slider,
  TextField,
} from "@mui/material";
import { Button, Modal } from "react-bootstrap";
import { CREATE_NEW_STUFF } from "../../URLs/Apis";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import AddIcon from "@mui/icons-material/Add";
import Star from "../../assets/svg/star.svg";
import "./Staff.css";
import XIcon from "../../assets/svg/xIcon.svg";
import ArrUp from "../../assets/svg/ArrUp.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GET_ALL_STAFF_USERS } from "../../URLs/Apis";
import AddPhoto from "../../assets/svg/AddPhoto.svg";

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

function Staff() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setAddMember({
      name: "",
      email: "",
      phone_number: "",
      birth_date: "",
      gender: "",
    });
  };
  const handleShow = () => setShow(true);
  const gender = ["ذكر", "انثي"];
  const [addMember, setAddMember] = useState({
    name: "",
    email: "",
    phone_number: "",
    birth_date: "",
    gender: "",
  });
  const addMemberRequast = () => {
    const headers = {
      Authorization:
        "Bearer 254|KSKd4yoSLnEauMckPA28IJBOIB7QddQC8I90QP7Te1cdeb0d",
    };
    axios
      .post(CREATE_NEW_STUFF, addMember, { headers })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
    setAddMember({
      name: "",
      email: "",
      phone_number: "",
      birth_date: "",
      gender: "",
    });
    setShow(false);
  };

  const [staffData, setStaffData] = useState([]);
  useEffect(() => {
    getStaffData();
  }, []);
  const getStaffData = () => {
    const headers = {
      Authorization:
        "Bearer 338|URoHV9kMvJABmgvvrUzTxexaQhMfPL1FmyVCvRrEabef1878",
    }; // auth header with bearer token

    axios
      .get(GET_ALL_STAFF_USERS, { headers })
      .then((response) => {
        console.log(response.data);
        setStaffData(response.data.data.stuffs);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [openFilterjob, setOpenFilterjob] = useState(true);
  const [openFilterdate, setOpenFilterdate] = useState(true);
  const [openFilterEx, setOpenFilterEx] = useState(true);
  const [openFilterRate, setOpenFilterRate] = useState(true);
  const [filterBy, setFilterby] = useState({
    engineers: true,
    drivers: false,
    technicians: false,
    joinDate: "",
    rangeExperResult: 0,
    rangeRatesResult: 0,
  });
  const submitFilterBy = () => {
    console.log(filterBy);
    setFilterby({
      engineers: false,
      drivers: false,
      technicians: false,
      joinDate: "",
      rangeExperResult: 0,
      rangeRatesResult: 0,
    });
  };

  const gotToMemberPage = () => {
    navigate("/staff/:667");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new stuff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField
            value={addMember.name}
            className="w-100 mb-4"
            label="First Name"
            variant="outlined"
            onChange={(e) => {
              setAddMember({ ...addMember, name: e.target.value });
            }}
          />
          <TextField
            className="w-100 mb-4"
            label="Email"
            variant="outlined"
            value={addMember.email}
            onChange={(e) => {
              setAddMember({ ...addMember, email: e.target.value });
            }}
          />
          <TextField
            className="w-100 mb-4"
            label="Mobile Number"
            variant="outlined"
            value={addMember.phone_number}
            onChange={(e) => {
              setAddMember({ ...addMember, phone_number: e.target.value });
            }}
          />
          <TextField
            className="w-100 mb-4"
            label="Birth Date"
            type="date"
            placeholder="DD/MM/YYYY"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            value={addMember.birth_date}
            onChange={(e) => {
              setAddMember({ ...addMember, birth_date: e.target.value });
            }}
          />
          <div className="form-group">
            <Autocomplete
              disablePortal
              options={gender}
              renderInput={(params) => <TextField {...params} label="Gender" />}
              onChange={(event, newValue) =>
                setAddMember({ ...addMember, gender: newValue })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMemberRequast}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="ps-5 pe-5 position-relative">
        <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 350, padding: 3 }} role="presentation">
            <div className="filterBy-title">
              <span className="resetAll">Reset all</span>
              <span className="filterBy_theTitle">Filter By</span>
              <div onClick={toggleDrawer(false)}>
                <img className="" src={XIcon} alt="" />
              </div>
            </div>
            <div className="filterBy-groping">
              <div className="filterBy-jobTitle">
                <div
                  className="front"
                  onClick={() => setOpenFilterjob(!openFilterjob)}
                >
                  <span>Job Title</span>
                  <img
                    src={ArrUp}
                    className={`${openFilterjob ? null : "rotat180"}`}
                    alt=""
                  />
                </div>
                <div className={`back ${openFilterjob ? null : "d-none"}`}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={filterBy.engineers}
                          inputProps={{ "aria-label": "controlled" }}
                          onChange={(t) => {
                            setFilterby({
                              ...filterBy,
                              engineers: t.target.checked,
                            });
                          }}
                        />
                      }
                      label="Engineers"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={filterBy.drivers}
                          inputProps={{ "aria-label": "controlled" }}
                          onChange={(t) => {
                            setFilterby({
                              ...filterBy,
                              drivers: t.target.checked,
                            });
                          }}
                        />
                      }
                      label="Drivers"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={filterBy.technicians}
                          inputProps={{ "aria-label": "controlled" }}
                          onChange={(t) => {
                            setFilterby({
                              ...filterBy,
                              technicians: t.target.checked,
                            });
                          }}
                        />
                      }
                      label="Technicians"
                    />
                  </FormGroup>
                </div>
              </div>
              <div className="filterBy-joineddate">
                <div
                  className="front"
                  onClick={() => setOpenFilterdate(!openFilterdate)}
                >
                  <span>Joined date</span>
                  <img
                    src={ArrUp}
                    className={`${openFilterdate ? null : "rotat180"}`}
                    alt=""
                  />
                </div>
                <div className={`back ${openFilterdate ? null : "d-none"}`}>
                  <TextField
                    className="w-100"
                    label="Birth Date"
                    type="date"
                    placeholder="DD/MM/YYYY"
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      },
                    }}
                    value={filterBy.joinDate}
                    onChange={(e) => {
                      setFilterby({ ...filterBy, joinDate: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="filterBy-experience">
                <div
                  className="front"
                  onClick={() => setOpenFilterEx(!openFilterEx)}
                >
                  <span>Experience</span>
                  <img
                    src={ArrUp}
                    className={`${openFilterEx ? null : "rotat180"}`}
                    alt=""
                  />
                </div>
                <div className={`back ${openFilterEx ? null : "d-none"}`}>
                  <Slider
                    value={filterBy.rangeExperResult}
                    onChange={(t) => {
                      setFilterby({
                        ...filterBy,
                        rangeExperResult: t.target.value,
                      });
                    }}
                    aria-label="Temperature"
                    defaultValue={0}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={10}
                  />
                  <div className="range-from-to">
                    <div className="from">0 years</div>
                    <div className="range-result">
                      {filterBy.rangeExperResult}
                    </div>
                    <div className="to">+10 years</div>
                  </div>
                </div>
              </div>
              <div className="filterBy-rates">
                <div
                  className="front"
                  onClick={() => setOpenFilterRate(!openFilterRate)}
                >
                  <span>Rates</span>
                  <img
                    src={ArrUp}
                    className={`${openFilterRate ? null : "rotat180"}`}
                    alt=""
                  />
                </div>
                <div className={`back ${openFilterRate ? null : "d-none"}`}>
                  <Slider
                    value={filterBy.rangeRatesResult}
                    onChange={(t) => {
                      setFilterby({
                        ...filterBy,
                        rangeRatesResult: t.target.value,
                      });
                    }}
                    aria-label="Temperature"
                    defaultValue={0}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={10}
                  />
                  <div className="range-from-to">
                    <div className="from">0 star</div>
                    <div className="range-result">
                      {filterBy.rangeRatesResult}
                    </div>
                    <div className="to">5 stars</div>
                  </div>
                </div>
              </div>
              <button onClick={submitFilterBy} className="filterBy-Sub">
                Show {0} results
              </button>
            </div>
          </Box>
        </Drawer>
        <div className="staff-hader">
          <div className="staff-header_title">Staff</div>
          <div className="staff-header_edete">
            <div className="staff-header_edete-icon mainBorder me-15">
              <SearchIcon />
            </div>
            <div
              onClick={toggleDrawer(true)}
              className="staff-header_edete-icon mainBorder me-15"
            >
              <TuneIcon />
            </div>
            <div
              onClick={handleShow}
              className="staff-header_edete-icon mainBorder d-flex "
            >
              <AddIcon />
              <span className="ms-1 d-flex">Add Member</span>
            </div>
          </div>
        </div>
        <div className="staff-cards mainBorder">
          {staffData.map((response) => {
            return (
              <div key={response.id} className="staff-cards-card mainBorder">
                <div className="staff-cards-card_title">
                  <div className="staff-cards-card_jobT">
                    {response.job_titles.map((title) => {
                      return <>{title.title}</>;
                    })}
                  </div>
                  <div className="staff-cards-card_rank">
                    4.5
                    <img src={Star} alt="" />
                  </div>
                </div>
                <div className="staff-cards-card_staffInfo">
                  <div className="staff-cards-card_staffInfo_img">
                    {response.profile_photo ? (
                      <img src={response.profile_photo} />
                    ) : (
                      <img src={AddPhoto} />
                    )}
                  </div>
                  <div className="staff-cards-card_staffInfo_name">
                    {response.first_name + " " + response.last_name}
                  </div>
                </div>
                <div className="staff-cards-card_staffDate">
                  <InfoItem label="Joined At" value={response.joined_at} />
                  <InfoItem label="Service Van" value={response.email} />
                  <InfoItem
                    label="Mobile Number"
                    value={response.phone_number}
                  />
                  <InfoItem label="Email" value={response.email} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Staff;
