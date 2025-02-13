//特徴説明するためのコンポーネント（目次）

import React from "react";
import { FiList, FiBookOpen } from "react-icons/fi"; // アイコン追加

const Features: React.FC = () => {
  const tocItems = [
    { title: "はじめに", link: "#intro" },
    { title: "Arduboyとは？", link: "#what-is-arduboy" },
    { title: "どんなことが出来る？", link: "#features" },
    { title: "コード例", link: "#code-example" },
    { title: "今後の展望", link: "#future-plans" },
    { title: "Q&A", link: "#faq" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white flex justify-center">
      <div className="w-full md:w-2/3 bg-white/70 backdrop-blur-md border border-gray-300 shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-extrabold text-center flex items-center justify-center gap-2 mb-6 text-gray-800">
          <FiBookOpen className="text-blue-600 text-3xl" /> 目次
        </h2>
        <ol className="list-none border-l-4 border-blue-500 pl-6 space-y-3">
          {tocItems.map((item, idx) => (
            <li key={idx} className="relative">
              <a
                href={item.link}
                className="flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-200 hover:bg-gray-200 px-3 py-2 rounded-md"
              >
                <FiList className="text-blue-400 text-xl" /> {item.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Features;
