import { useState } from "react";
import PropTypes from "prop-types";
import PortfolioFilters from "./PortfolioFilters";
import PortfolioGrid from "./PortfolioGrid";

const PortfolioSection = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    "todos",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="portfolio-section">
      <h1>Projetos</h1>

      <PortfolioFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <PortfolioGrid projects={filteredProjects} />
    </section>
  );
};

PortfolioSection.propTypes = {
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

export default PortfolioSection;
