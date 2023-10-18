import styles from "./Search.module.scss";

export const Search = ({ setSearchText, search }) => {
  return (
    <div className={styles.search}>
      <input
        className={styles.searchTerm}
        type="text"
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button className={styles.searchButton} onClick={search}>
        <img
          className={styles.img}
          alt="icon"
          src={require("../../assets/search.png")}
        />
      </button>
    </div>
  );
};
