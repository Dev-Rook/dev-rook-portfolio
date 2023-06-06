
import styles from "../styles/comp-styles/footer.module.scss"

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <p className={styles.Copyright_Tag}>
        © {Year} Rook. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;