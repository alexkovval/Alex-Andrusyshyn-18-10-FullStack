import { useState } from "react";
import { SearchCity, SearchWeatherByCity } from "../../api/Api";
import styles from "./Main.module.scss";
import { Card } from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../redux/citiesSlice";
import { Search } from "../../components/Search/Search";
import { Menu } from "../../components/Menu/Menu";
import { texts } from "../../helpers/texts";

export const Main = () => {
  const { favorites } = useSelector((state) => state.cities);
  const dispatch = useDispatch();
  const [cities, setCities] = useState([]);
  const [activeCity, setActiveCity] = useState({});
  const [activeCityWeather, setActiveCityWeather] = useState({});
  const [searchText, setSearchText] = useState(null);

  const search = async () => {
    await SearchCity(searchText, setCities);
  };

  const onClick = async (city) => {
    setActiveCity(city);
    await SearchWeatherByCity(
      city.Key,
      city.LocalizedName,
      setActiveCityWeather,
    );
  };

  const addToFavorites = () => {
    dispatch(setFavorites([...favorites, activeCity]));
    alert("Added!");
  };
  return (
    <div className={styles.container}>
      <div className={styles.mainDiv}>
        <Search setSearchText={setSearchText} search={search} />
        {activeCityWeather.temperature && (
          <Card
            src={require("../../assets/heartred.png")}
            text={texts.addText}
            city={activeCity}
            weather={activeCityWeather}
            click={addToFavorites}
          />
        )}
      </div>
      <Menu cities={cities} onClick={onClick} activeCity={activeCity} />
    </div>
  );
};
