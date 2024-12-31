import Van from "../../assets/svg/Van.svg";
import Logo from "../../assets/svg/chevrolet-10 1.svg";
import Editicon from "../../assets/svg/Editicon.svg";
import FirstServicesIcons from "../../assets/svg/FirstServiceIcon.svg";
import SecondServicesIcons from "../../assets/svg/SecondServiceIcon.svg";
import ThirdServicesIcons from "../../assets/svg/ThirdServiceIcon.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { VEHICLES_LIST } from "../../URLs/Apis";
import { TOKEN } from "../Forms/VanForm";
import AddServiceIcon from "../../assets/svg/add (1) 1.svg";
import { useParams } from "react-router";
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

function VanProfileCard({ vehicleData, vehicleId, setActivePage }) {
  const [vehicleById, setVehicleBYId] = useState([]);
  const vanId = useParams();
  const getVehicleById = async () => {
    try {
      const response = await axios.get(
        `${VEHICLES_LIST}/${vehicleId ? vehicleId : vanId.id}`,
        {
          headers: { Authorization: TOKEN },
        }
      );

      console.log(response);
      setVehicleBYId(response.data.data.door_step_vehicle);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getVehicleById();
    console.log(vanId.id);
  }, []);
  return (
    <>
      <div className="col-md-12">
        <div className="card p-4 card-style">
          <h1 className="vanCss fw-bold">
            Van # {vehicleId ? vehicleId : vanId.id}
          </h1>
          <img src={Van} alt="Van Profile" className="card-img-top vanimage " />
          <div className="card-body">
            <h5 className="card-title d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-between"></div>
              <img src={Logo} alt="Logo" />
              {vehicleById.name}
              <img
                src={Editicon}
                className="cursor-pointer ms-auto"
                style={{
                  width: "30px",
                  height: "30px",
                }}
                alt="Edit"
              />
            </h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <InfoItem
                  label="Van Capacity (max level)"
                  value={vehicleData?.capacity}
                />

                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="45"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: "100%",
                      backgroundColor: "#2cc050",
                      height: "8px",
                    }}
                  ></div>
                </div>
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <InfoItem
                      label="Available Services"
                      value=""
                      className="justify-content-s"
                    />
                    <div className="d-flex justify-content-end ">
                      {/* {console.log(vehicleById.service_categories)}
                      {vehicleById.service_categories[0] ? (
                        <img
                          src={vehicleById.service_categories}
                          className="cursor-pointer"
                          style={{
                            width: "30px",
                            height: "30px",
                          }}
                          alt="oil Transformation"
                        />
                      ) : (
                        <button
                          style={{ fontSize: 14 }}
                          className=" border-0 bg-transparent"
                          onClick={() => setActivePage("Services")}
                        >
                          Add Service
                          <img src={AddServiceIcon} alt="add-service" />
                        </button>
                      )} */}

                      {/* <img
                        src={SecondServicesIcons}
                        className="cursor-pointer"
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                        alt="wheel services"
                      />
                      <img
                        src={ThirdServicesIcons}
                        className="cursor-pointer"
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                        alt="Battery services"
                      /> */}
                    </div>
                  </div>
                </div>
                <InfoItem label=" Supervisor" value="Ali Samir" />
                <InfoItem label="Engineer" value=" Osama Mohamed" />
                <InfoItem label="Technician" value=" Mohamed Ragab" />
              </li>
              <li
                className="list-group-item fw-600"
                style={{
                  color: "#4A4A4A",
                  /*fontSize:'16px'*/ lineHeight: "29.98x",
                }}
              >
                Van Info
                <InfoItem
                  value={vehicleById.engine_type?.name}
                  label="Fuel Type"
                />
                <InfoItem
                  value={vehicleById.engine_size?.size_cc}
                  label="Engine size"
                />
                <InfoItem value="30.000-40.000" label="Number of Kilometers" />
                <InfoItem
                  value={`W ${vehicleById.tyre_dimension?.width} / H ${vehicleById.tyre_dimension?.height} / D ${vehicleById.tyre_dimension?.width}`}
                  label="Tire size"
                />
                <InfoItem
                  value={vehicleById.battery_capacity?.name}
                  label="Battery Size"
                />
                <InfoItem
                  value={vehicleById.chassis_number}
                  label="Chassis Number"
                />
                <InfoItem
                  value={vehicleById.transmission_type?.name}
                  label="Transmission Type"
                />
                <InfoItem
                  value={vehicleById.vehicle_type?.type}
                  label="Vehicle Type"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default VanProfileCard;
