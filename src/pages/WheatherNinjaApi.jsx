const WheatherNinjaApi = async () => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e5498567cbmsh1b25442d512a573p112682jsnb1f2cdad496d",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  return <div>WheatherNinjaApi</div>;
};

export default WheatherNinjaApi;
