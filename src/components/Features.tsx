import React, { useEffect } from "react";
import { FiList, FiBookOpen } from "react-icons/fi"; // アイコン追加
import { Link, useLocation } from "react-router-dom";

const Features: React.FC = () => {
  const tocItems = [
    { title: "はじめに", link: "intro" },
    { title: "Arduboyとは？", link: "what-is-arduboy" },
    { title: "ゲーム自動周回", link: "features" },
    { title: "コード例", link: "code-example" },
    { title: "今後の展望", link: "future-plans" },
    { title: "Q&A", link: "faq" },
  ];

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="
      max-w-4xl mx-auto w-full bg-white/60 backdrop-blur-md border border-blue-300 
      shadow-lg rounded-lg p-6 md:p-8 transform transition-all duration-300 
      lg:hover:scale-105"
    >
      <h2 className="text-3xl font-extrabold text-center md:text-left flex items-center gap-2 mb-6 text-gray-900">
        <FiBookOpen className="text-blue-500 text-4xl" /> 目次
      </h2>
      <ol className="list-none border-l-4 border-blue-400 pl-4 md:pl-6 space-y-3">
        {tocItems.map((item, idx) => (
          <li key={idx} className="relative">
            <Link
              to={`#${item.link}`}
              className="
                flex items-center gap-3 text-lg font-semibold text-gray-800
                hover:text-blue-600 transition duration-300 
                bg-white/50 px-4 py-3 rounded-md hover:bg-blue-100
                w-full md:w-auto"
            >
              <FiList className="text-blue-400 text-xl" /> {item.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Features;
