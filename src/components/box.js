import React from 'react';

const Box = ({ data }) => {
  return (
    <div className='weather-box'>
      <div className='title'>{data?.name}
        {data && data.weather && data.weather.length > 0 && (
          <div className='cloud'> {data.weather[0].description}</div>
        )}
      </div>
      <div className='weatherInfo'>
        {data?.main && (
          <>
            <div>평균 기온 : {data.main.temp} C</div>
            <div>최고 기온 : {data.main.temp_max} C</div>
            <div>최저 기온 : {data.main.temp_min} C</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Box;
