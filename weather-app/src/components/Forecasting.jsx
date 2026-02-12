import WeatherCard from "./WeatherCard"
import SearchBox from "./SearchBox"

const ForecastList = () => {
    return (
        <div className="bg-[#eee] flex flex-col items-center px-5 min-h-screen">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-blue-500 text-2xl font-bold mt-6">
                    Weather Forecast
                </h1>
                <SearchBox onSearch={fetchWeather} />
            </div>

            <WeatherCard weather={weather} />
        </div>
    );
}

export default ForecastList;
