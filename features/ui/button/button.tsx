import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

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

// export enum ButtonIcon {
//   leading = "leading",
//   trailing = "trailing",
//   only = "only",
// }

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  state?: ButtonState;
};

export function Button({
  children,
  size = ButtonSize.md,
  color = ButtonColor.primary,
  state = ButtonState.default,
  className,
  onClick,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        styles[state],
        className,
      )}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

// export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
//   return (
//     <button {...props} className={classNames(styles.button, props.className)} />
//   );
// }
