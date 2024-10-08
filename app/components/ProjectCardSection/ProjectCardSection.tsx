import { ProjectCard } from "../projectCard/ProjectCard";
import styles from "./ProjectCardSection.module.css";

export const ProjectCardSection = () => {
  return (
    <section className={styles.section}>
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
        image="/images/catering_bien_casero.png"
      />
      <ProjectCard
        title="Fast Typing Game"
        description=" A typing game that challenges players to type as many words as they
			can in 20 seconds. The game is built with JavaScript. The game is
			hosted on GitHub Pages."
        link1="https://stefanoturcarelli.github.io/fast-typing-game/"
        link2="https://github.com/stefanoturcarelli/fast-typing-game"
        link1Text="Play Game"
        link2Text="Repository"
        image="/images/type_runner.png"
      />
      <ProjectCard
        title="JobLink"
        description="A mock job search website that uses web browser storage to login users and
			allow them to post text and images (username: jobseeker password: hired1234). The website is built with HTML,
			CSS, and JavaScript. The website is hosted on GitHub Pages. (Under Development) Allow users to search for jobs by location and job
			title, create an account, save jobs, and apply to jobs. The website is
			being developed with Next.js, TypeScript, React, Redux, and Vercel."
        link1="https://wellfc.github.io/joblink/"
        link2="https://github.com/stefanoturcarelli/joblink-employment-focused-social-media-platform"
        link1Text="Visit Website"
        link2Text="Repository"
        image="/images/joblink.png"
      />
      <ProjectCard
        title="Essential Oils Website"
        description="A mock website for an essential oils business designed to promote and
			provide information about essential oils. The website is built with
			WordPress, Xamp, and Divi. The website is hosted on GitHub Pages."
        link1="https://stefanoturcarelli.github.io/essential-oils-website/"
        link2="https://github.com/stefanoturcarelli/essential-oils-website"
        link1Text="Visit Website"
        link2Text="Repository"
        image="/images/essential_oils.png"
      />
    </section>
  );
};
