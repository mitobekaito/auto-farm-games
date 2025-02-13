//ルート

import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white p-8">
      <h1 className="text-5xl font-extrabold flex items-center space-x-2">
        <span>Tailwind CSS</span>
        <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-full">
          ✅
        </span>
      </h1>
      <p className="mt-6 text-xl font-semibold">Tailwind が動作しています！</p>

      {/* ✅ 修正したボタンのスタイル */}
      <button className="mt-6 px-6 py-3 bg-yellow-400 text-black text-lg font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
        クリックして確認
      </button>
      <div className="text-blue-500 text-center">
        Tailwind で青く表示されれば OK
      </div>

      <button className="btn btn-primary">DaisyUI ボタン</button>
    </div>
  );
};

export default App;
