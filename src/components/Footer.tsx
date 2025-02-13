import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer
      className="
        footer footer-center p-4
        bg-white/30 backdrop-blur-sm
        text-base-content
      "
    >
      <div>
        <p
          className="
            text-transparent bg-clip-text bg-gradient-to-r 
            from-red-500 via-yellow-500 to-blue-500 
            underline decoration-wavy decoration-2 
            font-bold text-lg transition-transform 
            duration-300 ease-in-out hover:scale-110
          "
        >
          <Link to="/secret">© </Link>
          <a
            href="https://github.com/mitobekaito/auto-farm-games"
            target="_blank"
            rel="noopener noreferrer"
          >
            2025 auto-farm-games. kaito mitobe
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
