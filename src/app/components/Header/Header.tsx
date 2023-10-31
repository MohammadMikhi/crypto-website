import styles from "./Header.module.scss";
import { SiBitcoinsv } from "react-icons/si";
export default function Header() {
    const style = {color: 'gold'}
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <SiBitcoinsv style={style}/>
        Crypto Information Site
      </div>
    </div>
  );
}
