import { Button, Modal } from "react-bootstrap";
import VanForm from "../Forms/VanForm";
export const VanModal = ({ show, handleClose }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} className="">
        <Modal.Header style={{ backgroundColor: "#D5D5D5" }}>
          <Modal.Title className="text-black">Add Vehicles</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{}}>
          <VanForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
};
