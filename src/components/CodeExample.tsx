//  コード例を表示するコンポーネント。ここでサンプルコードをハイライト表示し、コピーも行えるようにしています。

import { useState } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import spla_ikura from "../data/spla_ikura";
import sv_item from "../data/sv_item";
import { FiChevronDown, FiCode } from "react-icons/fi"; // アイコン追加

const CodeExample: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [copiedIkura, setCopiedIkura] = useState(false);
  const [copiedItem, setCopiedItem] = useState(false);

  // アコーディオンの開閉
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // コピーボタン処理
  const handleCopy = (
    code: string,
    setCopied: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white flex justify-center">
      <div className="w-full md:w-2/3 bg-white/70 backdrop-blur-md border border-gray-300 shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-extrabold text-center flex items-center justify-center gap-2 mb-6">
          ソースコード例
        </h2>
        <p className="text-center text-lg text-gray-800 mb-6">
          クリックしてコードを表示し、コピーできます。
        </p>

        <div className="space-y-6">
          {/* Splatoon3 : イクラ自動周回 */}
          <div className="border border-gray-300 rounded-lg bg-white/80">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
              onClick={() => toggleSection("ikura")}
            >
              <span className="flex items-center gap-2">
                Splatoon3 : イクラ自動周回
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openSection === "ikura" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openSection === "ikura" ? "auto" : 0,
                opacity: openSection === "ikura" ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-4 bg-gray-50 rounded-b-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <FiCode className="text-blue-500 text-xl" /> コード
                  </h3>
                  <button
                    onClick={() => handleCopy(spla_ikura, setCopiedIkura)}
                    className="btn btn-sm btn-outline text-gray-700 hover:bg-gray-200 transition"
                  >
                    {copiedIkura ? "✅ コピーしました" : "📋 コピー"}
                  </button>
                </div>
                <div className="max-w-full overflow-x-auto rounded-lg border border-gray-300">
                  <SyntaxHighlighter language="cpp" style={oneDark}>
                    {spla_ikura}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          </div>

          {/* PokemonSV : アイテムプリンター自動生成 */}
          <div className="border border-gray-300 rounded-lg bg-white/80">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
              onClick={() => toggleSection("item")}
            >
              <span className="flex items-center gap-2">
                PokemonSV : アイテムプリンター自動生成
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openSection === "item" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openSection === "item" ? "auto" : 0,
                opacity: openSection === "item" ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-4 bg-gray-50 rounded-b-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <FiCode className="text-blue-500 text-xl" /> コード
                  </h3>
                  <button
                    onClick={() => handleCopy(sv_item, setCopiedItem)}
                    className="btn btn-sm btn-outline text-gray-700 hover:bg-gray-200 transition"
                  >
                    {copiedItem ? "✅ コピーしました" : "📋 コピー"}
                  </button>
                </div>
                <div className="max-w-full overflow-x-auto rounded-lg border border-gray-300">
                  <SyntaxHighlighter language="cpp" style={oneDark}>
                    {sv_item}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
