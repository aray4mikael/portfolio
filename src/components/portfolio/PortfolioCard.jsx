import PropTypes from "prop-types";

const PortfolioCard = ({ project }) => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="portfolio-tags">
          {project.tags.map((tag, tagIndex) => (
            <div key={tagIndex} className="tag-container">
              <span className="tag-name">{tag.name}</span>
              <div className="tag-percentage-bar">
                <div
                  className="tag-percentage-fill"
                  style={{ width: `${tag.percentage}%` }}
                ></div>
              </div>
              <span className="tag-percentage">{tag.percentage}%</span>
            </div>
          ))}
        </div>
        <div className="portfolio-links">
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="code-button"
            >
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
    demoUrl: PropTypes.string,
    codeUrl: PropTypes.string,
  }).isRequired,
};

export default PortfolioCard;
