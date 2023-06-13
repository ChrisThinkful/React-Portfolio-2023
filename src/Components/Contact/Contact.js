import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Contact = ({ id }) => {
  return (
    <section id={id} className="contact-section offset">
      <article className="contact-content">
        <h2 className="section-title">Contact</h2>
        <p className="contact-subtitle">I'd love to hear from you!</p>
        <div className="contact-body">
          <div className="linkedin-contact">
            <a
              className="action-item"
              href="https://www.linkedin.com/in/chrisclark90/"
              target="_blank"
            >
              <LinkedInIcon className="action-thumb" sx={{ fontSize: 50 }} />
              <h4>Connect with me on LinkedIn</h4>
            </a>
          </div>
          <div className="email-contact">
            <a className="action-item" href="mailto:chris.clark913@gmail.com">
              <EmailIcon className="action-thumb" sx={{ fontSize: 50 }} />
              <h4>Contact me directly</h4>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
