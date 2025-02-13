//メインのhomeページのコンポーネント
import React from "react";
import CodeExample from "../components/CodeExample";
import DownloadSection from "../components/DownloadSection";
import FAQ from "../components/FAQ";
import Features from "../components/Features";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <p>編集中</p>

      {/* 目次コンポーネント (ここ自体は別にIDを付けなくてもOK) */}
      <Features />

      {/* 1) #intro */}
      <section id="intro" className="py-8">
        <h2 className="text-2xl font-semibold mb-4">はじめに</h2>
        <p>Arduboy Auto-Farmプロジェクトについての簡単な導入文や説明</p>
      </section>

      {/* 2) #what-is-arduboy */}
      <section id="what-is-arduboy" className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Arduboyとは？</h2>
        <p>Arduboyは小型のArduino互換ゲーム機です。詳しい解説や利用事例</p>
      </section>

      {/* 3) #features */}
      <section id="features" className="py-8">
        <h2 className="text-2xl font-semibold mb-4">どんなことが出来る？</h2>
        <p className="mb-4">
          Arduboyを使ってこんなゲームの自動周回が可能です...
          <br />
          以下の動画で実際の動作を確認できます。
        </p>
        <div className="flex justify-center items-center">
          <video className="w-full max-w-2xl rounded-lg shadow-lg" controls>
            <source src="./videos/arduboy_demo.mp4" type="video/mp4" />
            お使いのブラウザは動画に対応していません。
          </video>
        </div>
      </section>

      {/* 4) #code-example */}
      <section id="code-example" className="py-8">
        <h2 className="text-2xl font-semibold mb-4">コード例</h2>
        {/* 折りたたみ可能なソースコード表示など */}
        <CodeExample />
      </section>

      {/* 5) #future-plans */}
      <section id="future-plans" className="py-8">
        <h2 className="text-2xl font-semibold mb-4">今後の展望</h2>
        <p className="mb-4">
          ここでダウンロードリンクや今後のアップデート予定などを紹介します。
        </p>
        <DownloadSection />
      </section>

      {/* 6) #faq */}
      <section id="faq" className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Q&A</h2>
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
