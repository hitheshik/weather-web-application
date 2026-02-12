import { useState, useEffect } from 'react'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'
import sunWithClouds from '../assets/sun-with-clouds.png'
import rain from '../assets/rain.png'

const WeatherCard = ({ weather }) => {
    const [date] = useState(new Date());
    const [weatherImage, setWeatherImage] = useState(sunWithClouds);

    useEffect(() => {
        if (!weather) return;

        const desc = weather.desc.toLowerCase();

        if (desc.includes("rain")) {
            setWeatherImage(rain);
        } else if (desc.includes("snow")) {
            setWeatherImage(sunWithClouds);
        } else if (desc.includes("clear")) {
            setWeatherImage(sunWithClouds);
        } else {
            setWeatherImage(sunWithClouds);
        }

    }, [weather]);

    return (
        <div className="text-center p-6 mt-6 text-black">
            <h2 className="text-2xl capitalize">{weather?.city}</h2>
            <h2 className="text-md mt-1 uppercase">{weather?.desc}</h2>

            <div className="flex justify-center pt-7">
                <img src={weatherImage} alt="weather icon" />
            </div>

            <h1 className="text-4xl font-medium mt-10">
                {weather?.temp}°C
            </h1>

            <h1 className="text-md capitalize italic mt-2">
                {date.toDateString()}
            </h1>

            <div className="flex gap-5 items-center mt-10 justify-center">
                <div className="border border-blue-300 p-3 flex items-center justify-center gap-4 rounded-xl">
                    <div className='w-10'>
                        <img src={wind} className='w-full' alt="wind" />
                    </div>
                    <div>
                        <p className='font-medium'>Wind</p>
                        <p className='font-bold text-blue-500 text-lg'>
                            {weather?.wind} m/s
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
