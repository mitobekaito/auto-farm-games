//ヘッダーとしてナビゲーションバーを表示するコンポーネント

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-base-100 shadow">
      <nav className="navbar container mx-auto">
        {/* navbar-start: 左側 */}
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl" href="#">
            Arduboy Auto-Farm
          </a>
        </div>
        {/* navbar-end: 右側 */}
        <div className="navbar-end">
          <a className="btn btn-ghost" href="#">
            About
          </a>
          <a className="btn btn-ghost" href="#">
            Docs
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
