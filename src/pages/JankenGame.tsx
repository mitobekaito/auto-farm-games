import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JankenGame: React.FC = () => {
  // じゃんけんの手と対応する画像パス
  const hands = ["グー", "チョキ", "パー"] as const;
  const handImages: Record<(typeof hands)[number], string> = {
    グー: "./images/janken_rock.png",
    チョキ: "./images/janken_scissors.png",
    パー: "./images/janken_paper.png",
  };

  // プレイヤーの手、コンピュータの手、結果
  const [playerHand, setPlayerHand] = useState<(typeof hands)[number] | "">("");
  const [enemyHand, setEnemyHand] = useState<(typeof hands)[number] | "">("");
  const [result, setResult] = useState("");

  // 勝敗判定関数
  const judge = (p: string, e: string) => {
    if (p === e) return "引き分け (´・ω・｀)";
    if (
      (p === "グー" && e === "チョキ") ||
      (p === "チョキ" && e === "パー") ||
      (p === "パー" && e === "グー")
    ) {
      return "勝ち！ ﾄﾞﾝ(　ﾟдﾟ)ｲｴｰｲ";
    }
    return "負け！ ﾄﾞﾝ(　ﾟдﾟ)ﾏｲ";
  };

  // プレイヤーがボタンを押すとランダムに対戦結果が決まる
  const play = (p: (typeof hands)[number]) => {
    const e = hands[Math.floor(Math.random() * hands.length)];
    setPlayerHand(p);
    setEnemyHand(e);
    setResult(judge(p, e));
  };

  return (
    <div className="card w-full md:w-2/3 lg:w-1/2 mx-auto bg-white shadow-xl p-8 rounded-xl border-4 border-pink-200">
      <div className="card-body">
        {/* タイトルを中央に配置し、赤色で強調 */}
        <h1 className="card-title block mx-auto text-4xl md:text-3xl text-center text-red-600 mb-6">
          じゃんけん
        </h1>

        {/* じゃんけんの手選択ボタン */}
        <div className="flex flex-wrap gap-2 mb-4">
          {hands.map((hand) => (
            <motion.button
              key={hand}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => play(hand)}
              className="btn flex-1 bg-gradient-to-r from-pink-400 to-yellow-300 text-white border-0"
            >
              {hand}
            </motion.button>
          ))}
        </div>

        {/* 結果画像と対戦状況：左が自分の手、中央に "VS"、右が相手の手 */}
        <AnimatePresence>
          {playerHand && enemyHand && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center justify-center space-x-8 mt-4"
            >
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold text-blue-800">
                  自分
                </span>
                <img
                  src={handImages[playerHand as (typeof hands)[number]]}
                  alt={`自分の手：${playerHand}`}
                  className="w-20 h-auto mt-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-red-600">VS</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold text-blue-800">
                  相手
                </span>
                <img
                  src={handImages[enemyHand as (typeof hands)[number]]}
                  alt={`相手の手：${enemyHand}`}
                  className="w-20 h-auto mt-2"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 結果テキスト表示 */}
        <AnimatePresence>
          {playerHand && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-center text-3xl font-bold text-yellow-500"
            >
              {result}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JankenGame;
