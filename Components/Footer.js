import React from "react";

function Footer() {
  return (
    <section className="footer">
      <div className="flowus">
        <a
          href="https://www.instagram.com/play.union/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/images/instargram.png" alt="Instagram logo" />
          <span>Instagram</span>
        </a>
        <a
          href="https://www.youtube.com/live/H9bd1VlqeQE?si=QvnUfmvJrVUhmTfE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/images/youtube.png" alt="YouTube logo" />
          <span>YouTube</span>
        </a>
      </div>

      <div className="logo">
        <img src="assets/images/Logo.jpg" alt="Union Logo" />
      </div>
    </section>
  );
}

export default Footer;
