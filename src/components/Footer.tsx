import SocialLinks from "@/components/Social";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Footer Section code */}

      <footer className="footer">
        <div className="social">
          <SocialLinks />
          <p className="copyright">&copy;Farwa Kanwal - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
