import React, { useState } from "react";

const JankenGame: React.FC = () => {
  const hands = ["グー", "チョキ", "パー"] as const;
  const [playerHand, setPlayerHand] = useState("");
  const [enemyHand, setEnemyHand] = useState("");
  const [result, setResult] = useState("");

  const judge = (p: string, e: string) => {
    if (p === e) return "引き分け";
    if (
      (p === "グー" && e === "チョキ") ||
      (p === "チョキ" && e === "パー") ||
      (p === "パー" && e === "グー")
    ) {
      return "勝ち";
    }
    return "負け";
  };

  const play = (p: string) => {
    const e = hands[Math.floor(Math.random() * hands.length)];
    setPlayerHand(p);
    setEnemyHand(e);
    setResult(judge(p, e));
  };

  return (
    <div className="p-4 bg-base-200 rounded-md mt-8">
      <h2 className="text-xl font-bold mb-4">じゃんけんゲーム</h2>
      <div className="flex gap-2 mb-4">
        {hands.map((hand) => (
          <button
            key={hand}
            className="btn btn-primary"
            onClick={() => play(hand)}
          >
            {hand}
          </button>
        ))}
      </div>
      {playerHand && (
        <div>
          <p>あなたの手: {playerHand}</p>
          <p>コンピュータの手: {enemyHand}</p>
          <p>結果: {result}</p>
        </div>
      )}
    </div>
  );
};

export default JankenGame;
