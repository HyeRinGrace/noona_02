import React, { useEffect, useState } from 'react';
import Box from './components/box'; // 파일명 수정: Box.js로 변경
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './components/button'; // 파일명 수정: Button.js로 변경
import ClipLoader from "react-spinners/ClipLoader";
import InputWeather from './components/inputWeather';

const API = `f1e2e51600f17045a5d0a6b6b56f164c`;
const units = `metric`;

function App() {
  const cityArray = ['Current', 'New york', 'Paris', 'Tokyo', 'Beijing','Seoul'];
  const [data, setData] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchWeather, setSearchWeather] = useState('');

  const getURL = async (lat, lon) => {
    try {
      let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${API}&units=${units}`;
      setLoading(true);
      let response = await fetch(URL);
      let dataWeather = await response.json();
      setData(dataWeather);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  const getCurrentLocation = () => {
    navigator.geolocation?.getCurrentPosition((position) => {
      if (position?.coords.latitude && position?.coords.longitude) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getURL(lat, lon);
      } else {
        console.error("Cannot get current location coordinates.");
      }
    });
  };

  useEffect(() => {
    getCurrentLocation(); // 페이지 로드 시 사용자의 위치를 받아옴
  }, []); // 빈 배열을 넘겨주어 한 번만 실행되도록 함

  const getWeatherByCity = async () => {
    try {
      let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=${units}`;
      setLoading(true);
      let response = await fetch(URL);
      let data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  const getWeatherBySearch = async () => {
    try {
      let URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&appid=${API}&units=${units}`;
      setLoading(true);
      let response = await fetch(URL);
      let data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  useEffect(() => {
    if (city === 'Current') {
      getCurrentLocation();
    } 
    else {
      getWeatherByCity();
    }
  }, [city]);

  useEffect(() => {
    if (searchWeather) {
      getWeatherBySearch();
    }
  }, [searchWeather]);

  return (
    <>
    <h3>Hyerin's Weather</h3>
    <div className="App">
      {loading ? (
        <div className='Container'>
          <ClipLoader color="white" loading={loading} size={150} />
        </div>
      ) : (
        <div className='Container'>
          <InputWeather setSearchWeather={setSearchWeather} />
          <Box data={data} />
          <ButtonComponent cityArray={cityArray} setCity={setCity} />
        </div>
      )}
    </div>
    </>
  );
}

export default App;
