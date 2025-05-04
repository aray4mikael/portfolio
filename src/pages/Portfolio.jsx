import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import PortfolioSection from "../components/portfolio/PortfolioSection";
import { projects } from "../data/projects";

const Portfolio = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div className="portfolio-container">
          <PortfolioSection projects={projects} />
        </div>
      </main>
    </div>
  );
};

Portfolio.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      demoUrl: PropTypes.string,
      codeUrl: PropTypes.string,
    })
  ).isRequired,
};

export default Portfolio;
