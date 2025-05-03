import PropTypes from "prop-types";

const SkillCard = ({ icon, title, description }) => {
  return (
    <div className="tech-card">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SkillCard;
