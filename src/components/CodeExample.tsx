//  コード例を表示するコンポーネント。ここでサンプルコードをハイライト表示し、コピーも行えるようにしています。

import { useState } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import spla_ikura from "../data/spla_ikura";
import sv_item from "../data/sv_item";
import { FiChevronDown, FiCode } from "react-icons/fi"; // アイコン追加
import arceus_leveling from "../data/arceus.leveling";
import swsh_bp from "../data/swsh_bp";
import swsh_dy from "../data/swsh_dy";
import swsh_eggs from "../data/swsh_eggs";
import swsh_watt from "../data/swsh_watt";
import bdsp_eggs from "../data/bdsp_eggs";
import bdsp_release from "../data/bdsp_release";
import xeno_coins from "../data/xeno_coins";
import xeno_leveling from "../data/xeno_leveling";
import spla_nawabato from "../data/spla_nawabato";
import sv_coins from "../data/sv_coins";

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
          ソースコード
        </h2>
        <p className="text-center text-lg text-gray-800 mb-6">
          クリックしてコードを表示。続々追加予定。
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

          {/* Splatoon3 : ナワバトラー周回 */}
          <div className="border border-gray-300 rounded-lg bg-white/80">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
              onClick={() => toggleSection("nawabato")}
            >
              <span className="flex items-center gap-2">
                Splatoon3 : ナワバトラー周回
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openSection === "nawabato" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openSection === "nawabato" ? "auto" : 0,
                opacity: openSection === "nawabato" ? 1 : 0,
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
                    onClick={() => handleCopy(spla_nawabato, setCopiedIkura)}
                    className="btn btn-sm btn-outline text-gray-700 hover:bg-gray-200 transition"
                  >
                    {copiedIkura ? "✅ コピーしました" : "📋 コピー"}
                  </button>
                </div>
                <div className="max-w-full overflow-x-auto rounded-lg border border-gray-300">
                  <SyntaxHighlighter language="cpp" style={oneDark}>
                    {spla_nawabato}
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

          {/* PokemonSV : ニンフィア金策自動周回 */}
          <div className="border border-gray-300 rounded-lg bg-white/80">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
              onClick={() => toggleSection("coins-sv")}
            >
              <span className="flex items-center gap-2">
                PokemonSV : ニンフィア金策自動周回
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openSection === "coins-sv" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openSection === "coins-sv" ? "auto" : 0,
                opacity: openSection === "coins-sv" ? 1 : 0,
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
                    onClick={() => handleCopy(sv_coins, setCopiedItem)}
                    className="btn btn-sm btn-outline text-gray-700 hover:bg-gray-200 transition"
                  >
                    {copiedItem ? "✅ コピーしました" : "📋 コピー"}
                  </button>
                </div>
                <div className="max-w-full overflow-x-auto rounded-lg border border-gray-300">
                  <SyntaxHighlighter language="cpp" style={oneDark}>
                    {sv_coins}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          </div>

          {/* PokemonLEGENDS アルセウス : レベル上げ自動周回 */}
          <div className="border border-gray-300 rounded-lg bg-white/80">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
              onClick={() => toggleSection("leveling-arceus")}
            >
              <span className="flex items-center gap-2">
                PokemonLEGENDS アルセウス : レベル上げ自動周回
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openSection === "leveling-arceus" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openSection === "leveling-arceus" ? "auto" : 0,
                opacity: openSection === "leveling-arceus" ? 1 : 0,
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
                    onClick={() => handleCopy(arceus_leveling, setCopiedItem)}
                    className="btn btn-sm btn-outline text-gray-700 hover:bg-gray-200 transition"
                  >
                    {copiedItem ? "✅ コピーしました" : "📋 コピー"}
                  </button>
                </div>
                <div className="max-w-full overflow-x-auto rounded-lg border border-gray-300">
                  <SyntaxHighlighter language="cpp" style={oneDark}>
                    {arceus_leveling}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pokemon剣盾 : BP稼ぎ自動周回 */}
          <div className="border border-gray-300 rounded-lg bg-white/80">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
              onClick={() => toggleSection("bp")}
            >
              <span className="flex items-center gap-2">
                Pokemon剣盾 : BP稼ぎ自動周回
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openSection === "bp" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openSection === "bp" ? "auto" : 0,
                opacity: openSection === "bp" ? 1 : 0,
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
                    onClick={() => handleCopy(swsh_bp, setCopiedItem)}
                    className="btn btn-sm btn-outline text-gray-700 hover:bg-gray-200 transition"
                  >
                    {copiedItem ? "✅ コピーしました" : "📋 コピー"}
                  </button>
                </div>
                <div className="max-w-full overflow-x-auto rounded-lg border border-gray-300">
                  <SyntaxHighlighter language="cpp" style={oneDark}>
                    {swsh_bp}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pokemon剣盾 : ダイマックスアドベンチャー自動周回 */}
          <div className="border border-gray-300 rounded-lg bg-white/80">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
              onClick={() => toggleSection("dymax")}
            >
              <span className="flex items-center gap-2">
                Pokemon剣盾 : ダイマックスアドベンチャー自動周回
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openSection === "dymax" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openSection === "dymax" ? "auto" : 0,
                opacity: openSection === "dymax" ? 1 : 0,
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
                    onClick={() => handleCopy(swsh_dy, setCopiedIkura)}
                    className="btn btn-sm btn-outline text-gray-700 hover:bg-gray-200 transition"
                  >
                    {copiedIkura ? "✅ コピーしました" : "📋 コピー"}
                  </button>
                </div>
                <div className="max-w-full overflow-x-auto rounded-lg border border-gray-300">
                  <SyntaxHighlighter language="cpp" style={oneDark}>
                    {swsh_dy}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pokemon剣盾 : たまご孵化自動周回 */}
          <div className="border border-gray-300 rounded-lg bg-white/80">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
              onClick={() => toggleSection("eggs")}
            >
              <span className="flex items-center gap-2">
                Pokemon剣盾 : たまご孵化自動周回
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openSection === "eggs" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openSection === "eggs" ? "auto" : 0,
                opacity: openSection === "eggs" ? 1 : 0,
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
                    onClick={() => handleCopy(swsh_eggs, setCopiedItem)}
                    className="btn btn-sm btn-outline text-gray-700 hover:bg-gray-200 transition"
                  >
                    {copiedItem ? "✅ コピーしました" : "📋 コピー"}
                  </button>
                </div>
                <div className="max-w-full overflow-x-auto rounded-lg border border-gray-300">
                  <SyntaxHighlighter language="cpp" style={oneDark}>
                    {swsh_eggs}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pokemon剣盾 : ワット集め自動周回 */}
          <div className="border border-gray-300 rounded-lg bg-white/80">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
              onClick={() => toggleSection("watts")}
            >
              <span className="flex items-center gap-2">
                Pokemon剣盾 : ワット集め自動周回
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openSection === "watts" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openSection === "watts" ? "auto" : 0,
                opacity: openSection === "watts" ? 1 : 0,
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
                    onClick={() => handleCopy(swsh_watt, setCopiedIkura)}
                    className="btn btn-sm btn-outline text-gray-700 hover:bg-gray-200 transition"
                  >
                    {copiedIkura ? "✅ コピーしました" : "📋 コピー"}
                  </button>
                </div>
                <div className="max-w-full overflow-x-auto rounded-lg border border-gray-300">
                  <SyntaxHighlighter language="cpp" style={oneDark}>
                    {swsh_watt}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          </div>

          {/* PokemonBDSP : たまご孵化自動周回 */}
          <div className="border border-gray-300 rounded-lg bg-white/80">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
              onClick={() => toggleSection("eggs-bdsp")}
            >
              <span className="flex items-center gap-2">
                PokemonBDSP : たまご孵化自動周回
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openSection === "eggs-bdsp" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openSection === "eggs-bdsp" ? "auto" : 0,
                opacity: openSection === "eggs-bdsp" ? 1 : 0,
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
                    onClick={() => handleCopy(bdsp_eggs, setCopiedItem)}
                    className="btn btn-sm btn-outline text-gray-700 hover:bg-gray-200 transition"
                  >
                    {copiedItem ? "✅ コピーしました" : "📋 コピー"}
                  </button>
                </div>
                <div className="max-w-full overflow-x-auto rounded-lg border border-gray-300">
                  <SyntaxHighlighter language="cpp" style={oneDark}>
                    {bdsp_eggs}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          </div>

          {/* PokemonBDSP : ポケモンリリース自動周回 */}
          <div className="border border-gray-300 rounded-lg bg-white/80">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
              onClick={() => toggleSection("release")}
            >
              <span className="flex items-center gap-2">
                PokemonBDSP : ポケモンリリース自動周回
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openSection === "release" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openSection === "release" ? "auto" : 0,
                opacity: openSection === "release" ? 1 : 0,
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
                    onClick={() => handleCopy(bdsp_release, setCopiedIkura)}
                    className="btn btn-sm btn-outline text-gray-700 hover:bg-gray-200 transition"
                  >
                    {copiedIkura ? "✅ コピーしました" : "📋 コピー"}
                  </button>
                </div>
                <div className="max-w-full overflow-x-auto rounded-lg border border-gray-300">
                  <SyntaxHighlighter language="cpp" style={oneDark}>
                    {bdsp_release}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Xenoblade3 : ノポンコイン自動周回 */}
          <div className="border border-gray-300 rounded-lg bg-white/80">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
              onClick={() => toggleSection("coins-xeno")}
            >
              <span className="flex items-center gap-2">
                Xenoblade3 : ノポンコイン自動周回
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openSection === "coins-xeno" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openSection === "coins-xeno" ? "auto" : 0,
                opacity: openSection === "coins-xeno" ? 1 : 0,
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
                    onClick={() => handleCopy(xeno_coins, setCopiedItem)}
                    className="btn btn-sm btn-outline text-gray-700 hover:bg-gray-200 transition"
                  >
                    {copiedItem ? "✅ コピーしました" : "📋 コピー"}
                  </button>
                </div>
                <div className="max-w-full overflow-x-auto rounded-lg border border-gray-300">
                  <SyntaxHighlighter language="cpp" style={oneDark}>
                    {xeno_coins}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Xenoblade3 : レベル上げ自動周回 */}
          <div className="border border-gray-300 rounded-lg bg-white/80">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
              onClick={() => toggleSection("leveling-xeno")}
            >
              <span className="flex items-center gap-2">
                Xenoblade3 : レベル上げ自動周回
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  openSection === "leveling-xeno" ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openSection === "leveling-xeno" ? "auto" : 0,
                opacity: openSection === "leveling-xeno" ? 1 : 0,
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
                    onClick={() => handleCopy(xeno_leveling, setCopiedIkura)}
                    className="btn btn-sm btn-outline text-gray-700 hover:bg-gray-200 transition"
                  >
                    {copiedIkura ? "✅ コピーしました" : "📋 コピー"}
                  </button>
                </div>
                <div className="max-w-full overflow-x-auto rounded-lg border border-gray-300">
                  <SyntaxHighlighter language="cpp" style={oneDark}>
                    {xeno_leveling}
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
