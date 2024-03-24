import React, { useState } from 'react';
import SearchIcon from '../assets/search.svg'

const InputWeather = ({ setSearchWeather }) => {
  const [inputValue, setInputValue] = useState('');

  const inputValueCheck = (event) => {
    setInputValue(event.target.value);
  }

  const handleSearch = () => {
    setSearchWeather(inputValue);
  }

  return (
    <div className='inputContainer' style={{
        padding:'30px'
    }}>
      <input className="input"value={inputValue} onChange={inputValueCheck} style={{
        width:'120px',
        borderRadius:'20px',
        opacity:'0.8',
        padding:'6px',
        border:'none',

      }} placeholder='Search'></input>
        <img src={SearchIcon} onClick={handleSearch} style={{
            width:'35px',
            padding:'4px',
            margin:'5px',
            cursor:'pointer',
            margin:'1px',
        }}/>
    </div>
  );
}

export default InputWeather;
