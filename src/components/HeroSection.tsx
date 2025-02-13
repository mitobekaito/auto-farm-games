import React from "react";
import { motion } from "framer-motion"; // フェードインアニメーション用

const HeroSection: React.FC = () => {
  return (
    <section
      // "hero" クラスで縦方向にそこそこ大きめ領域を確保
      // relative: 内部にオーバーレイや要素を重ねる時に使いやすい
      className="hero min-h-[60vh] relative flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white"
    >
      {/* 
        コンテンツを半透明のボックスで包み、背景を少し見せる
        p-8 + rounded-lg + shadow でカード風に
        motion.div でアニメーション付きフェードイン効果を追加
      */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/40 backdrop-blur-lg p-8 rounded-lg text-base-content shadow-lg max-w-xl"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-center text-gray-900">
          Arduboy Auto-Farm
        </h1>
        <p className="mb-5 text-lg text-gray-800 text-center">
          Nintendo SwitchにArduboyを接続して、自動周回しよう！
        </p>
        <div className="flex justify-center">
          <button className="btn btn-primary btn-lg shadow-md hover:shadow-lg transition">
            Get Started
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
