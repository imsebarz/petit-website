import React from "react";
import "./ContactData.scss";

const ContactData = ({ title, media }) => {
  return (
    <div className="contact-data">
      <a href={media.link} target="_blank">
        {media.logo}
        {title}
      </a>
    </div>
  );
};

export default ContactData;
