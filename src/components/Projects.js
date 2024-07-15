import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="Projects" id="Projects">
      <div className="ProjectsContent">
        <div id="Header">
          <h1>Projects</h1>
        </div>
        <div className="ProjectsContainer">
          <div className="Project">
            <div className="ProjectImage">
              <img src="/ProjectPic1.jpg" alt="Home Page of the portfolio website" />
            </div>
            <div className="ProjectDetails">
              <h2>Portfolio Website</h2>
              <p>
                A simple front-end only page made with <b>React</b> to display my
                projects and more information about me.
              </p>
              <div className="projectbuttons">
                <a
                  href="https://github.com/ArpitGill314/portfolio"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa-brands fa-github projectI"></i>View
                </a>
                <Link to={"/projects/portfolio"}>
                  <i className="fa-solid fa-circle-info projectI"></i>Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
