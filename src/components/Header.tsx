import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header
      className="
        w-full bg-white/30 backdrop-blur-sm 
        text-base-content shadow
      "
    >
      <nav className="navbar container mx-auto">
        {/* navbar-start: 左側 */}
        <div className="navbar-start">
          <Link
            to="/"
            className="
              text-transparent bg-clip-text bg-gradient-to-r 
              from-red-500 via-yellow-500 to-blue-500 
              underline decoration-wavy decoration-2 
              font-bold text-lg transition-transform 
              duration-300 ease-in-out hover:scale-110
            "
          >
            Arduboy Auto-Farm
          </Link>
        </div>
        {/* navbar-end: 右側 */}
        <div className="navbar-end">
          <Link className="btn btn-ghost" to="/about">
            About
          </Link>
          <Link className="btn btn-ghost" to="/docs">
            Docs
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
