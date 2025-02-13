
import React from "react";
import { motion } from "framer-motion"; // フェードインアニメ
import { useNavigate } from "react-router-dom"; // /home へ遷移

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("home");
  };

  return (
    <section className="hero min-h-[60vh] relative flex items-center justify-center 
                       bg-arduboy from-purple-600 to-blue-500 text-white">
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
          <button
            onClick={handleNavigate}
            className="btn btn-primary btn-lg shadow-md hover:shadow-lg transition"
          >
            Get Started
          </button>
        </div>

        <div className="flex justify-center items-center">
      <video className="w-full max-w-2xl rounded-lg shadow-lg" controls>
        <source src="./videos/nawabato999.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
      </motion.div>
    </section>
    
  );
};

export default HeroSection;
