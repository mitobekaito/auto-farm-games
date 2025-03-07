import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi"; // アイコン追加

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "自動周回に必要なものは？",
      answer:
        "ArduboyとArduino IDE、Switch用のケーブルなどが必要です。詳細はDocsをご覧ください。",
    },
    {
      question: "他のゲームに対応している？",
      answer:
        "有志の方たちが作成したライブラリがNintendoSwitch用以外にもあるので、それ次第です。",
    },
    {
      question: "SwitchのBAN対象になりますか？",
      answer:
        "一般的なマクロコントローラーと同様の動作をするため、自己責任でご使用ください。",
    },
    {
      question: "このサイトは無料ですか？",
      answer:
        "はい、無料です。ただし、情報の正確性については保証できません。",
    },
    {
      question: "自分でコードを変更することはできますか？",
      answer:
        "もちろん可能です！カスタマイズ方法についてはDocsに詳しく記載します。",
    },
    {
      question: "Arduboyはどこで購入できますか？",
      answer:
        "公式サイトやAmazonなどのオンラインショップで購入可能です。ガジェット系ショップでも取り扱いがあります。",
    },
    {
      question: "Arduboyのプログラムを書き換えるには何を使えばいい？",
      answer:
        "Arduino IDEが一般的です。今後はWebブラウザからの書き込み機能も検討中です。",
    },
    {
      question: "AIによる自動最適化はいつ実装されますか？",
      answer:
        "具体的な時期は未定ですが、将来的にAIが反復操作を学習する仕組みを取り入れたいと考えています。",
    },
    {
      question: "スプラトゥーン3以外のゲームで使いたい場合は？",
      answer:
        "ユーザーが独自にボタンシーケンスを作成すれば、他のゲームでも応用可能です。詳しくはDocsをご参照ください。",
    },
    {
      question: "オンライン対戦などで使っても大丈夫ですか？",
      answer:
        "いわゆるマクロ行為となる場合があるため、利用規約違反と見なされる可能性があります。オンライン対戦での使用は推奨しません。",
    },
    {
      question: "Windows以外のOS（Mac, Linux）でも開発・利用できますか？",
      answer:
        "基本的にArduino IDEが動く環境であれば可能です。ただし、ドライバのインストールなど環境によって設定が異なる場合があります。",
    },
    {
      question: "保証やサポートはありますか？",
      answer:
        "個人プロジェクトのため公式サポートはありませんが、DiscordやGitHubなどコミュニティでの助け合いを予定しています。",
    },
    {
      question: "複数台のArduboyで同時に自動周回できますか？",
      answer:
        "理論的には可能ですが、PC側で複数のシリアルポートを扱う必要があります。Docsでマルチ接続の事例を紹介予定です。",
    },
    {
      question: "違法ではないの？",
      answer:
        "本ツール自体はプログラムによる入力装置にすぎませんが、利用規約や公序良俗に反する用途は自己責任となります。詳細は各ゲームの規約をご確認ください。",
    },
    {
      question: "コードのライセンスはどうなっていますか？",
      answer:
        "GPLやMITライセンスなど、オープンソースライセンスのいずれかで公開予定です。",
    },
    {
      question: "ファームウェアを書き換えて壊れたりしない？",
      answer:
        "Arduboy側もArduino互換なので、通常のArduinoファームウェア書き込みと同程度のリスクです。正しい手順を守れば大丈夫ですが、万が一の故障は自己責任となります。",
    },
    {
      question: "更新や新機能の情報はどこで確認できますか？",
      answer:
        "GitHubリポジトリのリリースノートなどで告知する予定です。定期的にチェックしてください。",
    },
    {
      question: "開発やテストに参加したい場合は？",
      answer:
        "GitHubのPull RequestやIssuesにご投稿いただけるとありがたいです。コミュニティDiscordも準備中なので、リリース時に参加をお待ちしています。",
    },
    {
      question: "好きな食べ物は何ですか？",
      answer: "ポケモンカード",
    }
  ];
  

  // アコーディオンの開閉を制御
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white flex justify-center">
      <div className="w-full md:w-2/3 bg-white/70 backdrop-blur-md border border-gray-300 shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-extrabold text-center flex items-center justify-center gap-2 mb-6 text-red-800">
          <FiHelpCircle className="text-red-600 text-3xl" /> 教えて！しっっつも～～ん！！
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg bg-white/80">
              <button
                className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
                onClick={() => toggleFAQ(idx)}
              >
                <span className="flex items-center gap-2">
                  <FiHelpCircle className="text-red-500 text-xl" /> {faq.question}
                </span>
                <FiChevronDown
                  className={`transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                />
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === idx ? "auto" : 0, opacity: openIndex === idx ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-gray-50 rounded-b-lg text-gray-700">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
