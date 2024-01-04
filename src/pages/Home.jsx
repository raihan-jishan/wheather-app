import { useEffect, useState } from "react";
import WeatherInfoBox from "../components/WheatherInfoBox/WheatherInfoBox.jsx";
const Home = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    // Make API call to OpenWeatherMap
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }
  useEffect(() => {
    handleLocationClick();
  }, []);

  return (
    <>
      {weather ? (
        <section className="max-lg:mt-20">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7 ">
              <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-300 flex gap-3 max-lg:flex-col text-center">
                <p className="flex gap-2 items-center justify-center  ">
                  <i className="fa-sharp fa-light fa-location-dot"></i>{" "}
                  {weather.name}
                </p>
                <p className="  p-2 rounded-2xl px-4 max-lg:bg-gray-950 max-lg:text-7xl">
                  <h1>
                    {weather.main.temp}°C
                    <i className="fa-regular fa-temperature-low text-gray-400"></i>
                  </h1>
                </p>
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"></p>

              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-2 mr-3 text-3xl font-medium text-center text-white   bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 border-gray-400 border-2 rounded-2xl"
              >
                <p>{weather.weather[0].main} </p>

                <img
                  src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                  alt="wthr img"
                />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-2xl text-gray-900 text-center  border  bg-gray-300 rounded-full font-semibold focus:ring-4 max-lg:mt-4 hover:text-black"
              >
                <p>{weather.weather[0].description} </p>
              </a>

              {/* fells like */}

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-700 rounded-2xl p-3 text-2xl ">
                  {weather.main ? (
                    <p>
                      Feels Like
                      {(((weather.main.feels_like - 32) * 5) / 9).toFixed(2)}°C
                    </p>
                  ) : null}
                </div>

                <div className="bg-gray-700 rounded-2xl p-3 text-2xl ">
                  <p>{weather.wind.speed.toFixed()} MPH Wind Speed</p>
                </div>

                <div className="bg-gray-700 rounded-2xl p-3 text-2xl  ">
                  <p>
                    Humidity
                    {weather.main.humidity}%
                  </p>
                </div>
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
          {weather.main ? (
            <>
              <div className="grid grid-cols-4 gap-4 mt-6 w-full  m-4 max-lg:grid-cols-1 max-lg:w-11/12 ">
                <WeatherInfoBox
                  icon="fa-light fa-temperature-sun"
                  WheatherData={weather.main.temp_max}
                  details="Max temp"
                  backgroundColor="bg-red-300"
                  textColor="text-black"
                />
                <WeatherInfoBox
                  icon="fa-light fa-temperature-snow"
                  WheatherData={weather.main.temp_min}
                  details=" Min_temp"
                  backgroundColor="bg-red-100"
                  textColor="text-black"
                />
                <WeatherInfoBox
                  icon="fa-light fa-compress"
                  WheatherData={weather.main.pressure}
                  details="hpa Air Pressure"
                  backgroundColor="bg-gray-500"
                  textColor="text-gray-800"
                />
                <WeatherInfoBox
                  icon="fa-light fa-cloud-fog"
                  WheatherData={(weather.visibility / 1000).toFixed()}
                  details="KM visiblity"
                  backgroundColor="bg-gray-800"
                  textColor="text-gray-200"
                />
                <WeatherInfoBox
                  icon="fa-solid fa-cloud"
                  WheatherData={weather.clouds.all}
                  details="Clouds"
                  backgroundColor="bg-gray-300"
                  textColor="text-gray-900"
                  option={"%"}
                />
                <WeatherInfoBox
                  icon="fa-regular fa-mountain-sun"
                  WheatherData={weather.sys.country}
                  details="Country"
                  backgroundColor="bg-gray-950"
                  textColor="text-gray-300"
                />

                <WeatherInfoBox
                  icon="fa-regular fa-sunrise"
                  // eslint-disable-next-line no-undef
                  WheatherData={moment
                    .utc(weather.sys.sunrise, "X")
                    .add(weather.timezone, "seconds")
                    .format("HH:mm a")}
                  details="sun rise"
                  backgroundColor="bg-yellow-400"
                  textColor="text-gray-900"
                />
                <WeatherInfoBox
                  icon="fa-solid fa-sun-haze"
                  WheatherData={moment
                    .utc(weather.sys.sunset, "X")
                    .add(weather.timezone, "seconds")
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
  );
};

export default Home;
