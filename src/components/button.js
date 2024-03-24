import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

const ButtonComponent = ({ cityArray = [], setCity }) => {
  return (
    <div className='buttonContainer'>
      <div className='buttons'>
        {cityArray && cityArray.map((item, index) => (
          <Button key={index} className="customButton" onClick={() => setCity(item)}>{item}</Button>
        ))}
      </div>
    </div>
  );
}

export default ButtonComponent;
