import React, { useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import axios from "axios";
import { ORDER } from "../URLs/Apis";
import SideNav from "./SideNav";
import AssignToVanModal from "./Modals/AssignToVanModal";
import Filter from "../assets/images/Filter 1.png";
import Icon1 from "../assets/images/icon1.png";
import Icon2 from "../assets/images/icon2.png";
import Icon3 from "../assets/images/icon3.png";
import Icon4 from "../assets/images/icon4.png";
import Expand from "../assets/images/Expand icon.png";
import Edit from "../assets/images/Edit icon.png";
import Call from "../assets/images/Call icon.png";
import EXecuting from "../assets/images/Executing.png";
import Confirmed from "../assets/images/Confirmed.png";
import Executed from "../assets/images/Executed.png";
import Canceled from "../assets/images/Canceled.png";

function Orders() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Define the filter drawer state
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  // API Call
  const handleSubmit = () => {
    axios
      .get(ORDER, {
        headers: {
          Authorization:
            "Bearer 298|NfxG7lr83Q4WuXeW3ZWw6MS1Kzciz92Wr9sfubzN7b1536a7",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e.data);
      });
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  // Orders Data
  const ordersData = [
    {
      id: "ORD123456",
      clientName: "Menna Ashraf",
      mobile: "+0100324782",
      service: "",
      date: "July 20, 2024",
      time: "09:00 am - 12:00 pm",
      location: "Nasr City",
      state: "Executing",
      icon: "bi bi-gear",
    },
    {
      id: "ORD654321",
      clientName: "Laila Mamdouh",
      mobile: "+0100324782",
      service: "",
      date: "July 20, 2024",
      time: "06:00 pm - 09:00 pm",
      location: "Masr Elgedida",
      state: "Confirmed",
      icon: "bi bi-box",
    },
  ];

  // Drawer Content
  const drawerContent = (
    <Box sx={{ width: 300, padding: 2 }}>
      <h5>Filter Orders</h5>
      <Divider />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h6>Services</h6>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl fullWidth>
            <InputLabel>Service</InputLabel>
            <Select>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Service1">Service 1</MenuItem>
              <MenuItem value="Service2">Service 2</MenuItem>
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h6>Date</h6>
        </AccordionSummary>
        <AccordionDetails>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              fullWidth
            />
          </LocalizationProvider>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h6>Time</h6>
        </AccordionSummary>
        <AccordionDetails>
          <TextField fullWidth label="Select Time" type="time" />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h6>Location</h6>
        </AccordionSummary>
        <AccordionDetails>
          <TextField fullWidth label="Enter Location" />
        </AccordionDetails>
      </Accordion>

      <Box className="mt-3 text-center">
        <Button
          variant="contained"
          color="black"
          onClick={() => setIsFilterOpen(false)}
        >
          show 40 result
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AssignToVanModal show={show} handleClose={handleClose} />
      <div className="container-fluid vh-100">
        <div className="row h-100">
          {/* Main Content */}
          <div className="">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
              <h2 className="fw-bold">Orders</h2>
              <div className="d-flex gap-2">
                <button
                  onClick={handleShow}
                  className="btn btn-outline-secondary"
                >
                  <i className="bi bi-truck"></i> Assign to a vehicle
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="bi bi-geo-alt"></i> Location on map
                </button>
              </div>
            </div>
            {/* Filters Section */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              {/* Search Bar */}
              <div
                className="d-flex align-items-center gap-2"
                style={{ fullWidt: "70%" }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search for orders ID, customer name, or date ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    ),
                  }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Select date"
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              {/* Additional Filter Button */}
              {/* <button
                className="btn btn-outline-secondary"
                onClick={() => setIsFilterOpen(true)}
              >
                <i className=""></i>
              </button> */}
              <Button
                onClick={() => setIsFilterOpen(true)}
                variant="contained"
                color="light"
                startIcon={
                  <img
                    src={Filter}
                    alt="Filter Icon"
                    style={{ width: "16px", height: "16px" }}
                  />
                }
                style={{
                  minWidth: "40px",
                  padding: "4px 8px",
                  lineHeight: "1",
                }}
                size="small"
              ></Button>
            </div>

            {/* Filter Drawer */}
            <Drawer
              anchor="right"
              open={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
            >
              {drawerContent}
            </Drawer>
            {/* Tabs Section */}
            <div
              className="btn-group mb-4"
              role="group"
              aria-label="Order Tabs"
            >
              <button className="btn btn-dark">
                All orders{" "}
                <span className="badge bg-light text-dark ms-1">280</span>
              </button>
              <button className="btn btn-light">
                Processing <span className="badge bg-secondary ms-1">80</span>
              </button>
              <button className="btn btn-light">
                Executed <span className="badge bg-secondary ms-1">140</span>
              </button>
              <button className="btn btn-light">
                Executing <span className="badge bg-secondary ms-1">20</span>
              </button>
              <button className="btn btn-light">
                Confirmed <span className="badge bg-secondary ms-1">10</span>
              </button>
              <button className="btn btn-light">
                Postponed <span className="badge bg-secondary ms-1">10</span>
              </button>
              <button className="btn btn-light">
                Help request <span className="badge bg-secondary ms-1">10</span>
              </button>
              <button className="btn btn-light">
                Canceled <span className="badge bg-secondary ms-1">10</span>
              </button>
            </div>

            {/* Orders Table */}
            <div className="table-responsive">
              <table
                className="table table-hover border"
                style={{
                  width: "100%", // Ensures the table takes the full width
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <thead className="table-light">
                  <tr
                    style={{ backgroundColor: "#f8f9fa", fontWeight: "bold" }}
                  >
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>Order ID</th>
                    <th>Client Name</th>
                    <th>Mobile N.</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>State</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {ordersData.map((order, index) => (
                    <tr
                      key={order.id}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#ffffff" : "#f6f6f6",
                      }}
                    >
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{order.id}</td>
                      <td>{order.clientName}</td>
                      <td>{order.mobile}</td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <span>{order.service}</span>
                          <img
                            src={Icon1}
                            alt="Icon 1"
                            style={{ width: "18px", height: "18px" }}
                          />
                          <img
                            src={Icon2}
                            alt="Icon 2"
                            style={{ width: "18px", height: "18px" }}
                          />
                          <img
                            src={Icon3}
                            alt="Icon 3"
                            style={{ width: "18px", height: "18px" }}
                          />
                          <img
                            src={Icon4}
                            alt="Icon 4"
                            style={{ width: "18px", height: "18px" }}
                          />
                        </div>
                      </td>
                      <td>{order.date}</td>
                      <td>{order.time}</td>
                      <td>{order.location}</td>
                      <td>
                        <img
                          src={
                            order.state === "Executing"
                              ? EXecuting
                              : order.state === "Confirmed"
                              ? Confirmed
                              : order.state === "Canceled"
                              ? Canceled
                              : Executed
                          }
                          alt={order.state}
                          style={{ width: "24px", height: "24px" }}
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={Expand}
                            alt="Expand Icon"
                            style={{
                              width: "24px",
                              height: "24px",
                              cursor: "pointer",
                            }}
                          />
                          <img
                            src={Edit}
                            alt="Edit Icon"
                            style={{
                              width: "24px",
                              height: "24px",
                              cursor: "pointer",
                            }}
                          />
                          <img
                            src={Call}
                            alt="Call Icon"
                            style={{
                              width: "24px",
                              height: "24px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Section */}
            <div
              className="d-flex justify-content-end align-items-center mt-3"
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                left: "20px",
              }}
            >
              <button className="btn btn-outline-secondary me-2">
                ← Previous Page
              </button>
              <div className="d-flex">
                <button className="btn btn-outline-secondary mx-1">1</button>
                <button className="btn btn-outline-secondary mx-1">2</button>
                <button className="btn btn-outline-secondary mx-1">3</button>
                <button className="btn btn-outline-secondary mx-1">....</button>
              </div>
              <button className="btn btn-outline-secondary ms-2">
                Next Page →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
