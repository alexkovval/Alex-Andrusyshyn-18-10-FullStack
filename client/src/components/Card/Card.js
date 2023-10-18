import styles from "./Card.module.scss";

export const Card = ({ city, weather, click, src, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.divLike}>
        <button className={styles.button} onClick={() => click()}>
          {text}
          <img className={styles.imgLike} src={src} alt="icon" />
        </button>
      </div>
      <h2 className={styles.text}>{city.LocalizedName}</h2>
      <h1 className={styles.text}>{weather.temperature}°C</h1>
      <h4 className={styles.text}>{weather.about}</h4>
    </div>
  );
};
