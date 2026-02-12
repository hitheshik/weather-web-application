import { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [city, setCity] = useState("");

const handleSearch = () => {
    if (city.trim() === "") return;
    onSearch(city);
};

  return (
    <div className="flex gap-2 mt-6">
      <input type="text" placeholder="Enter city name..."value={city}className="border-b p-2 border-gray-400 outline-none"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-5 py-1 hover:bg-blue-600 rounded"/>     
    </div>
  )
}

export default SearchBox;
