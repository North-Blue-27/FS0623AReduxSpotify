import React from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { BsShuffle, BsSkipStart, BsPlay, BsSkipEnd, BsVolumeUp } from 'react-icons/bs';

const PlayerBar = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="playerControls mt-1">
        <Col xs={6} md={4} lg={2} className="offset-3 offset-md-4 offset-lg-5 d-flex justify-content-between">
          <Button variant="link" className="icon-button">
            <BsShuffle size={20} />
          </Button>
          <Button variant="link" className="icon-button">
            <BsSkipStart size={20} />
          </Button>
          <Button variant="success" className="playButton">
            <BsPlay size={30} />
          </Button>
          <Button variant="link" className="icon-button">
            <BsSkipEnd size={20} />
          </Button>
          <Button variant="link" className="icon-button">
            <BsVolumeUp size={20} />
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center playBar py-3">
        <Col xs={8} md={6}>
          <ProgressBar now={50} label={`${50}%`} />
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerBar;