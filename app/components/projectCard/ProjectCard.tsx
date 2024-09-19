interface Props {
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
}: Props) => {
  return (
    <div>
      <h3>{title ? title : "Title"}</h3>
      <p>{description ? description : "Description"}</p>
      <a href={link1} target="_blank">
        {link1Text}
      </a>
      <a href={link2} target="_blank">
        {link2Text}
      </a>
    </div>
  );
};
