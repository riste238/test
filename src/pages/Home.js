import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import './home.css';

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className="initialBtn"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Open
      </Button>
      <div id="text-container" style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '500px' }}>
            <h2>Welcome to the SpaceX website</h2>
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default Home;