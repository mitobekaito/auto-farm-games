//シークレットページ
import React from "react";
import { motion } from "framer-motion";

const Secret: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center bg-secret bg-cover bg-center bg-no-repeat md:bg-cover lg:bg-contain brightness-110 contrast-125 shadow-2xl animate-pulse">
      {/* 半透明のオーバーレイ */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* コンテンツ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      ></motion.div>
    </div>
  );
};

export default Secret;
