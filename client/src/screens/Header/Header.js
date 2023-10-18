import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { texts } from "../../helpers/texts";

export const Header = () => {
  return (
    <div className={styles.div}>
      <div className={styles.secondDiv}>
        <Link className={styles.button} to="/">
          {texts.mainScreen}
        </Link>
        <Link className={styles.button} to="/favorites">
          {texts.favoritesScreen}
        </Link>
      </div>
    </div>
  );
};
