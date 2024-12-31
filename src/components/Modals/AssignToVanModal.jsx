import React from 'react'
import { Modal } from 'react-bootstrap'
import VanSelection from '../VanSelection'

const AssignToVanModal = ({show,handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose} className="" size='xl'>
        <Modal.Header>
          <Modal.Title ></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <VanSelection/>
        </Modal.Body>
      </Modal>
  )
}

export default AssignToVanModal