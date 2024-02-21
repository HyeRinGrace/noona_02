import React from 'react'
import { Button } from 'react-bootstrap';
import '../App.css';

const ButtonComponent = ({cityArray = [], setCity}) => {

  return (
    <div className='buttonContainer'>
        <div className='buttons'>
            {cityArray && cityArray.map((item) => (
                <Button variant='warning' onClick={()=>setCity(item)}>{item}</Button>
            ))}
        </div>
    </div>
  )
}

export default ButtonComponent;