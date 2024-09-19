import type { Metadata } from "next";

export default function IndexPage() {
  return (
    <>
      <div className="container">
        <h1>Stefano Turcarelli</h1>
        <h4>Software Developer</h4>
        <p>
          I'm Stefano, a passionate Software Developer based in Winnipeg,
          Manitoba, Canada 🍁. I've always been fascinated by technology and how
          it can improve people's lives. Recently graduated from the Manitoba
          Institute of Trades and Technology, I created this website to showcase
          my projects and the skills I've developed along the way.
        </p>
        <br />
        <h2>Projects</h2>
        <h3>Catering Business Website</h3>
        <p>
          A website for a catering business designed to promote and provide
          information about a food catering services business based in Buenos
          Aires, Argentina. The website is built with HTML, CSS, and JavaScript.
          The website is hosted on GitHub Pages.
        </p>
        <p>
          (In Progress) Allow customers to place orders online. Allow the
          business owner to manage customer, orders, update the menu, and
          display the analytics of the business. The website is being developed
          with Next.js, TypeScript, React, Redux, and Vercel.
        </p>
        <br />
        <h3>Fast Typing Game</h3>
        <p>
          A typing game that challenges players to type as many words as they
          can in 20 seconds. The game is built with JavaScript. The game is
          hosted on GitHub Pages.
        </p>
        <a
          href="https://stefanoturcarelli.github.io/fast-typing-game/"
          target="_blank"
        >
          Play Game
        </a>
        <a
          href="https://github.com/stefanoturcarelli/fast-typing-game"
          target="_blank"
        >
          Repository
        </a>
        <br />
        <h3>JobLink</h3>
        <p>
          A job search website that uses web browser storage to login users and
          allow them to post text and images. The website is built with HTML,
          CSS, and JavaScript. The website is hosted on GitHub Pages.
        </p>
        <p>
          (In Progress) Allow users to to search for jobs by location and job
          title, create an account, save jobs, and apply to jobs. The website is
          being developed with Next.js, TypeScript, React, Redux, and Vercel.
        </p>
        <a href="https://joblink.vercel.app/" target="_blank">
          Visit Website
        </a>
        <a href="wellfc.github.io/joblink/" target="_blank">
          Repository
        </a>
        <br />
        <h3>Essential Oils Website</h3>
        <p>
          A mock website for an essential oils business designed to promote and
          provide information about essential oils. The website is built
          WordPress, Xamp, and Divi The website is hosted on GitHub Pages.
        </p>
        <a
          href="https://stefanoturcarelli.github.io/essential-oils-website/"
          target="_blank"
        >
          Visit Website
        </a>
        <a
          href="https://github.com/stefanoturcarelli/essential-oils-website"
          target="_blank"
        >
          Repository
        </a>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Stefano Turcarelli's portfolio",
};
