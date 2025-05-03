import React from "react";
import PropTypes from "prop-types";
import "../styles/LinkedInPosts.css";

const LinkedInPosts = ({ posts }) => {
  return (
    <section className="linkedin-posts">
      <h2>Latest LinkedIn Posts</h2>
      <div className="posts-grid">
        {posts.map((post, index) => (
          <div key={index} className="post-container">
            <iframe
              src={post.embedUrl}
              height="544"
              width="504"
              frameBorder="0"
              allowFullScreen
              title={`LinkedIn Post ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

LinkedInPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      embedUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LinkedInPosts;
