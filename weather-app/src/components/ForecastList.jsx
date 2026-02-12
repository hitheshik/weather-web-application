import WeatherCard from "./WeatherCard"
import SearchBox from "./SearchBox"

const ForecastList = ({ forecast }) => {
    return (
        <div className="bg-[#eee] flex flex-col items-center px-5 min-h-screen">
            <div className="flex w-full items-center justify-between">
                {forecast?.map((day, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-[#f5f5f5] shadow-sm py-5 px-5 rounded-lg text-center text-black"
                        >
                            <p>{day.date}</p>

                            <img
                                src={`https://openweathermap.org/img/wn/${day.icon}.png`}
                                alt=""
                                className="mx-auto"
                            />

                            <p>{day.temp}°C</p>
                            <p className="capitalize">{day.desc}</p>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ForecastList;
