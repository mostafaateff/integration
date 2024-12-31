import VanProfileCard from "../../components/Cards/VanProfileCard";
import VanCardBtns from "../../components/VanCardBtns";
import OrderDetailsCard from "../../components/OrderDetailsCard ";
import Equipment from "../../components/Equipment";
import StaffVans from "../../components/StaffVans";
import { useEffect, useState } from "react";
import WorkingDays from "../../components/WorkingDays";
import { useLocation } from "react-router";
import ServicesVanProfile from "../../components/ServicesVanProfile";


const VanProfile = () => {
  const [activePage, setActivePage] = useState("orders");
  const location = useLocation();
  const { vehicle, id } = location.state || {};

  return (
    <>
      <div>
        <div className="container mt-4 ">
          <VanCardBtns activePage={activePage} setActivePage={setActivePage} />
        </div>
      </div>
      <div className="mr-5  row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <VanProfileCard
            vehicleData={vehicle}
            vehicleId={id}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          {activePage === "orders" && <OrderDetailsCard />}
          {activePage === "StaffVans" && <StaffVans />}
          {activePage === "Equipment" && <Equipment />}
          {activePage === "WorkingDays" && <WorkingDays />}
          {activePage === "Services" && <ServicesVanProfile />}
        </div>
      </div>
    </>
  );
};

export default VanProfile;
