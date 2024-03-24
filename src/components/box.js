import React from 'react';
import '../components/box.css';

const Box = ({ data }) => {

  const icon = data && data.weather && data.weather.length > 0 ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` : null;
  
  return (
    <div className='weather-box'>
      {data ? (
        <>
          <div className='title'>{data?.name}
            {data && data.weather && data.weather.length > 0 && (
              <>
                <div className='cloud'> {data?.weather[0].description}</div>
                {icon && (
                  <img className="weatherIcon"src={icon} style={{
                    width:'80px',
                    backgroundColor:'#C9AEF2',
                    borderRadius:'50px',
                  }}/>
                )}
              </>
            )}
          </div>
          <div className='weatherInfo'>
            {data?.main ? (
              <>
                <div>평균 기온 : {data.main.temp} C</div>
                <div>최고 기온 : {data.main.temp_max} C</div>
                <div>최저 기온 : {data.main.temp_min} C</div>
              </>
            ) : (
              <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                margin:'20px',
                fontSize:'25px'
              }}>{data.message}</div>
            )}
          </div>
        </>
      ) : (
        <div>잠시만 기다려주세요!</div>
      )}
    </div>
  );
};

export default Box;
