// on search bar infos and al functionilty added...
import React, { useState } from "react";
import "../css/home.css";
import axios from "axios";  
import { CiCloud } from "react-icons/ci";
import { HiCloud } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import Sidebar from "../components/Sidebar/Sidebar.js";
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
    <div className="container">
      {/* date and time bar */}
      <div className="date-timeInfo">
        <h1>{new Date().toDateString()}</h1>
      </div>
      {/* search bar */}
      <Searchbar
        searchLocation={searchLocation}
        setLocation={setLocation}
        location={location}
      />
      {/* clsoe there */}
      {/* Sidebar */}
      <Sidebar />
      {/* end Sidebar */}
      {/* close there */}
      <div className="topInfos">
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

      {/* wheather details */}
      <div className="wheather-details">
        {data.name !== undefined && (
          <div className="feels">
            {data.main ? (
              <>
                <p>
                  Feels Like
                  {(((data.main.feels_like - 32) * 5) / 9).toFixed(2)}°C
                </p>
              </>
            ) : null}
            <>
              <p>
                Humidity
                {data.main.humidity}%
              </p>
            </>

            <p>
              {data.wind.speed.toFixed()} MPH
              Wind Speed <CiCloud />
            </p>
          </div>
        )}
      </div>
      {/* close there */}
    </div>
  );
}

export default Wheather;
