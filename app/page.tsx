import type { Metadata } from "next";
import { ProjectCard } from "./components/projectCard/ProjectCard";

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
        <br />
        <h2>Projects</h2>
        <br />
        <ProjectCard
          title="Catering Business Website"
          description=" A website for a catering business designed to promote and provide
          information about a food catering services business based in Buenos
          Aires, Argentina. The website is built with HTML, CSS, and JavaScript.
          The website is hosted on GitHub Pages.
          (Under Development) Allow customers to place orders online. Allow the
          business owner to manage customers, orders, update the menu, and
          display the analytics of the business. The website is being developed
          with Next.js, TypeScript, React, Redux, and Vercel.
          "
          link1="https://cateringbiencasero.com/"
          link2="https://github.com/stefanoturcarelli/catering-bien-casero"
          link1Text="Visit Website"
          link2Text="Repository"
        />
        <br />
        <ProjectCard
          title="Fast Typing Game"
          description=" A typing game that challenges players to type as many words as they
          can in 20 seconds. The game is built with JavaScript. The game is
          hosted on GitHub Pages."
          link1="https://stefanoturcarelli.github.io/fast-typing-game/"
          link2="https://github.com/stefanoturcarelli/fast-typing-game"
          link1Text="Play Game"
          link2Text="Repository"
        />
        <br />
        <ProjectCard
          title="JobLink"
          description="A mock job search website that uses web browser storage to login users and
          allow them to post text and images. The website is built with HTML,
          CSS, and JavaScript. The website is hosted on GitHub Pages. (Under Development) Allow users to search for jobs by location and job
          title, create an account, save jobs, and apply to jobs. The website is
          being developed with Next.js, TypeScript, React, Redux, and Vercel."
          link1="https://wellfc.github.io/joblink/"
          link2="https://wellfc.github.io/joblink/"
          link1Text="Visit Website"
          link2Text="Repository"
        />
        <br />
        <ProjectCard
          title="Essential Oils Website"
          description="A mock website for an essential oils business designed to promote and
          provide information about essential oils. The website is built with
          WordPress, Xamp, and Divi. The website is hosted on GitHub Pages."
          link1="https://stefanoturcarelli.github.io/essential-oils-website/"
          link2="https://github.com/stefanoturcarelli/essential-oils-website"
          link1Text="Visit Website"
          link2Text="Repository"
        />
        <br />
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Stefano Turcarelli's portfolio",
};
