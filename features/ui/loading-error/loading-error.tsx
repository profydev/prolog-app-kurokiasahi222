// Task 10: Add error screen to project list
import Image from "next/image";
import styles from "./loading-error.module.scss";
import {
  Button,
  ButtonSize,
  ButtonColor,
  ButtonIcon,
  ButtonState,
} from "@features/ui/";
import alertCircle from "../../../public/icons/alert-circle.svg";
import arrowRight from "../../../public/icons/arrow-right.svg";

export function LoadingError({ refetch }: { readonly refetch: () => void }) {
  return (
    <div className={styles.loadingErrorContainer} data-testid="loading-error">
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
          onClick={() => {
            refetch();
          }}
        >
          <p className={styles.buttonMessage}>Try again</p>
          <ButtonIcon src={arrowRight} />
        </Button>
      </div>
    </div>
  );
}
