const City = require("../models/City");
const apikey = "a3Dt8ePyWuFnBuwUUVGjLbHZGxcnBKrP";
const baseURL = "http://dataservice.accuweather.com";

exports.getCurrentWeather = async (req, res, next) => {
  let { key, cityName } = req.body;
  let [newCity, _] = await City.findByKey(key);

  if (newCity.length > 0) {
    res.status(200).json({ city: newCity[0] });
  } else {
    await fetch(`${baseURL}/currentconditions/v1/${key}?apikey=${apikey}`)
      .then((response) => response.json())
      .then((data) => {
        let city = data[0];
        let newCity = new City(
          key,
          cityName,
          parseInt(city.Temperature.Metric.Value, 10),
          city.WeatherText,
        );
        newCity.save();
        res.status(200).json({ city: newCity });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
