import type { Metadata } from "next";
import { ProjectCardSection } from "./components/ProjectCardSection/ProjectCardSection";

export default function IndexPage() {
  return (
    <>
      <div className="container">
        <br />
        <h1>Stefano Turcarelli</h1>
        <h4>Software Developer</h4>
        <br />
        <p>
          I'm Stefano, a passionate Software Developer based in Winnipeg,
          Manitoba, Canada 🍁. I've always been fascinated by technology and how
          it can improve people's lives. Recently graduated from the Manitoba
          Institute of Trades and Technology, I created this website to showcase
          my projects and the skills I've developed along the way.
        </p>
        <br />
        <h2>Projects</h2>
        <br />
        <ProjectCardSection />
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Stefano Turcarelli's portfolio",
};
