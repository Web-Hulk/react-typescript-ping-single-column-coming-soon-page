import { CSSProperties } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

type SnackbarProps = {
  text: string;
  vertical?: "top" | "bottom";
  horizontal?: "left" | "right";
};

export const Snackbar = ({
  text,
  vertical = "bottom",
  horizontal = "left",
}: SnackbarProps) => {
  const style: CSSProperties = {
    position: "fixed",
    [vertical]: "40px",
    [horizontal]: "40px",
  };

  return (
    <div className="snackbar-container" style={style}>
      <IoIosCheckmarkCircle className="snackbar-icon" />
      <span>{text}</span>
    </div>
  );
};
