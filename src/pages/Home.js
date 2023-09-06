/*
  title: Home.js file, 
  desc: main file for home info , location details everything..
  date: 06 - 09 - 2023.
*/
// requre all importnat modules and css file.
import React, { useState } from "react";
import "../css/home.css";
import axios from "axios"; // axios for make HTTP requests from node. js or XMLHttpRequests from the browser
//icon files .
import { CiCloud } from "react-icons/ci";
import { HiCloud } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
// sidebaqr
import Sidebar from "../components/Sidebar/Sidebar.js";
// searchbar
import Searchbar from "../components/Sidebar/Searchbar";
// whaether function
function Home() {
  // initialize useState hook .
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  // api url.
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
  // if else satatement.
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
    // container
    <div className="container">
      <div className="inline-block">
        {/* Sidebar */}
        <Sidebar />
        {/* end Sidebar */}
        {/* search bar */}
        <Searchbar
          searchLocation={searchLocation}
          setLocation={setLocation}
          location={location}
        />
        {/* clsoe there */}
      </div>

      {/* top infos */}
      <div className="topInfos">
        <div className="location">
          {data.main ? (
            <p>
              <GrLocation className="locationIcon" /> {data.name}
            </p>
          ) : (
            <h4>Search something.</h4>
          )}
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
              {data.wind.speed.toFixed()} MPH Wind Speed <CiCloud />
            </p>
          </div>
        )}
      </div>
      {/* close there */}
    </div>
  );
}

export default Home;
