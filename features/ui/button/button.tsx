import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";
import { UnstyledButton } from "./unstyled-button";
import Image from "next/image";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "empty-gray",
  error = "error",
  emptyError = "empty-error",
}

export enum ButtonState {
  default = "default",
  hover = "hover",
  focused = "focused",
  disabled = "disabled",
}

export enum ButtonIcon {
  default = "default",
  leading = "leading",
  trailing = "trailing",
  only = "only",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  size: ButtonSize;
  buttonColor: ButtonColor;
  state: ButtonState;
  icon: ButtonIcon;
};

export function Button({
  className,
  size = ButtonSize.md,
  buttonColor = ButtonColor.primary,
  state = ButtonState.default,
  icon = ButtonIcon.default,
  ...props
}: ButtonProps) {
  return (
    <UnstyledButton
      className={classNames(
        styles.container,
        styles[size],
        styles[buttonColor],
        styles[state],
        styles[icon],
        className,
      )}
      {...props}
    >
      <Image
        className={styles.icon}
        src="/icons/circle.svg"
        alt="Circle Icon"
        width={20}
        height={20}
      />
      <p className={styles.text}>Button CTA</p>
    </UnstyledButton>
  );
}
