import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JankenGame: React.FC = () => {
  const hands = ["グー", "チョキ", "パー"] as const;
  // プレイヤーの手、コンピュータの手、結果をそれぞれのstateで保持
  const [playerHand, setPlayerHand] = useState("");
  const [enemyHand, setEnemyHand] = useState("");
  const [result, setResult] = useState("");

  // じゃんけんの勝敗判定関数
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

  // プレイヤーがボタンを押したときに呼び出される処理
  // ランダムでコンピュータの手を決めて、それらをjudge関数で比較
  const play = (p: string) => {
    const e = hands[Math.floor(Math.random() * hands.length)];
    setPlayerHand(p);
    setEnemyHand(e);
    setResult(judge(p, e));
  };

  return (
    <div className="card w-full md:w-1/2 mx-auto bg-transparent shadow-xl mt-8">
      {/* カード全体のボーダーや背景などを含むコンテナ */}
      <div className="card-body">
        {/* タイトル部分 */}
        <h2 className="card-title text-2xl md:text-3xl">じゃんけん</h2>

        {/* じゃんけんの手をボタン表示。クリックでplay関数を呼び出して結果を更新 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {hands.map((hand) => (
            <motion.button
              key={hand}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn flex-1 bg-gradient-to-r from-pink-400 to-yellow-300 text-white border-0"
              onClick={() => play(hand)}
            >
              {hand}
            </motion.button>
          ))}
        </div>

        {/* アニメーションの有無を管理。playerHand が存在するときに結果を表示 */}
        <AnimatePresence>
          {playerHand && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-2 text-center"
            >
              {/* コンピュータの手と結果の表示部分 */}
              <p>
                コンピュータの手:{" "}
                <span className="font-bold text-lg text-blue-800">
                  {enemyHand}
                </span>
              </p>
              <p>
                結果:{" "}
                <span className="font-bold text-lg text-blue-800">
                  {result}
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JankenGame;
