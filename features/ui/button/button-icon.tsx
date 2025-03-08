import Image from "next/image";
import styles from "./button.module.scss";
type ButtonIconProps = {
  readonly src: string;
};

export function ButtonIcon({ src }: ButtonIconProps) {
  return (
    <Image className={styles.icon} width={20} height={20} src={src} alt={src} />
  );
}
