// コンポーネントのインポート
import Header from "./components/Header";
import Footer from "./components/Footer";

//デバック用のインポート（後でPagesに入れる。）
// import HeroSection from "./components/HeroSection";
// import Features from "./components/Features";
import FAQ from "./components/FAQ";
import CodeExample from "./components/CodeExample";

function App() {
  return (
    <div
      className="
        flex flex-col min-h-screen relative overflow-hidden
        bg-gradient-to-br from-white to-sky-200 text-base-content
      "
    >
      {/* ◆ 背景に配置する図形たち (z-0) ◆ */}
      <div className="absolute inset-0 z-0">
        {/* 1. 赤い丸 (中) */}
        <span
          className="shape-base shape-dot shape-md shape-color-red animate-floatUpDown"
          style={{ top: "20%", left: "15%", animationDelay: "0.5s" }}
        />
        {/* 2. 青い三角形 (大) */}
        <span
          className="shape-base shape-triangle shape-color-blue-tri animate-floatUpDown"
          style={{ top: "50%", left: "10%", animationDelay: "1.5s" }}
        />
        {/* 3. 黄色い四角 (大) */}
        <span
          className="shape-base shape-square shape-lg shape-color-yellow animate-floatUpDown"
          style={{ top: "70%", left: "60%", animationDelay: "0.8s" }}
        />
        {/* 4. 緑の星 (中) */}
        <span
          className="shape-base shape-star shape-md shape-color-green animate-floatUpDown"
          style={{ top: "30%", left: "80%", animationDelay: "2s" }}
        />

        {/* 5. 青い丸(小) */}
        <span
          className="shape-base shape-dot shape-sm shape-color-blue animate-floatUpDown"
          style={{ top: "10%", left: "50%", animationDelay: "1s" }}
        />
        {/* 6. 赤い四角(中) */}
        <span
          className="shape-base shape-square shape-md shape-color-red animate-floatUpDown"
          style={{ top: "65%", left: "20%", animationDelay: "2s" }}
        />
        {/* 7. 緑の三角(小) */}
        <span
          className="shape-base shape-triangle shape-color-green-tri animate-floatUpDown"
          style={{ top: "40%", left: "70%", animationDelay: "1.2s" }}
        />
        {/* 8. 黄色い星(大) */}
        <span
          className="shape-base shape-star shape-lg shape-color-yellow animate-floatUpDown"
          style={{ top: "85%", left: "85%", animationDelay: "0.5s" }}
        />

        {/* 9. 緑の星(中) */}
        <span
          className="shape-base shape-star shape-md shape-color-green animate-floatUpDown"
          style={{ top: "90%", left: "13%", animationDelay: "1.8s" }}
        />
      </div>

      {/*メインコンテンツ*/}
      <div className="flex flex-col min-h-screen z-10">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          {/* <HeroSection /> */}
          {/* <Features /> */}
          <FAQ />
          <CodeExample />
        </main>
        <Footer />
      </div>
    </div>
  );
}


export default App;
