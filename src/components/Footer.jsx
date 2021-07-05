import React from "react";

const Footer = () => {
  return (
    <nav className="navbar navbar-dark bg-primary text-center">
      <span className="navbar-brand mb-0 h1 text-center">
        Erick Rodriguez <span class="material-icons">copyright</span>-{" "}
        {new Date().getFullYear()}
      </span>
    </nav>
  );
};

export default Footer;
