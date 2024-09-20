"use client";

import { RegularButton } from "../RegularButton/RegularButton";
import { RepositoryButton } from "../RepositoryButton/RepositoryButton";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  readonly title: string;
  readonly description: string;
  readonly link1: string;
  readonly link2: string;
  readonly link1Text: string;
  readonly link2Text: string;
  readonly image?: string;
}

export const ProjectCard = ({
  title,
  description,
  link1,
  link2,
  link1Text,
  link2Text,
  image,
}: ProjectCardProps) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <img
            src={image ? image : "https://via.placeholder.com/250"}
            alt="Project Image"
            className={styles.image}
          />
        </div>
        <div className={styles.heading}>
          <h3>{title ? title : "Title"}</h3>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            {description ? description : "Description"}
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <RegularButton link1={link1} link1Text={link1Text} />
          <RepositoryButton link2={link2} link2Text={link2Text} />
        </div>
      </div>
    </>
  );
};
