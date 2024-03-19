import Image from "next/image";
import styles from "../app/layout.module.scss";

const Header = () => {
    return (
        <div className={styles.main_header}>
            <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
        </div>
    );
};

export default Header;