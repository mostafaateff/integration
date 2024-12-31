import React from "react";
import { Modal } from "react-bootstrap";
import VanForm from "../Forms/VanForm";

const AssignServiceToVan = ({ show, handleClose }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} className="">
        <Modal.Header style={{ backgroundColor: "#D5D5D5" }}>
          <Modal.Title className="text-black">Add Services</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{}}>
          {/* <VanForm handleClose={handleClose} /> */}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AssignServiceToVan;
