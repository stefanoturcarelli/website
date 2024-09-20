"use client";

import { RepositoryButton } from "../RepositoryButton/RepositoryButton";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  readonly title: string;
  readonly description: string;
  readonly link1: string;
  readonly link2: string;
  readonly link1Text: string;
  readonly link2Text: string;
}

export const ProjectCard = ({
  title,
  description,
  link1,
  link2,
  link1Text,
  link2Text,
}: ProjectCardProps) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}></div>
        <div className={styles.heading}>
          <h3>{title ? title : "Title"}</h3>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            {description ? description : "Description"}
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <a className={styles.link} href={link1} target="_blank">
            {link1Text}
          </a>
          <RepositoryButton link2={link2} link2Text={link2Text} />
        </div>
      </div>
    </>
  );
};
