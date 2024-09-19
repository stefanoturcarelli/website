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
    <div className={styles.card}>
      <h3 className={styles.title}>{title ? title : "Title"}</h3>
      <p className={styles.description}>
        {description ? description : "Description"}
      </p>
      <div className={styles.linkContainer}>
        <a className={styles.link} href={link1} target="_blank">
          {link1Text}
        </a>
        <a className={styles.link} href={link2} target="_blank">
          {link2Text}
        </a>
      </div>
    </div>
  );
};
