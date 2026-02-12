const WeatherCard = () => {
    return (
        <div className="text-center p-6 mt-6 text-black">
            <h2 className="text-2xl capitalize"></h2>
            <h2 className="text-md mt-1 uppercase"></h2>

            <div className="flex justify-center pt-7">
                <img src="" alt="" />
            </div>

            <h1 className="text-4xl font-medium mt-10"></h1>
            <h1 className="text-md capitalize italic mt-2"></h1>

            <div className="flex gap-5 items-center mt-10 justify-center">
                <div className="border border-blue-300 p-3 flex-items-center justify-center gp-4 round-x1">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
