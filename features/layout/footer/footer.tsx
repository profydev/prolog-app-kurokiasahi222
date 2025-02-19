import styles from "./footer.module.scss";
import { Button } from "@features/ui";
import packages from "package.json";
import Link from "next/link";
const menuItems = [
  { text: "Docs", href: "/#" },
  { text: "API", href: "/#" },
  { text: "Help", href: "/#" },
  { text: "Community", href: "/#" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.versionContainer}>
          <p className={styles.version}>Version: {packages.version}</p>
        </div>
        <div className={styles.list}>
          {menuItems.map((item) => (
            <Button key={item.text}>
              <Link href={item.href} className={styles.menuItem}>
                {item.text}
              </Link>
            </Button>
          ))}
        </div>
        <div className={styles.logoContainer}>
          <img src={"/icons/logo-small.svg"} alt="logo" />
        </div>
      </div>
    </footer>
  );
}
