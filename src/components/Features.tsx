//特徴説明するためのコンポーネント（目次）
import React from "react";

const Features: React.FC = () => {
  // 目次の内容を配列で管理
  const tocItems = [
    { title: "はじめに", link: "#intro" },
    { title: "Arduboyとは？", link: "#what-is-arduboy" },
    { title: "どんなことが出来る？", link: "#features" },
    { title: "コード例", link: "#code-example" },
    { title: "今後の展望", link: "#future-plans" },
    { title: "Q&A", link: "#faq" },
  ];

  return (
    <section className="py-8 flex justify-center">
      <div className="card w-full md:w-2/3 bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">目次</h2>
        <ol className="list-none border-l-4 border-blue-500 pl-4 space-y-3">
          {tocItems.map((item, idx) => (
            <li key={idx} className="relative">
              <a
                href={item.link}
                className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-200"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Features;
