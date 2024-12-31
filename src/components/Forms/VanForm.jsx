import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./VanForm.css";
import axios from "axios";
import {
  CAR_SPECIFICATION,
  CREATE_VEHICLE,
  VEHICLE_TYPE,
} from "../../URLs/Apis";
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { useNavigate } from "react-router";

export const TOKEN =
  "Bearer 285|eOqXEWFNPtlAh7lBTAufwPNcsDrWkEhIsT5y3IrNc89c4eba ";
const VanForm = ({ handleClose }) => {
  const [automaticId, setAutomaticId] = useState("");
  const [newVehicleId, setNewVehicleId] = useState("");
  const [manualId, setManualId] = useState("");
  const [vanId, setVanId] = useState("");
  const [sectorId, setSectorId] = useState("");

  const [numberOfKiloMeters, setNumberOfKiloMeters] = useState("");
  const [selectedBrandId, setSelectedBrandId] = useState("");

  const [selectedModelId, setSelectedModelId] = useState("");
  const [selectedWidthSize, setSelectedWidthSize] = useState("");
  const [carSpecificationList, setCarSpecificationList] = useState({
    brands: [],
    models: [],
    years: [],
    engineSizes: [],
    engineTypes: [],
    diameters: [],
    widths: [],
    heidgts: [],
    batteryCapacities: [],
  });
  const [vehiclesData, setVehiclesData] = useState({
    vehicle_type_id: "",
    chassis_number: "",
    plate_number: "",
    model_id: "",
    brand_id: "",
    engine_type_id: "",
    transmission_type_id: "",
    year: "",
    odometer_reading: "",
    tyre_width: "",
    tyre_height: "",
    rim_diameter: "",
    engine_size_id: "",
    battery_capacity_id: "",
    number_of_kilo_meters: "",
  });
  const [vehicleId, setVehicleId] = useState("");
  const [vehicleCreated, setVehicleCreated] = useState({});

  const navigate = useNavigate();

  const goToVanProfile = (vehicle, id) => {
    navigate(`/van-profile`, { state: { vehicle, id } });
  };
  const createVehicle = async () => {
    try {
      const response = await axios.post(CREATE_VEHICLE, vehiclesData, {
        headers: { Authorization: TOKEN },
      });
      console.log(response);
      handleClose();
      setVehicleCreated(response.data.data?.vehicle);
      setVehicleId(response.data.data.vehicle.id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (vehicleCreated && vehicleId) {
      goToVanProfile(vehicleCreated, vehicleId);
    }
  }, [vehicleCreated, vehicleId]);
  const BrandChange = (id) => {
    console.log(id);
    setSelectedBrandId(id);
    axios
      .get(`${CAR_SPECIFICATION}?brand_id=${id}`)
      .then((response) => {
        setCarSpecificationList({
          ...carSpecificationList,
          models: response.data.data.models,
        });
        setVehiclesData({ ...vehiclesData, brand_id: id });
        console.log("data is: " + response.data.data.models);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const getCarspecificationsBrands = async () => {
    try {
      const res = await axios.get(CAR_SPECIFICATION);
      console.log(res.data.data.brands);
      setCarSpecificationList({
        ...carSpecificationList,
        brands: res.data.data.brands,
      });
      setAutomaticId(res.data.data.transmissionTypes[0].id);
      setManualId(res.data.data.transmissionTypes[1].id);
    } catch (error) {
      console.log(error);
    }
  };
  const getVehicleType = async () => {
    try {
      const res = await axios.get(VEHICLE_TYPE, {
        headers: { Authorization: TOKEN },
      });

      setVanId(res.data.data.vehicle_types[0].id);
      setSectorId(res.data.data.vehicle_types[1].id);
    } catch (error) {
      console.log(error);
    }
  };
  const ModelChange = (id, brandId) => {
    console.log(id);
    setSelectedModelId(id);
    axios
      .get(`${CAR_SPECIFICATION}?brand_id=${selectedBrandId}&model_id=${id}`)
      .then((response) => {
        setVehiclesData({
          ...vehiclesData,
          model_id: id,
        });

        setCarSpecificationList({
          ...carSpecificationList,
          years: response.data.data.years,
          engineSizes: response.data.data.engineSizes,
          engineTypes: response.data.data.engineTypes,
          widths: response.data.data.tyre_widths,
          batteryCapacities: response.data.data.batteryCapacities,
        });
        console.log(response.data.data.years);
        console.log(response.data.data.engineSizes);
        console.log(response.data.data.engineTypes);
        console.log(response.data.data.batteryCapacities);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const YearChange = (item) => {
    console.log(item);
    setVehiclesData({
      ...vehiclesData,
      year: item,
    });
  };
  const EnginTypeChange = (id) => {
    console.log(id);
    setVehiclesData({
      ...vehiclesData,
      engine_type_id: id,
    });
  };
  const EnginSizesChange = (id) => {
    console.log(id);
    setVehiclesData({
      ...vehiclesData,
      engine_size_id: id,
    });
  };

  const WidthSizeChange = (widthSizeItem) => {
    console.log(+widthSizeItem);
    setSelectedWidthSize(widthSizeItem);
    axios
      .get(
        `${CAR_SPECIFICATION}?brand_id=${selectedBrandId}&model_id=${selectedModelId}&tyre_width=${widthSizeItem}`
      )
      .then((response) => {
        setCarSpecificationList({
          ...carSpecificationList,
          heidgts: response.data.data.tyre_heights,
        });
        setVehiclesData({
          ...vehiclesData,
          tyre_width: +widthSizeItem,
        });
        console.log(response.data.data.tyre_widths);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const HeightSizeChange = (heightSizeItem) => {
    console.log(+heightSizeItem);
    axios
      .get(
        `${CAR_SPECIFICATION}?brand_id=${selectedBrandId}&model_id=${selectedModelId}&tyre_width=${selectedWidthSize}&tyre_height=${heightSizeItem}`
      )
      .then((response) => {
        setCarSpecificationList({
          ...carSpecificationList,
          diameters: response.data.data.rim_diameters,
        });
        setVehiclesData({
          ...vehiclesData,
          tyre_height: +heightSizeItem,
        });
        console.log(response.data.data.tyre_heights);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const DiameterSizeChange = (item) => {
    console.log(+item);
    setVehiclesData({
      ...vehiclesData,
      rim_diameter: +item,
    });
  };
  const BatterySizeChange = (id) => {
    console.log(id);
    setVehiclesData({
      ...vehiclesData,
      battery_capacity_id: id,
    });
  };
  const ChassisNumberChange = (item) => {
    console.log(item.target.value);
    setVehiclesData({
      ...vehiclesData,
      chassis_number: item.target.value,
    });
  };
  const PlateNumberChange = (item) => {
    console.log(item.target.value);
    setVehiclesData({
      ...vehiclesData,
      plate_number: item.target.value,
    });
  };
  const NumberOfKiloMetersChange = (item) => {
    console.log(item.target.value);
    setNumberOfKiloMeters(item);
    setVehiclesData({
      ...vehiclesData,
      number_of_kilo_meters: item.target.value,
    });
  };
  const TransmissionsTypeChange = (e) => {
    setVehiclesData({
      ...vehiclesData,
      transmission_type_id: e.target.value,
    });
  };
  const VehicleTypeChange = (e) => {
    setVehiclesData({
      ...vehiclesData,
      vehicle_type_id: e.target.value,
    });
  };

  useEffect(() => {
    getCarspecificationsBrands();
    getVehicleType();
  }, []);
  return (
    <div>
      <form className="d-flex ">
        <div className="w-100  ">
          {" "}
          <div className="input-group my-3 d-flex justify-content-between input-group-responsive   ">
            <div className="input-responsive  ">
              <Autocomplete
                sx={{
                  width: 150,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                disablePortal
                options={carSpecificationList?.brands?.map((res) => {
                  return {
                    label: res.name,
                    id: res.id,
                  };
                })}
                onChange={(event, item) => BrandChange(item.id)}
                renderInput={(params) => (
                  <TextField {...params} label="Car Brand" variant="outlined" />
                )}
              />
            </div>

            <div className="input-responsive">
              <Autocomplete
                disablePortal
                sx={{
                  width: 150,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                options={carSpecificationList.models.map((res) => {
                  return {
                    label: res.name,
                    id: res.id,
                  };
                })}
                onChange={(event, item) => ModelChange(item.id)}
                renderInput={(params) => (
                  <TextField {...params} label="Model" />
                )}
              />
            </div>
            <div className="input-responsive">
              <Autocomplete
                disablePortal
                sx={{
                  width: 150,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                options={carSpecificationList.years?.map((res) => {
                  return {
                    label: res.toString(),
                  };
                })}
                onChange={(event, item) => YearChange(item.label)}
                renderInput={(params) => <TextField {...params} label="Year" />}
              />
            </div>
          </div>
          <div className="input-group my-4 d-flex justify-content-between  input-group-responsive">
            <div className="input-responsive">
              <Autocomplete
                disablePortal
                sx={{
                  width: 150,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                options={carSpecificationList.engineTypes?.map((res) => {
                  return {
                    label: res.name,
                    id: res.id,
                  };
                })}
                onChange={(event, item) => EnginTypeChange(item.id)}
                renderInput={(params) => (
                  <TextField {...params} label="Engin Type" />
                )}
              />
            </div>
            <div className="input-responsive">
              <Autocomplete
                disablePortal
                sx={{
                  width: 150,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                options={carSpecificationList.engineSizes?.map((res) => {
                  return {
                    label: res.size_cc,
                    id: res.id,
                  };
                })}
                onChange={(event, item) => EnginSizesChange(item.id)}
                renderInput={(params) => (
                  <TextField
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                      },
                    }}
                    {...params}
                    label="Engin Sizes"
                  />
                )}
              />
            </div>
            <div className="input-responsive">
              <TextField
                sx={{
                  width: 150,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                onChange={(item) => NumberOfKiloMetersChange(item)}
                label="Number of kilometers"
              />
            </div>
          </div>
          <label style={{ fontSize: "14px" }} className="d-block text-black ">
            Tire Size{" "}
          </label>{" "}
          <div className="input-group d-flex justify-content-between input-group-responsive ">
            <div className="input-responsive">
              <Autocomplete
                sx={{ width: 130 }}
                disablePortal
                options={carSpecificationList.widths?.map((res) => {
                  return {
                    label: res.toString(),
                  };
                })}
                onChange={(event, item) => WidthSizeChange(item.label)}
                renderInput={(params) => (
                  <TextField
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                      },
                    }}
                    {...params}
                    label="Width"
                    variant="outlined"
                  />
                )}
              />
            </div>
            <div className="input-responsive">
              <Autocomplete
                sx={{
                  width: 130,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                disablePortal
                options={carSpecificationList.heidgts?.map((res) => {
                  return {
                    label: res.toString(),
                  };
                })}
                onChange={(event, item) => HeightSizeChange(item.label)}
                renderInput={(params) => (
                  <TextField
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                      },
                    }}
                    {...params}
                    label="Height"
                    variant="outlined"
                  />
                )}
              />
            </div>
            <div className="input-responsive flex">
              <Autocomplete
                sx={{
                  width: 130,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                disablePortal
                options={carSpecificationList.diameters?.map((res) => {
                  return {
                    label: res.toString(),
                  };
                })}
                onChange={(event, item) => DiameterSizeChange(item.label)}
                renderInput={(params) => (
                  <TextField
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                      },
                    }}
                    {...params}
                    label="Diameters"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </div>
          <div className="input-group mb-3 d-flex justify-content-between my-4 input-group-responsive">
            <div className="input-responsive">
              <Autocomplete
                disablePortal
                sx={{
                  width: 150,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                options={carSpecificationList.batteryCapacities?.map((res) => {
                  return {
                    label: res.name,
                    id: res.id,
                  };
                })}
                onChange={(event, item) => BatterySizeChange(item.id)}
                renderInput={(params) => (
                  <TextField {...params} label="Battery Size" />
                )}
              />
            </div>
            <div className="input-responsive">
              <TextField
                sx={{
                  width: 150,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                onChange={(item) => ChassisNumberChange(item)}
                label="Chassis Number"
              />
            </div>
            <div className="input-responsive">
              <TextField
                sx={{
                  width: 150,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                onChange={(item) => PlateNumberChange(item)}
                label="Plate Number"
              />
            </div>
          </div>
          <div className="input-group my-4 d-flex gap-5 input-group-responsive ">
            <div className="input-responsive">
              {" "}
              <label
                style={{ fontSize: "14px" }}
                className="d-block text-black "
              >
                Transmissions Type
              </label>
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <input
                    className=" mx-2"
                    type="radio"
                    value={automaticId}
                    aria-label="Radio button for following text input"
                    name="transmissions-type"
                    onChange={TransmissionsTypeChange}
                  />
                  <label
                    style={{
                      fontSize: "12px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Automatic
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    className=" mx-2"
                    type="radio"
                    value={manualId}
                    aria-label="Radio button for following text input"
                    name="transmissions-type"
                    onChange={TransmissionsTypeChange}
                  />
                  <label
                    style={{
                      fontSize: "12px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Manual
                  </label>
                </div>
              </div>
            </div>
            <div className="input-responsive">
              <label
                style={{ fontSize: "14px" }}
                className="d-block text-black "
              >
                Vehicle Type:{" "}
              </label>
              <div className="d-flex">
                {" "}
                <input
                  className=" mx-2"
                  type="radio"
                  value={vanId}
                  aria-label="Radio button for following text input"
                  name="vehicle-type"
                  onChange={VehicleTypeChange}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Van
                </span>
                <input
                  className=" mx-2"
                  type="radio"
                  value={sectorId}
                  aria-label="Radio button for following text input"
                  name="vehicle-type"
                  onChange={VehicleTypeChange}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Sector
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Button
              onClick={createVehicle}
              className="px-4 my-4"
              variant="dark"
            >
              Save
            </Button>
            <Button variant="light px-5 my-4" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VanForm;
