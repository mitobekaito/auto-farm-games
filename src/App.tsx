// src/App.tsx
import React from "react";

// コンポーネントのインポート
import Header from "./components/Header";
import Footer from "./components/Footer";

// Appコンポーネント: 全体をヘッダー＆フッターで挟むシンプルな例
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* メインコンテンツ */}
      <main className="flex-grow container mx-auto p-4">
        {/* ここに子コンポーネントを配置 */}
        <h1 className="text-3xl font-bold">Arduboy Auto-Farm</h1>
        <p>Tailwind CSS + DaisyUI のサンプルです。</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
