import React, { useState } from "react";
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';
import Information from "./Information";

function App() {


  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location }&appid=3123e704f6059f59005860aa30e06d64
  `
  
  const fetchWeather = (e) => {
      e.preventDefault();
      console.log('gandu')
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data)
      })
  }

  return (
    <div>
        
        <div className="bg-[url('C:\Users\HP\Desktop\weatherapp\src\Assets\background.jpg')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen">

          <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
            <form onSubmit={fetchWeather} className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl">
              <div>
                <input onChange={(e)=> setLocation(e.target.value)} className="w-full bg-transparent border-none text-white focus:outline-none text-2xl" type='text' placeholder="Search city" />
              </div>
              <button onClick={fetchWeather}><BsSearch size={20}/></button>
            </form>
          </div>
          <Information info={data}/>
        </div>
    </div>
  );
}

export default App;
