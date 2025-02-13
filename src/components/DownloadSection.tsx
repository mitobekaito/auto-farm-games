//ダウンロードのリンクを表示するコンポーネント

// src/components/DownloadSection.tsx
import React from "react";

const DownloadSection: React.FC = () => {
  return (
    <section className="p-4 bg-base-200 rounded-md mt-8">
      <h2 className="text-xl font-bold mb-4">Download</h2>
      <p className="mb-4">
        最新バージョンのダウンロードや、GitHubリポジトリへのリンクです。
      </p>

      {/* ボタンを並べる: スマホでは縦(md:flex-rowを消す), md以上で横配置 */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* ZIPダウンロード (例) */}
        <a
          className="btn btn-primary flex-1"
          href="https://example.com/ArduboyAutoFarm.zip"
          download
        >
          Download ZIP
        </a>
        {/* GitHubリンク (例) */}
        <a
          className="btn btn-outline flex-1"
          href="https://github.com/lefmarna/NintendoSwitchControlLibrary/blob/master/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </div>
    </section>
  );
};

export default DownloadSection;
