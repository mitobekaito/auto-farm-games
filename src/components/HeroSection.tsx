//トップページのヒーローセクションを表示するコンポーネント
import React from "react";
import { motion } from "framer-motion"; // フェードインアニメーション用
import { useNavigate } from "react-router-dom"; // /home へ遷移
import JankenGame from "./JankenGame";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // 相対パスで navigate("home") とすると親ルートに対して /auto-farm-games/home に遷移します
    navigate("home");
  };

  return (
    <section>
      <div
        // hero クラスで十分な高さを確保し、背景画像を途切れずに表示
        className="hero min-h-[60vh] md:min-h-[70vh] relative flex items-center justify-center 
                 bg-arduboy bg-no-repeat bg-center bg-contain"
      >
        {/* 背景画像が見やすくなるように、半透明のグラデーションオーバーレイを追加 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>

        {/* motion.div でフェードインアニメーション付きでテキストや動画を表示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 p-4 md:p-8 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent text-shadow-strong">
            Arduboy Auto-Farm
          </h1>
          <p className="mb-5 text-base md:text-lg bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent text-shadow-light">
            Nintendo SwitchにArduboyを接続して、自動周回しよう！
          </p>

          <div className="flex justify-center items-center mb-8">
            {/* 動画を自動再生、無限ループ、ミュートで設定 */}
            <video
              className="w-full max-w-2xl rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              controls
            >
              <source src="./videos/nawabato999.mp4" type="video/mp4" />
              動画が見れません
            </video>
          </div>

          <div className="flex justify-center">
            {/* Homeへ遷移するボタン*/}
            <button
              onClick={handleNavigate}
              className="btn btn-lg shadow-md hover:shadow-lg transition 
                       bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white"
            >
              Get Started
            </button>
          </div>
        </motion.div>
        {/* JankenGameコンポーネントを表示 */}
      </div>
      <div className="relative z-10 mt-8 w-full px-4">
        <JankenGame />
      </div>
    </section>
  );
};

export default HeroSection;
