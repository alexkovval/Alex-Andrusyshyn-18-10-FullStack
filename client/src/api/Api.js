import axios from "axios";

const BASE_URL = "http://dataservice.accuweather.com";
const apikey = "a3Dt8ePyWuFnBuwUUVGjLbHZGxcnBKrP";

export const SearchCity = async (searchText, setCities) => {
  axios
    .get(
      `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${apikey}&q=${searchText}`,
    )
    .then((response) => {
      setCities(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const SearchWeatherByCity = async (
  cityKey,
  cityName,
  setActiveCityWeather,
) => {
  axios
    .post(
      `http://localhost:5000/cities`,
      { key: cityKey, cityName: cityName },
      {
        headers: {
          "content-type": "application/json",
        },
      },
    )
    .then((response) => {
      console.log(response.data.city);
      setActiveCityWeather(response.data.city);
    })
    .catch((error) => {
      console.log(error);
    });
};
