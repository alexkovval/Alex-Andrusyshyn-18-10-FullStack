import { useState } from "react";
import { SearchWeatherByCity } from "../../api/Api";
import styles from "./Favorites.module.scss";
import { Card } from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../redux/citiesSlice";
import { Menu } from "../../components/Menu/Menu";
import { texts } from "../../helpers/texts";

export const Favorites = () => {
  const { favorites } = useSelector((state) => state.cities);
  const dispatch = useDispatch();
  const [activeCity, setActiveCity] = useState({});
  const [activeCityWeather, setActiveCityWeather] = useState({});

  const onClick = async (city) => {
    setActiveCity(city);
    console.log(city);
    await SearchWeatherByCity(
      city.Key,
      city.LocalizedName,
      setActiveCityWeather,
    );
  };

  const remove = () => {
    const newArr = favorites.filter((fav) => {
      return fav.Key !== activeCity.Key;
    });
    alert("Removed!");
    setActiveCityWeather([]);
    dispatch(setFavorites(newArr));
    localStorage.setItem("favorites", newArr);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainDiv}>
        {activeCityWeather.temperature && (
          <Card
            src={require("../../assets/heartgrey.png")}
            text={texts.removeText}
            city={activeCity}
            weather={activeCityWeather}
            click={() => remove()}
          />
        )}
      </div>
      <Menu cities={favorites} onClick={onClick} activeCity={activeCity} />
    </div>
  );
};
