//  コード例を表示するコンポーネント。ここでサンプルコードをハイライト表示し、コピーも行えるようにしています。

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import sampleCode from "../data/SampleCode"; // 外部ファイルのコードをインポート

const CodeExample: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // クリップボードにコードをコピーするための関数
  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-8 flex justify-center">
      <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          ソースコード例
        </h2>

        {/* 折りたたみ可能なコンテナ: DaisyUIのcollapseを使用 */}
        <div className="space-y-4">
          <div className="collapse collapse-arrow border border-gray-300 rounded-lg bg-white">
            {/* チェックボックスで折りたたみのON/OFFを切り替え */}
            <input
              type="checkbox"
              className="peer"
              title="Toggle Code Example"
            />
            <div className="collapse-title text-lg font-semibold text-gray-800 peer-checked:bg-gray-100">
              Splatoon3 : イクラ自動周回
            </div>
            <div className="collapse-content text-gray-600 text-sm peer-checked:bg-gray-50 p-4 rounded-b-lg">
              {/* 折りたたみ内のヘッダー部分: タイトルとコピー用ボタン */}
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={handleCopy}
                  className="btn btn-sm btn-outline text-gray-700 hover:bg-gray-200 transition"
                >
                  {copied ? "✅ コピーしました" : "📋 コピー"}
                </button>
              </div>

              {/* react-syntax-highlighterを使ったソースコード表示部分 */}

              <div className="max-w-full overflow-x-auto rounded-lg border border-gray-300">
                {/* プログラムのソースコードを見やすく表示 */}
                <SyntaxHighlighter language="cpp" style={oneDark}>
                  {sampleCode}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
