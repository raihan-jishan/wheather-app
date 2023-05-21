import React, { useState } from "react";
import axios from "axios";
import { HiCloud } from "react-icons/hi";
export default function Locationitem(props) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.LocationPlace}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
  // state varaibles
  const [data, setData] = useState({});
  // functions
  //   let location = item.value;
  const fetchWheather = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };
  // initailize props
  const imageTo_Url = props.imageTo_Url;
  const name = props.location;
  return (
    <div className="rows" onMouseOver={fetchWheather}>
      <img src={imageTo_Url} alt="404 module not found!" />

      <div className="infos">
        {data.main ? (
          <h1>{(((data.main.temp - 32) * 5) / 9).toFixed()}°C</h1>
        ) : null}
        {data.weather ? (
          <p>
            {data.weather[0].main}{" "}
            <HiCloud
              className="wave"
              style={{ fontSize: "2.0rem", color: "silver" }}
            />
          </p>
        ) : null}
      </div>
      <h1 className="locations">{name}</h1>
    </div>
  );
}
