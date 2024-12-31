import { Link, useNavigate } from "react-router-dom";
import vanImage from "../../assets/svg/Van.svg";
import brandImage from "../../assets/svg/chevrolet-10 1.svg";
import { useEffect } from "react";
export const VanCard = ({ van }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ minHeight: 50 }}
      className="col-12 col-lg-4 col-md-6 col-sm-12  "
    >
      <div key={van?.id} className="rounded-2 card p-2 bg-light my-2">
        <div className="d-flex align-items-center justify-content-between mt-1 mx-2">
          <div className="d-flex">
            <img style={{ width: 20 }} src={brandImage} alt="brand-image" />

            <h6 style={{ fontSize: 10, marginInline: 3 }}>{van?.name}</h6>
          </div>
          <h6 className="fs-6 fw-bold">Van # {van?.id}</h6>
        </div>
        <div>
          {" "}
          <Link
            // onClick={() => goToVanProfile()}
            to={`/van-profile/${van?.id}`}
            state={{ vanId: van?.id }}
            style={{ cursor: "pointer" }}
            // onClick={() => goToVanDetails(van?.id)}

            className="d-flex justify-content-center align-items-center"
          >
            <img
              className="m-3"
              src={
                "https://estbn.com/MobileAppBackend/public/" +
                van?.profile_photo_path
              }
              alt="van-image"
            />
          </Link>
        </div>
        <div className="d-flex justify-content-between ">
          <h6 style={{ fontSize: 12 }} className="text-secondary">
            Van Capacity (max level)
          </h6>
          <h6 style={{ fontSize: 12 }}>
            {van?.capacity} /{" "}
            <span className="text-secondary">{van?.orders_count} orders</span>
          </h6>
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: "50%" }}
            aria-valuenow="50"
            aria-valuemin="25"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="d-flex justify-content-between align-items-center my-1">
          <h6 style={{ fontSize: 12 }} className="text-secondary">
            Available Services{" "}
          </h6>
          {/* <div>
            <img
              style={{ width: "1.5rem" }}
              src={
                "https://estbn.com/MobileAppBackend/public" +
                van?.services[0]?.icon_url
              }
              alt={van?.services[0]?.name}
            />

            <img
              style={{ width: "1.5rem" }}
              src={
                "https://estbn.com/MobileAppBackend/public" +
                van?.services[1]?.icon_url
              }
              alt={van?.services[1]?.name}
            />
            <img
              style={{ width: "1.5rem" }}
              src={
                "https://estbn.com/MobileAppBackend/public" +
                van?.services[2]?.icon_url
              }
              alt={van?.services[1]?.name}
            />
            <img
              style={{ width: "1.5rem" }}
              src={
                "https://estbn.com/MobileAppBackend/public" +
                van?.services[3]?.icon_url
              }
              alt={van?.services[3]?.name}
            />
            <img
              style={{ width: "1.5rem" }}
              src={
                "https://estbn.com/MobileAppBackend/public" +
                van?.services[4]?.icon_url
              }
              alt={van?.services[4]?.name}
            />
          </div> */}
        </div>
        <div className="d-flex justify-content-between align-items-center  my-1">
          <h6 style={{ fontSize: 12 }} className="text-secondary">
            Supervisor
          </h6>
          <h6 style={{ fontSize: 12, fontWeight: "bold" }}>
            {van?.stuff[0] ? (
              van?.stuff[0]?.first_name + " " + van?.stuff[0]?.last_name
            ) : (
              <button style={{ fontSize: 12 }} className="btn btn-dark px-1">
                Assign to Supervisor
              </button>
            )}
          </h6>
        </div>
        <div className="d-flex justify-content-between align-items-center my-1">
          <h6 style={{ fontSize: 12 }} className="text-secondary">
            Engineer
          </h6>
          <h6 style={{ fontSize: 12, fontWeight: "bold" }}>Osama Mohamed </h6>
        </div>
        <div className="d-flex justify-content-between align-items-center my-1">
          <h6 style={{ fontSize: 12 }} className="text-secondary">
            Technician
          </h6>
          <h6 style={{ fontSize: 12, fontWeight: "bold" }}>Mohamed Ragab </h6>
        </div>
      </div>
    </div>
  );
};
