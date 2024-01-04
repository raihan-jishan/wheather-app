import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar.jsx";
// import WheatherInfoBox from "../WheatherInfoBox/WheatherInfoBox.jsx";
import axios from "axios";
import { useState } from "react";
import WheatherInfoBox from "../WheatherInfoBox/WheatherInfoBox.jsx";
const Searchresults = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  // api url.
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${
    import.meta.VITE_API_KEY
  }`;
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
    <>
      <div className="m-5   flex max-lg:flex-col">
        <Searchbar
          location={location}
          setLocation={setLocation}
          searchLocation={searchLocation}
        />
        <div className="m-5 text-3xl bg-red-200 rounded-full p-1 px-6 text-black font-bold hover:scale-95 transition-all cursor-pointer">
          <Link to={"/"}>
            home
            <i className="fa-light fa-house-chimney"></i>
          </Link>
        </div>
      </div>
      <>
        {data ? (
          <section className="max-lg:mt-20">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7 ">
                <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-300 flex gap-3 max-lg:flex-col text-center">
                  <p className="flex gap-2 items-center justify-center  ">
                    <i className="fa-sharp fa-light fa-location-dot"></i>{" "}
                    {data.name}
                  </p>
                  {data.main ? (
                    <p className="  p-2 rounded-2xl px-4 max-lg:bg-gray-950 max-lg:text-7xl">
                      <h1>
                        {data.main.temp}°C
                        <i className="fa-regular fa-temperature-low text-gray-400"></i>
                      </h1>
                    </p>
                  ) : (
                    <h1 className="text-center p-5 m-20 bg-red-400 rounded-full text-black text-3xl">
                      Search something...
                    </h1>
                  )}
                </h1>

                {data.weather ? (
                  <>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-2 mr-3 text-3xl font-medium text-center text-white   bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 border-gray-400 border-2 rounded-2xl"
                    >
                      <p>{data.weather[0].main} </p>

                      <img
                        src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                        alt="wthr img"
                      />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-3 text-2xl text-gray-900 text-center  border  bg-gray-300 rounded-full font-semibold focus:ring-4 max-lg:mt-4 hover:text-black"
                    >
                      <p>{data.weather[0].description} </p>
                    </a>
                  </>
                ) : null}

                {/* fells like */}

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-700 rounded-2xl p-3 text-2xl ">
                    {data.main ? (
                      <p>
                        Feels Like
                        {(((data.main.feels_like - 32) * 5) / 9).toFixed(2)}°C
                      </p>
                    ) : null}
                  </div>

                  {data.wind ? (
                    <div className="bg-gray-700 rounded-2xl p-3 text-2xl ">
                      <p>{data.wind.speed.toFixed()} MPH Wind Speed</p>
                    </div>
                  ) : null}

                  {data.main ? (
                    <div className="bg-gray-700 rounded-2xl p-3 text-2xl  ">
                      <p>
                        Humidity
                        {data.main.humidity}%
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className=" lg:mt-0 lg:col-span-5 lg:flex">
                <img
                  src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlMTRfaGVhdnlfd2hpdGVfZm9nX2VmZmVjdHNfdHJhbnNwYXJlbnRfaXNvbGF0ZWRfb19lMTE3YjFiNi0yNzcwLTQwMTQtYmQyMi0xOWNmNzA5OTg4ZTBfMS5qcGc.jpg"
                  alt="mockup"
                />
              </div>
            </div>
            {/* more details  */}
            {data.main ? (
              <>
                <div className="grid grid-cols-4 gap-4 mt-6 w-full  m-4 max-lg:grid-cols-1 max-lg:w-11/12 ">
                  <WheatherInfoBox
                    icon="fa-light fa-temperature-sun"
                    WheatherData={data.main.temp_max}
                    details="Max temp"
                    backgroundColor="bg-red-300"
                    textColor="text-black"
                  />
                  <WheatherInfoBox
                    icon="fa-light fa-temperature-snow"
                    WheatherData={data.main.temp_min}
                    details=" Min_temp"
                    backgroundColor="bg-red-100"
                    textColor="text-black"
                  />
                  <WheatherInfoBox
                    icon="fa-light fa-compress"
                    WheatherData={data.main.pressure}
                    details="hpa Air Pressure"
                    backgroundColor="bg-gray-500"
                    textColor="text-gray-800"
                  />
                  <WheatherInfoBox
                    icon="fa-light fa-cloud-fog"
                    WheatherData={(data.visibility / 1000).toFixed()}
                    details="KM visiblity"
                    backgroundColor="bg-gray-800"
                    textColor="text-gray-200"
                  />
                  <WheatherInfoBox
                    icon="fa-solid fa-cloud"
                    WheatherData={data.clouds.all}
                    details="Clouds"
                    backgroundColor="bg-gray-300"
                    textColor="text-gray-900"
                    option={"%"}
                  />
                  <WheatherInfoBox
                    icon="fa-regular fa-mountain-sun"
                    WheatherData={data.sys.country}
                    details="Country"
                    backgroundColor="bg-gray-950"
                    textColor="text-gray-300"
                  />

                  <WheatherInfoBox
                    icon="fa-regular fa-sunrise"
                    // eslint-disable-next-line no-undef
                    WheatherData={moment
                      .utc(data.sys.sunrise, "X")
                      .add(data.timezone, "seconds")
                      .format("HH:mm a")}
                    details="sun rise"
                    backgroundColor="bg-yellow-400"
                    textColor="text-gray-900"
                  />
                  <WheatherInfoBox
                    icon="fa-solid fa-sun-haze"
                    // eslint-disable-next-line no-undef
                    WheatherData={moment
                      .utc(data.sys.sunset, "X")
                      .add(data.timezone, "seconds")
                      .format("HH:mm a")}
                    details="sun set"
                    backgroundColor="bg-amber-600"
                    textColor="text-gray-900"
                  />
                </div>
              </>
            ) : null}

            {/* close */}
          </section>
        ) : null}
      </>
    </>
  );
};

export default Searchresults;
