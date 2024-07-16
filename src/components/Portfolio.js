import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="PortfolioContents">
        <h1>Portfolio Website</h1>
        <p>Finished: 7/15/24</p>
        <p>Last updated: 7/16/24</p>
        <h2>Project Overview</h2>
        <div className="shifted">
          <h3>Description</h3>
          <p>
            This website was created to showcase my skills, projects, and more
            about me. It mainly serves as a hub for my projects for potential
            employers to learn more about me and my skills.
          </p>
        </div>

        <h2>Key Features</h2>
        <div className="shifted">
          <h3>Responsive Design</h3>
          <p>
            The website adapts to any screen or window size, allowing for a
            consistent look.
          </p>
          <h3>Clean Layout</h3>
          <p>
            The website features a simple and clean layout for easy navigation.
          </p>
        </div>

        <h2>Technologies Used</h2>
        <div className="shifted">
          <h3>Frontend</h3>
          <p>React (HTML, CSS, JavaScript)</p>
          <h3>Deployment</h3>
          <p>GitHub Pages</p>
        </div>

        <h2>Development Process</h2>
        <div className="shifted">
          <h3>Planning</h3>
          <p>
            The planning phase of this project involved thinking about the core
            features of the website, including what it was supposed to show and
            the pages needed to show it. I chose to do a frontend-only site
            because a backend was unnecessary.
          </p>
          <h3>Design</h3>
          <p>
            I looked at many sites for inspiration and eventually settled on a
            clean and simple layout.
          </p>
          <h3>Implementation</h3>
          <p>
            I coded the whole site myself without the use of a template. I did
            use ChatGPT (4o model) to help with some parts, such as
            brainstorming the best layout for this page and for help with some
            things I couldn't get working.
          </p>
          <h3>Testing</h3>
          <p>
            The testing phase mainly involved testing the responsiveness across
            different devices and window sizes. I tested on mobile screens and
            computer screens with various screen resolutions and window sizes.
          </p>
          <h3>Deployment</h3>
          <p>
            Deployment was simple with the whole project already being put on
            GitHub. GitHub Pages allowed for a simple deployment with a package
            made for React apps.
          </p>
        </div>

        <h2>Challenges Faced</h2>
        <div className="shifted">
          <h3>Design</h3>
          <p>
            This is my first proper website, so designing everything didn't come
            easily to me, and I spent a lot more time than initially expected on
            the CSS for the site.
          </p>
          <h3>Responsiveness</h3>
          <p>
            This was also harder than anticipated, but with enough testing, I
            was able to fix the poor responsiveness.
          </p>
        </div>

        <h2>Learnings and Outcomes</h2>
        <div className="shifted">
          <h3>Front-end Development</h3>
          <p>
            I improved my skills in front-end development and learned more about
            styling with CSS and making a website look nice.
          </p>
          <h3>React</h3>
          <p>
            React wasn't really necessary for this project, but I still learned
            more about React, such as JSX and React Router.
          </p>
          <h3>Version Control</h3>
          <p>
            Being my first project I put on GitHub, there was a lot to learn
            about source control. I'm sure there's much more to learn,
            especially when working with others and not just making commits to
            the main branch.
          </p>
        </div>

        <h2>Future Improvements</h2>
        <div className="shifted">
          <h3>SEO Optimization</h3>
          <p>
            I still have a lot to learn about optimization. Although it doesn't
            matter much for this project, I will certainly need it for the
            future.
          </p>
          <h3>Better Structure</h3>
          <p>
            Being my first React project, there's a lot I could improve about
            the file structure and CSS structure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
