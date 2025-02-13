import React from "react";

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
          <a
            rel="noopener noreferrer"
            className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 underline decoration-wavy decoration-2 font-bold text-lg transition-transform duration-300 ease-in-out hover:scale-110"
            href="/"
          >
            Arduboy Auto-Farm
          </a>
        </div>
        {/* navbar-end: 右側 */}
        <div className="navbar-end">
          <a className="btn btn-ghost" href="about">
            About
          </a>
          <a className="btn btn-ghost" href="Docs">
            Docs
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
