import React, { useState, useRef } from "react";

const Omikuji: React.FC = () => {
  const [number, setNumber] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const omikujiText = [
    "小吉！ちょっといいかも！",
    "大凶！要注意！",
    "大吉！大当たり！",
    "末吉！運が上向くかも！",
    "吉！いい感じ！",
    "中吉！まあまあ！",
    "凶！注意が必要！",
  ];

  const handleDrawOmikuji = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    intervalRef.current = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 7) + 1;
      setNumber(randomNum);
    }, 100);
  };

  const handleStopOmikuji = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsSpinning(false);
    const finalNum = Math.floor(Math.random() * 7) + 1;
    setNumber(finalNum);
  };

  const imagePath =
    number !== null ? `./images/omikuji_${number}.png` : `./images/omikuji.png`;

  // 画像クリック時に振動アニメーションを実行
  const handleImageClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500); // 0.5秒でshake終了
  };

  return (
    <div className="min-h-screen bg-wagami bg-white/90 relative flex justify-center items-center">
      <div
        className="bg-white/90 rounded-2xl p-8 w-[300px] md:w-[350px]
                   border-4 border-red-600 relative
                   before:absolute before:inset-1 before:border-4 before:border-red-400 before:rounded-2xl"
      >
        <h1 className="card-title block mx-auto text-4xl md:text-3xl text-center text-red-600 mb-6">
          おみくじ
        </h1>
        {/* おみくじ画像 */}
        <div className="mb-4 relative z-10">
          <img
            src={imagePath}
            alt="おみくじ"
            onClick={handleImageClick}
            className={`mx-auto cursor-pointer ${
              isShaking ? "animate-shake" : ""
            }`}
            style={{ width: 200, height: "auto" }}
          />
        </div>

        {!isSpinning && number !== null && (
          <p className="text-xl font-semibold text-center text-red-700 mb-6 relative z-10">
            {omikujiText[number - 1]}
          </p>
        )}

        <div className="flex justify-center relative z-10">
          {isSpinning ? (
            <button
              onClick={handleStopOmikuji}
              className="px-6 py-2 bg-[#f9f3e6] text-red-700 font-bold border-[3px] border-red-700 
               rounded-xl shadow-inner hover:shadow-lg tracking-widest text-lg transition-all 
               duration-300"
            >
              ストップ
            </button>
          ) : (
            <button
              onClick={handleDrawOmikuji}
              className="px-6 py-2 bg-[#f9f3e6] text-red-700 font-bold border-[3px] border-red-700 
               rounded-xl shadow-inner hover:shadow-lg tracking-widest text-lg transition-all 
               duration-300"
            >
              おみくじを引く
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Omikuji;
