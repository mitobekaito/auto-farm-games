//トップページのヒーローセクションを表示するコンポーネント
import React from "react";
import { motion } from "framer-motion"; // フェードインアニメーション用
import { useNavigate } from "react-router-dom"; // /page遷移

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    // 相対パスで navigate("home") とすると親ルートに対して /auto-farm-games/home に遷移
    navigate("home");
  };

  const handleNavigateJanken = () => {
    // 相対パスで navigate("janken") とすると親ルートに対して /auto-farm-games/janken に遷移
    navigate("janken");
  };

  const handleNavigateOmikuji = () => {
    // 相対パスで navigate("omikuji") とすると親ルートに対して /auto-farm-games/omikuji に遷移
    navigate("omikuji");
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
              お使いの端末では動画が見れませんえん！
            </video>
          </div>

          <div className="flex justify-center">
            {/* Homeへ遷移するボタン*/}
            <button
              onClick={handleNavigateHome}
              className="btn btn-lg shadow-md hover:shadow-lg transition 
                       bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white"
            >
              詳しく見る
            </button>
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 mt-8 w-full px-4 flex flex-col md:flex-row justify-center gap-4 md:gap-x-7">
        {/* じゃんけんゲームボタン */}
        <button
          onClick={handleNavigateJanken}
          className="btn btn-lg w-full md:w-auto shadow-md hover:shadow-lg transition bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white"
        >
          じゃんけんゲーム
        </button>

        {/* おみくじゲームボタン */}
        <button
          onClick={handleNavigateOmikuji}
          className="btn btn-lg w-full md:w-auto shadow-md hover:shadow-lg transition bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white"
        >
          おみくじゲーム
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
