import {useEffect, useState} from 'react';
import axios from "axios";

function App(){
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const apiKey = "63220e6adf11231ffb394e753ba8a95";

  const fetchWeather = async(city) => {
    try{
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );

      const data = res.data;
      const today = data.list[0];
      console.log(data);

      setWeather({
        city: data.city.name,
        temp: today.main.temp,
        desc: today.weather[0].description,
        humidity: today.main.humidity,
        wind: today.wind.speed,
      });

      const daily = data.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .map((day) => ({
          temp: Math.round(day.main.temp),
          desc: day.weather[0].description,
          icon: day.weather[0].icon
        }));
      
      setForecast(daily);

    } catch(error){
      console.error(error);
      alert("City Not Found");
    }
  };

  return(
    <div className = "bg-[#eee] flex flex-col items-center px-5 min-h-screen">
      <div className = "flex w-full items-center justify-between">
        <h1 className="text-blue-500 text-2xl font-bold mt-6">Weather Forecast</h1> 
        <SearchBox  onSearch={fetchWeather}/>
      </div>  
    </div>
  );
}

export default App;
