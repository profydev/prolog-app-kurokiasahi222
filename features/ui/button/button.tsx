import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";
import { UnstyledButton } from "./unstyled-button";

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
  // iconOnly = "iconOnly",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  size: ButtonSize;
  buttonColor: ButtonColor;
  state: ButtonState;
  icon?: boolean;
};

export function Button({
  className,
  size = ButtonSize.md,
  buttonColor = ButtonColor.primary,
  state = ButtonState.default,
  icon = false,
  ...props
}: ButtonProps) {
  return (
    <UnstyledButton
      className={classNames(
        styles.container,
        styles[size],
        styles[buttonColor],
        styles[state],
        icon ? styles.iconOnly : "",
        className,
      )}
      {...props}
    />
  );
}
