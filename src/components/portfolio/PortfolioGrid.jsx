import PropTypes from "prop-types";
import PortfolioCard from "./PortfolioCard";

const PortfolioGrid = ({ projects }) => {
  return (
    <div className="portfolio-grid">
      {projects.map((project, index) => (
        <PortfolioCard key={index} project={project} />
      ))}
    </div>
  );
};

PortfolioGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      demoUrl: PropTypes.string,
      codeUrl: PropTypes.string,
    })
  ).isRequired,
};

export default PortfolioGrid;
