import PropTypes from "prop-types";
import TimelineItem from "./TimelineItem";

const ExperienceSection = ({ experiences }) => {
  return (
    <section className="experience-section">
      <h2>Experiência</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            date={experience.date}
            title={experience.title}
            company={experience.company}
            description={experience.description}
          />
        ))}
      </div>
    </section>
  );
};

ExperienceSection.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExperienceSection;
