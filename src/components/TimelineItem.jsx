import PropTypes from "prop-types";

const TimelineItem = ({ date, title, company, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <div className="timeline-date">{date}</div>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TimelineItem;
