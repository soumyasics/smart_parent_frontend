import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ResoucePersonSubscribeModel(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure Subscribe?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Subscribe to Resource Person</h4>
        <p>Are you sure you want to subscribe to this Resource Person?</p>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between flex-row">
        <Button className="w-25" variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button className="w-25" variant="primary" onClick={props.onHide}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ResoucePersonSubscribeModel;
