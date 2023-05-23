// on search bar infos and al functionilty added... 
import React, { useState } from "react";
import axios from "axios";
import { CiCloud } from "react-icons/ci";
import { HiCloud } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
function Wheather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar /> 
      {/* end Sidebar */}
       <Searchbar searchLocation={searchLocation} setLocation={setLocation} location={location}/>
      
      <div className="container">
        <div className="top">
          <div className="location">
            <p>
              <GrLocation className="locationIcon" /> {data.name}
            </p>
          </div>
          <div className="temp">
            {data.main ? (
              <h1>{(((data.main.temp - 32) * 5) / 9).toFixed()}°C</h1>
            ) : null}
          </div>
          <div className="description">
            {data.weather ? (
              <p>
                {data.weather[0].main}{" "}
                <HiCloud style={{ fontSize: "2.0rem", color: "silver" }} />
              </p>
            ) : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">
                  {(((data.main.feels_like - 32) * 5) / 9).toFixed(2)}°C
                </p>
              ) : null}

              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>
                Wind Speed <CiCloud />
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wheather;
