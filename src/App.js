/*Eslint disabled*/

import './App.css';
import React,{useEffect,useState} from 'react';
import Box from './components/box';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './components/button';
import ClipLoader from "react-spinners/ClipLoader";


const API = `f1e2e51600f17045a5d0a6b6b56f164c`; //API는 고유하기 때문에 고정
const units = `metric`;

function App() {

  const cityArray = ['Current','New york','Paris','Tokyo','Seoul']; //버튼으로 가져가기 위해 선언
  let [data, setData] = useState(''); // weather API 받아오기 위해 useState 함수
  let [city, setCity] = useState(''); // city에 대해 받아오기 위한 setCity 함수 선언
  let [loading, setLoading] = useState(true);
  

  //날씨 API를 받아오는 함수
  const getURL = async (lat,lon) =>{
    let URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${API}&units=${units}`;
    setLoading(true);
    let response = await fetch(URL);
    let data = await response.json();
    let currentLocation = data;

    setData(currentLocation);
    setLoading(false);
  }

  // 현재 위치를 찾아주는 함수
  const getCurrentLocation =() => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      getURL(lat,lon);

    });
  }

  const getWeatherByCity = async() =>{
    let URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=${units}`;
    setLoading(true);
    let response = await fetch(URL);
    let data = await response.json();
    setData(data);
    setLoading(false);

  }


  // 페이지가 렌더링 될때마다 불러줄 함수 선언(useEffect 함수 사용)
  useEffect(()=>{
    if(city == 'Current'){
      getCurrentLocation();
    }else{
      getWeatherByCity();
    }
  },[city])


  return (
    <div className="App">
      {loading?<div className='Container'><ClipLoader color="f88c6b" loading={loading} size={150}/></div>
      :<div className='Container'>   
        <Box data = {data}/>
        <ButtonComponent cityArray = {cityArray} setCity={setCity}/>
      </div>}
    </div>
  );
}

export default App;
