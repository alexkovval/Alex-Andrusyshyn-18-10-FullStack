import { texts } from "../../helpers/texts";
import styles from "./Menu.module.scss";

export const Menu = ({ cities, onClick, activeCity }) => {
  return (
    <div className={styles.menuDiv}>
      <h2 className={styles.citiesH}>{texts.cities}</h2>
      {cities &&
        cities.map((city, index) => (
          <div
            className={[
              styles.divCityName,
              city.Key.includes(activeCity.Key) && styles.clickedCityName,
            ].join(" ")}
            key={index}
            onClick={() => onClick(city)}
          >
            {city.LocalizedName}
          </div>
        ))}
    </div>
  );
};
