import React, { useState } from 'react';
import VanImage from '../assets/images/Van.png';
import CarImg from '../assets/images/chevrolet-10 1.png';
import Icon1 from '../assets/images/icon1.png'; 
import Icon2 from '../assets/images/icon2.png'; 
import Icon3 from '../assets/images/icon3.png'; 
import Icon4 from '../assets/images/icon4.png';

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

 const VanSelection = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedVan, setSelectedVan] = useState(null);

    const vans = [
        { id: 2, capacity: 3, maxCapacity: 8, supervisor: 'Ali Samir', driver: 'Sameh Ahmed', engineer: 'Osama Mohamed', technician: 'Mohamed Ragab' },
        { id: 3, capacity: 6, maxCapacity: 8, supervisor: 'Ali Samir', driver: 'Sameh Ahmed', engineer: 'Osama Mohamed', technician: 'Mohamed Ragab' },
        { id: 4, capacity: 0, maxCapacity: 8, supervisor: 'Ali Samir', driver: 'Sameh Ahmed', engineer: 'Osama Mohamed', technician: 'Mohamed Ragab' },
        { id: 5, capacity: 0, maxCapacity: 8, supervisor: 'Ali Samir', driver: 'Sameh Ahmed', engineer: 'Osama Mohamed', technician: 'Mohamed Ragab' },
    ];

    const handleCardClick = (van) => {
        setSelectedVan(van);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedVan(null);
   };
   

    return (
        <div className="container-fluid mt-4">
            <header className="mb-4">
                <h2 className="text-left">Select a vehicle</h2>
            </header>

            <div className="row">
                {vans.map((van) => (
                    <div
                        key={van.id}
                        className="col-md-4 mb-4"
                        style={{ paddingLeft: '10px', paddingRight: '10px' }}
                        onClick={() => handleCardClick(van)}
                    >
                        <div className="card shadow-sm" style={{ width: '95%', cursor: 'pointer' }}>
                            <div className="card-body">
                                {/* Header */}
                                <div className="d-flex justify-content-between">
                                    <h6 className="card-title mb-2 text-left">Chevrolet Express</h6>
                                    <p className="card-text text-right">Van #{van.id}</p>
                                </div>

                                {/* Van Image */}
                                <img
                                    src={VanImage}
                                    className="card-img-top mb-3"
                                    alt={`Van #${van.id}`}
                                    style={{ width: '70%', height: 'auto', display: 'block', margin: '0 auto' }}
                                />

                                {/* Capacity */}
                                <div className="mb-2 text-left">
                                    <strong>Van Capacity (max level): </strong>
                                    {van.capacity} / {van.maxCapacity} orders
                                    <div className="progress mt-2">
                                        <div
                                            className={`progress-bar ${
                                                van.capacity >= van.maxCapacity
                                                    ? 'bg-danger'
                                                    : van.capacity >= van.maxCapacity * 0.75
                                                    ? 'bg-warning'
                                                    : 'bg-success'
                                            }`}
                                            role="progressbar"
                                            style={{ width: `${(van.capacity / van.maxCapacity) * 100}%` }}
                                            aria-valuenow={van.capacity}
                                            aria-valuemin="0"
                                            aria-valuemax={van.maxCapacity}
                                        ></div>
                                    </div>
                                </div>

                                {/* Available Services */}
                                <InfoItem 
  label={
    <div className="d-flex align-items-center">
      <span style={{ marginRight: '10px' }}>Available Services</span>
      <img
        src={Icon2}
        alt="Driver"
        style={{ width: '20px', marginLeft: '10px' }}
      />
      <img
        src={Icon1}
        alt="Supervisor"
        style={{ width: '20px', marginLeft: '10px' }}
      />
      <img
        src={Icon3}
        alt="Engineer"
        style={{ width: '20px', marginLeft: '10px' }}
      />
      <img
        src={Icon4}
        alt="Technician"
        style={{ width: '20px', marginLeft: '10px' }}
      />
    </div>
  } 
  value="" 
/>
<div className="mt-3 text-left">
  <ul className="list-unstyled mt-2">
    <li>
      <InfoItem label="Supervisor" value="10/8" />
    </li>
    <li>
      <InfoItem label="Driver" value="Sameh Ahmed" />
    </li>
    <li>
      <InfoItem label="Engineer" value="Osama Mohamed" />
    </li>
    <li>
      <InfoItem label="Technician" value="Mohamed Ragab" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <footer className="d-flex justify-content-center mt-4">
                <button className="btn btn-dark mx-2 px-4 py-2">Save</button>
                <button className="btn btn-light mx-2 px-4 py-2 border">Cancel</button>
            </footer>

            {/* Modal */}
            {showModal && selectedVan && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Van Details</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <h6>Chevrolet Express - Van #{selectedVan.id}</h6>
                                <p>
                                    <strong>Capacity:</strong> {selectedVan.capacity} / {selectedVan.maxCapacity}
                                </p>
                                <p>
                                    <strong>Supervisor:</strong> {selectedVan.supervisor}
                                </p>
                                <p>
                                    <strong>Driver:</strong> {selectedVan.driver}
                                </p>
                                <p>
                                    <strong>Engineer:</strong> {selectedVan.engineer}
                                </p>
                                <p>
                                    <strong>Technician:</strong> {selectedVan.technician}
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VanSelection;
