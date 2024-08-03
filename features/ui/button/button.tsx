// import { ButtonHTMLAttributes } from "react";
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
  emptyError = "empty-erorr",
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

type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  state?: ButtonState;
  className?: string;
  onClick?: () => void;
  // icon?: ButtonIcon;
};

export function Button({
  children,
  size = ButtonSize.md,
  color = ButtonColor.primary,
  state = ButtonState.default,
  className,
  onClick,
}: ButtonProps) {
  return (
    <div
      className={classNames(
        styles.container,
        styles[size],
        styles[color],
        styles[state],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
//   return (
//     <button {...props} className={classNames(styles.button, props.className)} />
//   );
// }
