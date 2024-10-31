import Link from "next/link";
import React from "react";

const SocialMedia = () => {
  return (
    <main>
      <div className="social-media">
        <Link
          href="https://www.linkedin.com/in/farwa-kanwal-681a482b4/"
          target="_blank"
        >
          <i className="bx bxl-linkedin bx-flip-horizontal bx-burst"></i>
        </Link>
        <Link href="https://github.com/Farwa-Kanwal-123" target="_blank">
          <i className="bx bxl-github bx-burst bx-flip-horizontal"></i>
        </Link>
        <Link href="#">
          <i className="bx bxl-facebook bx-burst bx-flip-horizontal"></i>
        </Link>
        <Link href="#">
          <i className="bx bxl-instagram bx-flip-horizontal bx-burst"></i>
        </Link>
      </div>
    </main>
  );
};

export default SocialMedia;
