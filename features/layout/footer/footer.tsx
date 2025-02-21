import styles from "./footer.module.scss";
import { Button } from "@features/ui";
// import packages from "package.json";
// Solution 8: Above line is replaced with the {process.env} after watching the solution video for Footer: task 8
import Link from "next/link";
import Image from "next/image";

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
          <p className={styles.version}>Version: {process.env.appVersion}</p>
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
          <Image
            src={"/icons/logo-small.svg"}
            alt="logo"
            width={23}
            height={33}
          />
          {/* <img src={"/icons/logo-small.svg"} alt="logo" /> */}
        </div>
      </div>
    </footer>
  );
}
