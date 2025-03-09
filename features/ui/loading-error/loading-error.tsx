// Task 10: Add error screen to project list
import styles from "./loading-error.module.scss";
import {
  Button,
  ButtonSize,
  ButtonColor,
  ButtonIcon,
  ButtonState,
} from "@features/ui/";
import Image from "next/image";
import alertCircle from "../../../public/icons/alert-circle.svg";
import arrowRight from "../../../public/icons/arrow-right.svg";

export function LoadingError() {
  return (
    <div className={styles.loadingErrorContainer}>
      <div className={styles.contentContainer}>
        <Image src={alertCircle} alt="alert" width={20} height={20} />
        <p className={styles.message}>
          There was a problem while loading the project data
        </p>
        <Button
          size={ButtonSize.sm}
          buttonColor={ButtonColor.emptyError}
          state={ButtonState.default}
          className={styles.button}
        >
          <p className={styles.buttonMessage}>Try again</p>
          <ButtonIcon src={arrowRight} />
        </Button>
      </div>
    </div>
  );
}
