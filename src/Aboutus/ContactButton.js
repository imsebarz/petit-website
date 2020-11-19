import React from "react";
import "./ContactButton.scss";

const ContactButton = ({ title, media }) => {
  return (
    <div className="contact-button">
      <a href={media.link} target="_blank" rel="noopener noreferrer">
        {media.logo}
        {title}
      </a>
    </div>
  );
};

export default ContactButton;
