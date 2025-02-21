import Image from "next/image";
import loadingCircle from "../../../public/icons/loading-circle.svg";
import styles from "./loading-indicator.module.scss";

export function LoadingIndicator() {
  return (
    <div className={styles.loading} data-testid="loading-indicator">
      <Image
        className={styles.spin}
        src={loadingCircle.src}
        alt="loading"
        width={64}
        height={64}
      />
    </div>
  );
}
