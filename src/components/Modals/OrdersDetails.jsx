import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { BsFillGearFill, BsFillBasketFill, BsBattery, BsCarFront } from "react-icons/bs";

function OrderDetails() {
  return (
    <div className="container-fluid vh-100 p-4">
      <div className="row h-100">
        {/* Left Section: Accordion Services */}
        <div className="col-lg-8">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold">Order #210</h2>
            <div>
              <Button variant="outline-secondary" className="me-2">
                Assign to a van
              </Button>
              <Button variant="outline-secondary">Location on map</Button>
            </div>
          </div>

          <Card>
            <Card.Header className="fw-bold">Order Details</Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0" flush>
                {/* Oil Services */}
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <BsFillGearFill className="me-2 text-warning" />
                    Oil Services
                    <span className="ms-auto fw-bold">1,150 EGP</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Details about oil services...</p>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Tire Services */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <BsFillBasketFill className="me-2 text-secondary" />
                    Tire Services
                    <span className="ms-auto fw-bold">4,315 EGP</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Details about tire services...</p>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Battery Services */}
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <BsBattery className="me-2 text-danger" />
                    Battery Services
                    <span className="ms-auto fw-bold">200 EGP</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Details about battery services...</p>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Car Care Services */}
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <BsCarFront className="me-2 text-primary" />
                    Car Care Services
                    <span className="ms-auto fw-bold">600 EGP</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Details about car care services...</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
            <Card.Footer className="text-end fw-bold">
              Total Price: <span className="ms-2">6,265 EGP</span>
            </Card.Footer>
          </Card>
        </div>

        {/* Right Section: Order Info & Client Info */}
        <div className="col-lg-4">
          {/* Order Info */}
          <Card className="mb-3">
            <Card.Header className="fw-bold">Order Info</Card.Header>
            <Card.Body>
              <p>
                <strong>Services:</strong> Oil, Tire, Battery, Car Care
              </p>
              <p>
                <strong>Order Date:</strong> July 11, 2024
              </p>
              <p>
                <strong>Requested Date:</strong> July 14, 2024
              </p>
              <p>
                <strong>Time:</strong> 09:00 am - 12:00 pm
              </p>
              <p>
                <strong>Payment:</strong> Cash
              </p>
              <p>
                <strong>Location:</strong> Nasr City
              </p>
              <p>
                <strong>Van ID:</strong> Van #02
              </p>
            </Card.Body>
          </Card>

          {/* Client Info */}
          <Card>
            <Card.Header className="fw-bold">Client Info</Card.Header>
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Client"
                  className="rounded-circle me-2"
                />
                <div>
                  <h6 className="mb-0">Menna Ashraf</h6>
                  <small>12/2/1998</small>
                </div>
              </div>
              <p>
                <strong>Mobile:</strong> 0100324782
              </p>
              <p>
                <strong>Email:</strong> mathiabahib12@gmail.com
              </p>
              <p>
                <strong>Vehicles:</strong> 5 Vehicles
              </p>
              <p className="text-success">
                <strong>Last Activity:</strong> 2 July 2024 at 04:30 PM
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
