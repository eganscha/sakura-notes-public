import styles from "./LogoWithText.module.css";
import { Link } from 'react-router';

function LogoWithText() {
    return (
        <Link to="/" className={styles.container}>
            <img className={styles.logo}
                 src="/src/assets/sakura-notes-icon-256-256.png"
                 alt="SakuraNotes Logo"
                 width={40}
                 height={40}
                 style={{ objectFit: 'contain' }}
            />
            <span className={styles.text}>SakuraNotes</span>
        </Link>
    );
}

export default LogoWithText;