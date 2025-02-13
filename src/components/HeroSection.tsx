import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      // "hero" クラスで縦方向にそこそこ大きめ領域を確保
      // relative: 内部にオーバーレイや要素を重ねる時に使いやすい
      className="hero min-h-[50vh] relative flex items-center justify-center"
    >
      {/*
        コンテンツを半透明のボックスで包み、背景を少し見せる
        p-8 + rounded-lg + shadow でカード風に
      */}
      <div className="bg-white/30 backdrop-blur-sm p-8 rounded-lg text-base-content shadow max-w-xl animate-fadeUp">
        <h1 className="text-4xl font-bold mb-4">
          Arduboy Auto-Farm
        </h1>
        <p className="mb-5">
          Nintendo SwitchにArduboyを接続して、自動周回しよう！
        </p>
        <button className="btn btn-primary">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
