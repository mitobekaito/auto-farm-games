import React from "react";
import { FiDownload, FiGithub } from "react-icons/fi"; // アイコン追加

const DownloadSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white flex justify-center">
      <div className="w-full md:w-2/3 bg-white/70 backdrop-blur-md border border-gray-300 shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-extrabold text-center flex items-center justify-center gap-2 mb-6 text-gray-800">
          <FiDownload className="text-blue-600 text-3xl" /> ダウンロード
        </h2>
        <p className="text-center text-lg text-gray-800 mb-6">
          最新バージョンのダウンロードや、GitHubリポジトリへのリンクです。
        </p>

        {/* ボタン配置: スマホは縦, md以上は横配置 */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* ZIPダウンロード */}
          <a
            className="btn btn-primary btn-lg flex items-center gap-2 shadow-md hover:shadow-lg transition"
            href="https://example.com/ArduboyAutoFarm.zip"
            download
          >
            <FiDownload className="text-xl" /> Download ZIP
          </a>
          {/* GitHubリンク */}
          <a
            className="btn btn-outline btn-lg flex items-center gap-2 shadow-md hover:shadow-lg transition"
            href="https://github.com/lefmarna/NintendoSwitchControlLibrary/blob/master/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="text-xl" /> GitHub Repository
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
