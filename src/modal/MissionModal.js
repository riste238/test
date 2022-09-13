import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.css';
import Comments from '../components/Comments/Comments.js'


function MissionModal({el}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  id="modal-button" variant="primary" onClick={()=> {handleShow()}}>
        More information
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="details">{el.details}</Modal.Body>
        <Modal.Body className="details"><p className="">Flight number: {el.flight_number}</p></Modal.Body>
          <Comments el={el}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> 
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MissionModal;