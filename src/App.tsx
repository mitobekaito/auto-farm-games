// コンポーネントのインポート
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div
      className="
        flex flex-col min-h-screen relative overflow-hidden
        bg-gradient-to-br from-white to-sky-200 text-base-content
      "
    >
      {/* ◆ 背景に配置する図形たち ◆ */}
      <div className="absolute inset-0 z-0">
        {/* (1) top=2% */}
        <span
          className="shape-base shape-dot shape-sm shape-color-red animate-floatUpDown"
          style={{ top: "2%", left: "8%", animationDelay: "1.1s" }}
        />

        {/* (2) top=5% */}
        <span
          className="shape-base shape-star shape-md shape-color-green animate-floatUpDown"
          style={{ top: "5%", left: "30%", animationDelay: "0.7s" }}
        />

        {/* (3) top=8% */}
        <span
          className="shape-base shape-square shape-sm shape-color-yellow animate-floatUpDown"
          style={{ top: "8%", left: "15%", animationDelay: "1.3s" }}
        />

        {/* (4) top=10% */}
        <span
          className="shape-base shape-triangle shape-triangle-blue animate-floatUpDown"
          style={{ top: "10%", left: "50%", animationDelay: "0.5s" }}
        />

        {/* (5) top=12% */}
        <span
          className="shape-base shape-dot shape-md shape-color-blue animate-floatUpDown"
          style={{ top: "12%", left: "75%", animationDelay: "1.9s" }}
        />

        {/* (6) top=15% */}
        <span
          className="shape-base shape-star shape-lg shape-color-red animate-floatUpDown"
          style={{ top: "15%", left: "10%", animationDelay: "1.2s" }}
        />

        {/* (7) top=18% */}
        <span
          className="shape-base shape-square shape-md shape-color-green animate-floatUpDown"
          style={{ top: "18%", left: "45%", animationDelay: "2s" }}
        />

        {/* (8) top=20% */}
        <span
          className="shape-base shape-triangle shape-triangle-yellow animate-floatUpDown"
          style={{ top: "20%", left: "65%", animationDelay: "0.6s" }}
        />

        {/* (9) top=24% */}
        <span
          className="shape-base shape-dot shape-md shape-color-yellow animate-floatUpDown"
          style={{ top: "24%", left: "20%", animationDelay: "1.5s" }}
        />

        {/* (10) top=28% */}
        <span
          className="shape-base shape-star shape-sm shape-color-blue animate-floatUpDown"
          style={{ top: "28%", left: "80%", animationDelay: "2.2s" }}
        />

        {/* (11) top=32% */}
        <span
          className="shape-base shape-square shape-lg shape-color-red animate-floatUpDown"
          style={{ top: "32%", left: "30%", animationDelay: "1.1s" }}
        />

        {/* (12) top=35% */}
        <span
          className="shape-base shape-dot shape-sm shape-color-green animate-floatUpDown"
          style={{ top: "35%", left: "55%", animationDelay: "0.8s" }}
        />

        {/* (13) top=38% */}
        <span
          className="shape-base shape-triangle shape-triangle-green animate-floatUpDown"
          style={{ top: "38%", left: "90%", animationDelay: "1.4s" }}
        />

        {/* (14) top=40% */}
        <span
          className="shape-base shape-star shape-md shape-color-yellow animate-floatUpDown"
          style={{ top: "40%", left: "5%", animationDelay: "2s" }}
        />

        {/* (15) top=44% */}
        <span
          className="shape-base shape-dot shape-md shape-color-red animate-floatUpDown"
          style={{ top: "44%", left: "50%", animationDelay: "1.3s" }}
        />

        {/* (16) top=48% */}
        <span
          className="shape-base shape-square shape-sm shape-color-green animate-floatUpDown"
          style={{ top: "48%", left: "70%", animationDelay: "0.9s" }}
        />

        {/* (17) top=52% */}
        <span
          className="shape-base shape-star shape-lg shape-color-blue animate-floatUpDown"
          style={{ top: "52%", left: "15%", animationDelay: "1.8s" }}
        />

        {/* (18) top=56% */}
        <span
          className="shape-base shape-dot shape-md shape-color-yellow animate-floatUpDown"
          style={{ top: "56%", left: "35%", animationDelay: "2.1s" }}
        />

        {/* (19) top=60% */}
        <span
          className="shape-base shape-triangle shape-triangle-blue animate-floatUpDown"
          style={{ top: "60%", left: "85%", animationDelay: "1.4s" }}
        />

        {/* (20) top=61% */}
        <span
          className="shape-base shape-dot shape-sm shape-color-green animate-floatUpDown"
          style={{ top: "61%", left: "8%", animationDelay: "1.0s" }}
        />

        {/* (21) top=62% */}
        <span
          className="shape-base shape-star shape-sm shape-color-yellow animate-floatUpDown"
          style={{ top: "62%", left: "20%", animationDelay: "0.9s" }}
        />

        {/* (22) top=63% */}
        <span
          className="shape-base shape-square shape-md shape-color-red animate-floatUpDown"
          style={{ top: "63%", left: "46%", animationDelay: "1.3s" }}
        />

        {/* (23) top=64% */}
        <span
          className="shape-base shape-dot shape-md shape-color-blue animate-floatUpDown"
          style={{ top: "64%", left: "40%", animationDelay: "1.7s" }}
        />

        {/* (24) top=65% */}
        <span
          className="shape-base shape-square shape-md shape-color-yellow animate-floatUpDown"
          style={{ top: "65%", left: "0%", animationDelay: "1.7s" }}
        />

        {/* (25) top=66% */}
        <span
          className="shape-base shape-star shape-lg shape-color-red animate-floatUpDown"
          style={{ top: "66%", left: "99%", animationDelay: "0.6s" }}
        />

        {/* (26) top=67% */}
        <span
          className="shape-base shape-triangle shape-triangle-yellow animate-floatUpDown"
          style={{ top: "67%", left: "79", animationDelay: "2.3s" }}
        />

        {/* (27) top=68% */}
        <span
          className="shape-base shape-dot shape-sm shape-color-green animate-floatUpDown"
          style={{ top: "68%", left: "16%", animationDelay: "2.3s" }}
        />

        {/* (28) top=69% */}
        <span
          className="shape-base shape-square shape-sm shape-color-blue animate-floatUpDown"
          style={{ top: "69%", left: "45%", animationDelay: "1.6s" }}
        />

        {/* (29) top=70% */}
        <span
          className="shape-base shape-triangle shape-triangle-green animate-floatUpDown"
          style={{ top: "70%", left: "55%", animationDelay: "1.9s" }}
        />

        {/* (30) top=72% */}
        <span
          className="shape-base shape-square shape-sm shape-color-blue animate-floatUpDown"
          style={{ top: "72%", left: "35%", animationDelay: "1.5s" }}
        />

        {/* (31) top=73% */}
        <span
          className="shape-base shape-star shape-md shape-color-green animate-floatUpDown"
          style={{ top: "73%", left: "90%", animationDelay: "0.9s" }}
        />

        {/* (32) top=74% */}
        <span
          className="shape-base shape-dot shape-md shape-color-yellow animate-floatUpDown"
          style={{ top: "74%", left: "60%", animationDelay: "2.2s" }}
        />

        {/* (33) top=75% */}
        <span
          className="shape-base shape-dot shape-md shape-color-red animate-floatUpDown"
          style={{ top: "75%", left: "0%", animationDelay: "1.2s" }}
        />

        {/* (34) top=77% */}
        <span
          className="shape-base shape-star shape-sm shape-color-blue animate-floatUpDown"
          style={{ top: "77%", left: "30%", animationDelay: "1.1s" }}
        />

        {/* (35) top=80% */}
        <span
          className="shape-base shape-star shape-md shape-color-green animate-floatUpDown"
          style={{ top: "80%", left: "5%", animationDelay: "2s" }}
        />

        {/* (36) top=82% */}
        <span
          className="shape-base shape-star shape-sm shape-color-blue animate-floatUpDown"
          style={{ top: "82%", left: "60%", animationDelay: "2.1s" }}
        />

        {/* (37) top=85% */}
        <span
          className="shape-base shape-square shape-lg shape-color-green animate-floatUpDown"
          style={{ top: "85%", left: "85%", animationDelay: "0.6s" }}
        />

        {/* (38) top=87% */}
        <span
          className="shape-base shape-dot shape-md shape-color-green animate-floatUpDown"
          style={{ top: "87%", left: "20%", animationDelay: "1.0s" }}
        />

        {/* (39) top=90% */}
        <span
          className="shape-base shape-square shape-md shape-color-blue animate-floatUpDown"
          style={{ top: "90%", left: "40%", animationDelay: "1.3s" }}
        />

        {/* (40) top=91% */}
        <span
          className="shape-base shape-dot shape-sm shape-color-yellow animate-floatUpDown"
          style={{ top: "91%", left: "2%", animationDelay: "1.1s" }}
        />

        {/* (41) top=93% */}
        <span
          className="shape-base shape-dot shape-sm shape-color-yellow animate-floatUpDown"
          style={{ top: "93%", left: "25%", animationDelay: "1.4s" }}
        />

        {/* (42) top=95% */}
        <span
          className="shape-base shape-star shape-sm shape-color-yellow animate-floatUpDown"
          style={{ top: "95%", left: "45%", animationDelay: "1.4s" }}
        />

        {/* (43) top=98% */}
        <span
          className="shape-base shape-star shape-color-red animate-floatUpDown"
          style={{ top: "98%", left: "70%", animationDelay: "2.2s" }}
        />

        {/* (44) top=100% */}
        <span
          className="shape-base shape-triangle shape-triangle-blue animate-floatUpDown"
          style={{ top: "100%", left: "15%", animationDelay: "2s" }}
        />
      </div>

      {/*メインコンテンツ*/}
      <div className="flex flex-col min-h-screen z-10">
        <Header />

        {/* ここに各ページ（HeroSection, Homeなど）が切り替わって表示される */}
        <main className="flex-grow container mx-auto p-4">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
