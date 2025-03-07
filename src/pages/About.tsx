import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-6 md:p-8 min-h-[50vh] flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl bg-white/80 backdrop-blur-md shadow-lg rounded-lg p-8 border-l-8 border-blue-500">
        {/* タイトル */}
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 underline decoration-blue-500">
          About
        </h1>

        {/* プロジェクト概要 */}
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          <strong>Arduboy Auto-Farm</strong> は、小型ゲーム機「Arduboy」と
          <strong> React + TypeScript + Vite</strong> を活用して、
          <strong>ゲームの自動周回</strong> を実現するプロジェクトです。
          <br />
          ゲームにおける反復操作（レベル上げ・アイテム回収など）を自動化し、
          <strong>プレイの効率化</strong>や<strong>ユーザーの負担軽減</strong>
          を目指しています。
        </p>

        {/* なぜこのプロジェクトを作ったのか */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 underline decoration-blue-500">
          なぜこのプロジェクトを作ったのか？
        </h2>
        <p className="text-gray-800 mb-6 leading-relaxed">
          ゲームを楽しんでいると、どうしても同じボタン入力を何度も繰り返す
          「周回作業」に時間を割かれることがあります。
          <br />
          <strong>スプラトゥーン3</strong> のナワバトラーや、
          <strong>ポケモンSV</strong> の孵化・厳選など、
          数百回・数千回も繰り返す操作が必要な場面を、
          <strong>Arduboyを使った自動入力</strong>{" "}
          で解決できないかと考えました。
          <br />
          そこで思いついたのが、 小型プログラミング学習ツールとして有名な
          <strong>「Arduboy」をマクロコントローラ化</strong>{" "}
          するアプローチです。
          <br />
          こうして生まれたのが、この
          <strong>Arduboy Auto-Farm</strong> プロジェクトです！
        </p>

        {/* どのように動作するのか */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 underline decoration-blue-500">
          どのように動作するのか？
        </h2>
        <p className="text-gray-800 mb-6 leading-relaxed">
          Arduboyを <strong>マクロコントローラー</strong> として使用し、
          あらかじめプログラムされた入力を自動で実行します。
          <br />
          Nintendo Switch に接続された Arduboy は、
          ボタンを押すタイミングや操作手順を正確に再現し、
          <strong>アイテム収集・レベル上げの周回作業を効率化</strong> します。
          <br />
          実装面では Arduino IDE を使って
          <strong>C++ のコード</strong> を書き込み、
          Arduboyに入力シーケンスを覚えさせる方式です。
        </p>

        {/* 使用技術 */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 underline decoration-blue-500">
          使用技術
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            <strong>React + TypeScript + Vite</strong>
            ：フロントエンド開発に採用。
            Viteは開発サーバの起動が速く、TypeScriptで安全にコーディングできます。
          </li>
          <li>
            <strong>Arduboy</strong>
            ：小型プログラミング学習ツール。マクロ操作を実装する要。
          </li>
          <li>
            <strong>Arduino IDE</strong>
            ：Arduboyにプログラムを書き込むための統合開発環境。
          </li>
        </ul>

        {/* このサイトで分かること */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 underline decoration-blue-500">
          このサイトで分かること
        </h2>
        <p className="text-gray-800 mb-6 leading-relaxed">
          当サイトでは、「ArduboyをSwitchに接続して自動周回する」ための
          <strong>ノウハウやサンプルコード</strong>をまとめています。
          <br />
          プログラミング初心者向けにも分かりやすく工夫しているので、
          少しでも興味があればぜひ試してみてください！
        </p>

        {/* 今後の展開 */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 underline decoration-blue-500">
          今後の展開
        </h2>
        <p className="text-gray-800 mb-6 leading-relaxed">
          ユーザーの要望やアイデアをもとに、
          <strong>新しいゲームタイトルへの対応</strong> や
          <strong>AIを使った高度なボタン入力最適化</strong> など、
          様々なアップデートを検討中です。
          <br />
          さらに、Web Serial API や WebHID を使って、
          <strong>ブラウザから直接Arduboyにプログラムを書き込む機能</strong> も
          実装したいと考えています。
        </p>

        {/* フッターのリンク動作説明 */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 underline decoration-blue-500">
          フッターの操作について
        </h2>
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          当サイト下部のフッターには、以下のリンクがあります：
        </p>
        <ul className="list-disc list-inside text-gray-800 mb-6 leading-relaxed text-left">
          <li>
            <strong>Arduboy Auto-Farm</strong>： 押すと
            <span className="font-semibold">トップページ</span>へ戻ります。
          </li>
          <li>
            <strong>2025 auto-farm-games. kaito mitobe</strong>： 押すと
            <span className="font-semibold">GitHubリポジトリ</span>
            へ移動します。
          </li>
          <li>
            <strong>©</strong>： 押すと
            <span className="font-semibold">シークレットページ</span>
            へ遷移します。 どんな秘密があるかはお楽しみに！
          </li>
        </ul>
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          ぜひ活用して、サイト内の移動やソースコードの閲覧、
          シークレットページの探索をしてみてくださいね。
        </p>

        {/* 結び / コールトゥアクション */}
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          Arduboy Auto-Farm はまだ始まったばかりのプロジェクトですが、
          ゲームの可能性を広げるツールとして、どんどん成長させていきたいと思っています。
          <br />
          応援やフィードバック、大歓迎です！興味を持たれた方は、
          <strong>トップページやDocs</strong> をぜひご覧ください。
        </p>

        {/* ボタン */}
        <Link
          to="/home"
          className="btn btn-primary px-6 py-3 font-semibold text-white"
        >
          HOMEへ戻る
        </Link>
      </div>
    </div>
  );
};

export default About;
