"use client";

import styles from "./RegularButton.module.css";

interface RegularButtonProps {
  readonly link1: string;
  readonly link1Text: string;
}

export const RegularButton = ({ link1, link1Text }: RegularButtonProps) => {
  const handleButtonClick = () => {
    window.open(link1, "_blank");
  };

  return (
    <button className={styles.button} onClick={handleButtonClick}>
      <p className={styles.buttonText}>{link1Text}</p>
    </button>
  );
};
