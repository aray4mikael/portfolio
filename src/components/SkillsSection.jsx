import PropTypes from "prop-types";
import SkillCard from "./SkillCard";

const SkillsSection = ({ skills }) => {
  return (
    <section className="technologies-section">
      <h2>Tecnologias</h2>
      <div className="tech-cards">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  );
};

SkillsSection.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SkillsSection;
