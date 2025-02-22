// Solution 9: Add loading screen to project list
// Added after watching the solution video.
// I first added the loading-indicator directly inside project list but then I moved it to the features/ui folder.
// This way the component is isolated and reusable.

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
