const SearchBox = () => {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if(city.trim() !== ""){
            fetchWeather(city);
        }
    };

    return(
        <div className="min-h-screen flex gap-2 mt-6">    
            <input 
                type="text" 
                placeholder="Enter city name" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                className="border-b-1 p-2 border-gray-300 w-60 outline-none"
            />
            <button 
                onClick={handleSearch} 
                className="bg-blue-500 text-white px-5 py-1 hover:bg-blue-600 cursor-pointer"
            >
                Search
            </button>
        </div>    
    )
}

export default SearchBox;
