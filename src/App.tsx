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
        {/* (0% ~ 30%付近) */}
        <span
          className="shape-base shape-dot shape-sm shape-color-yellow animate-floatUpDown"
          style={{ top: "5%", left: "5%", animationDelay: "0.3s" }}
        />
        <span
          className="shape-base shape-dot shape-sm shape-color-red animate-floatUpDown"
          style={{ top: "10%", left: "20%", animationDelay: "0.5s" }}
        />
        <span
          className="shape-base shape-dot shape-sm shape-color-blue animate-floatUpDown"
          style={{ top: "15%", left: "50%", animationDelay: "1s" }}
        />
        <span
          className="shape-base shape-triangle shape-triangle-yellow animate-floatUpDown"
          style={{ top: "20%", left: "80%", animationDelay: "0.8s" }}
        />
        <span
          className="shape-base shape-square shape-lg shape-color-yellow animate-floatUpDown"
          style={{ top: "30%", left: "60%", animationDelay: "0.4s" }}
        />

        {/* (35% ~ 50%付近) */}
        <span
          className="shape-base shape-star shape-sm shape-color-green animate-floatUpDown"
          style={{ top: "35%", left: "90%", animationDelay: "0.7s" }}
        />
        <span
          className="shape-base shape-dot shape-md shape-color-green animate-floatUpDown"
          style={{ top: "45%", left: "30%", animationDelay: "0.9s" }}
        />
        <span
          className="shape-base shape-triangle shape-triangle-blue animate-floatUpDown"
          style={{ top: "50%", left: "5%", animationDelay: "1.5s" }}
        />
        <span
          className="shape-base shape-star shape-lg shape-color-green animate-floatUpDown"
          style={{ top: "50%", left: "70%", animationDelay: "1s" }}
        />

        {/* (60% ~ 90%付近) */}
        <span
          className="shape-base shape-star shape-md shape-color-yellow animate-floatUpDown"
          style={{ top: "60%", left: "85%", animationDelay: "1.6s" }}
        />
        <span
          className="shape-base shape-square shape-md shape-color-yellow animate-floatUpDown"
          style={{ top: "65%", left: "25%", animationDelay: "1.7s" }}
        />
        <span
          className="shape-base shape-triangle shape-triangle-green animate-floatUpDown"
          style={{ top: "70%", left: "55%", animationDelay: "1.9s" }}
        />
        <span
          className="shape-base shape-star shape-md shape-color-green animate-floatUpDown"
          style={{ top: "80%", left: "15%", animationDelay: "2s" }}
        />
        <span
          className="shape-base shape-dot shape-md shape-color-red animate-floatUpDown"
          style={{ top: "75%", left: "10%", animationDelay: "1.2s" }}
        />
        <span
          className="shape-base shape-square shape-md shape-color-blue animate-floatUpDown"
          style={{ top: "90%", left: "40%", animationDelay: "1.3s" }}
        />

        {/* (100% ~ 200%付近) */}
        <span
          className="shape-base shape-dot shape-md shape-color-red animate-floatUpDown"
          style={{ top: "110%", left: "15%", animationDelay: "1.5s" }}
        />
        <span
          className="shape-base shape-square shape-sm shape-color-blue animate-floatUpDown"
          style={{ top: "120%", left: "65%", animationDelay: "0.8s" }}
        />
        <span
          className="shape-base shape-triangle shape-triangle-green animate-floatUpDown"
          style={{ top: "130%", left: "25%", animationDelay: "2.3s" }}
        />
        <span
          className="shape-base shape-star shape-md shape-color-yellow animate-floatUpDown"
          style={{ top: "140%", left: "75%", animationDelay: "1.2s" }}
        />
        <span
          className="shape-base shape-dot shape-lg shape-color-green animate-floatUpDown"
          style={{ top: "150%", left: "50%", animationDelay: "2.1s" }}
        />
        <span
          className="shape-base shape-square shape-lg shape-color-red animate-floatUpDown"
          style={{ top: "160%", left: "80%", animationDelay: "1.8s" }}
        />
        <span
          className="shape-base shape-triangle shape-triangle-blue animate-floatUpDown"
          style={{ top: "170%", left: "10%", animationDelay: "1.4s" }}
        />
        <span
          className="shape-base shape-star shape-sm shape-color-green animate-floatUpDown"
          style={{ top: "180%", left: "40%", animationDelay: "0.6s" }}
        />
        <span
          className="shape-base shape-dot shape-md shape-color-yellow animate-floatUpDown"
          style={{ top: "190%", left: "70%", animationDelay: "1.7s" }}
        />
        <span
          className="shape-base shape-star shape-lg shape-color-blue animate-floatUpDown"
          style={{ top: "200%", left: "30%", animationDelay: "2s" }}
        />

        {/* (200% ~ 300%付近) */}
        <span
          className="shape-base shape-dot shape-sm shape-color-red animate-floatUpDown"
          style={{ top: "210%", left: "80%", animationDelay: "1.1s" }}
        />
        <span
          className="shape-base shape-star shape-md shape-color-green animate-floatUpDown"
          style={{ top: "220%", left: "20%", animationDelay: "1.9s" }}
        />
        <span
          className="shape-base shape-square shape-sm shape-color-blue animate-floatUpDown"
          style={{ top: "230%", left: "70%", animationDelay: "1.5s" }}
        />
        <span
          className="shape-base shape-triangle shape-triangle-yellow animate-floatUpDown"
          style={{ top: "240%", left: "40%", animationDelay: "2.2s" }}
        />
        <span
          className="shape-base shape-dot shape-lg shape-color-yellow animate-floatUpDown"
          style={{ top: "250%", left: "10%", animationDelay: "0.7s" }}
        />
        <span
          className="shape-base shape-star shape-md shape-color-red animate-floatUpDown"
          style={{ top: "260%", left: "55%", animationDelay: "1.3s" }}
        />
        <span
          className="shape-base shape-dot shape-md shape-color-blue animate-floatUpDown"
          style={{ top: "270%", left: "30%", animationDelay: "2.5s" }}
        />
        <span
          className="shape-base shape-square shape-lg shape-color-green animate-floatUpDown"
          style={{ top: "280%", left: "75%", animationDelay: "0.6s" }}
        />
        <span
          className="shape-base shape-star shape-sm shape-color-yellow animate-floatUpDown"
          style={{ top: "290%", left: "45%", animationDelay: "1.4s" }}
        />
        <span
          className="shape-base shape-triangle shape-triangle-blue animate-floatUpDown"
          style={{ top: "300%", left: "15%", animationDelay: "2s" }}
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
