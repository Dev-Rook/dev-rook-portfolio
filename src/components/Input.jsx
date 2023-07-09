import styles from "../styles/comps/input.module.scss";

// Material UI Import:
import SearchIcon from "@mui/icons-material/Search";

const Input = ({ setSearch, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <SearchIcon sx={{ color: "black" }} />
        <input
          type="text"
          className={styles.input}
          placeholder={`Search via ${placeholder}`}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
