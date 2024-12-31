import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";

import { VanCard } from "../../components/Cards/VanCard";
import { VanModal } from "../../components/Modals/VanModal";
import axios from "axios";
import { VEHICLES_LIST } from "../../URLs/Apis";
import SideNav from "../../components/SideNav";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import "./Vehicles.css";
const Vehicles = () => {
  const [vanList, setVanList] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getVanList = async () => {
    try {
      const response = await axios.get(VEHICLES_LIST, {
        headers: {
          Authorization:
            "Bearer 285|eOqXEWFNPtlAh7lBTAufwPNcsDrWkEhIsT5y3IrNc89c4eba",
        },
      });
      console.log(response.data.data);
      setVanList(response.data.data.door_step_vehicles);
    } catch (error) {
      console.log(error);
    }
  };
  // const handleEditModal = () => {
  //   setIsEdit(true);
  // };

  // const handleClick = () => {
  //   handleShow();
  //   handleEditModal();
  // };

  useEffect(() => {
    getVanList();
  }, []);
  return (
    <>
      <VanModal show={show} handleClose={handleClose} />
      <div className="d-flex">
        <div className="w-100  ">
          <div className="min-vh-100 p-2 mx-3 ">
            <div className="d-flex justify-content-between align-items-center header-responsive ">
              <h5 className="text-black fw-bold">Services vans</h5>

              <div className="d-flex  ">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    sx={{ width: 200, paddingBlock: 0 }}
                    components={["DatePicker"]}
                  >
                    <DatePicker label="select Date" />
                  </DemoContainer>
                </LocalizationProvider>
                {/* 
                <SearchIcon className="mx-2 border border-1  p-1 rounded-1 m-auto"></SearchIcon>

                <TuneIcon className="border border-1 bg-light p-1 rounded-1 m-auto" /> */}

                <button
                  onClick={handleShow}
                  className="btn btn-dark mx-2 rounded-2 text-white d-block"
                >
                  <AddIcon className="text-white" />
                  Add Vehicles
                </button>
                {/* <button
                  onClick={() => handleClick()}
                  className="btn btn-dark mx-2 rounded-2 text-white d-block"
                >
                  <AddIcon className="text-white" />
                  Edit Vehicles
                </button> */}
              </div>
            </div>
            <div className="container border mt-3 py-3 rounded-2 min-vh-100  ">
              <div className="row ">
                {vanList.map((van) => (
                  <VanCard key={van?.id} van={van} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicles;
