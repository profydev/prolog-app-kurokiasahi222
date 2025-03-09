// import { InputHTMLAttributes } from "react";
// import classNames from "classnames";
// import styles from "./checkbox.module.scss";
import { UnstyledCheckBox } from "./unstyled-checkbox";

export enum CheckBoxSize {
  sm = "sm",
  md = "md",
}

// type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
//     children: React.ReactNode;
//     size: CheckBoxSize;
// };

export function CheckBox() {
  return <UnstyledCheckBox type="checkbox" />;
}
