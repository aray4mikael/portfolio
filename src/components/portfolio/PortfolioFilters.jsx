import PropTypes from "prop-types";

const PortfolioFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="portfolio-filters">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-button ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

PortfolioFilters.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default PortfolioFilters;
