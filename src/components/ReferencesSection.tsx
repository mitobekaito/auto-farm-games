import React from "react";
import { FiBookOpen, FiExternalLink } from "react-icons/fi"; // アイコン追加

const ReferencesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white flex justify-center">
      <div className="w-full md:w-2/3 bg-white/70 backdrop-blur-md border border-gray-300 shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-extrabold text-center flex items-center justify-center gap-2 mb-6 text-gray-800">
          <FiBookOpen className="text-blue-600 text-3xl" /> 参考文献
        </h2>
        <p className="text-center text-lg text-gray-800 mb-6 leading-relaxed">
          Arduboyを使ったNintendo Switchのマクロコントローラー化に関する技術情報や、
          SwitchControlLibraryの活用事例に関するリンク集です。
        </p>

        {/* 参考文献のリンク一覧 */}
        <div className="flex flex-col gap-4 justify-center">
          {/* SwitchControlLibrary */}
          <a
            className="btn flex items-center gap-2 shadow-md hover:shadow-lg transition 
                       bg-black text-white hover:bg-gray-800 justify-center"
            href="https://github.com/celclow/SwitchControlLibrary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink className="text-xl" /> SwitchControlLibrary (GitHub)
          </a>

          {/* Qiita */}
          <a
            className="btn flex items-center gap-2 shadow-md hover:shadow-lg transition 
                       bg-black text-white hover:bg-gray-800 justify-center"
            href="https://qiita.com/sobassy/items/9bd42be37fb83653824c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink className="text-xl" /> Qiita 記事
          </a>

          {/* ブログ */}
          <a
            className="btn flex items-center gap-2 shadow-md hover:shadow-lg transition 
                       bg-black text-white hover:bg-gray-800 justify-center"
            href="https://tangential-star.hatenablog.jp/entry/20201107/1604761008"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink className="text-xl" /> ブログ記事
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
