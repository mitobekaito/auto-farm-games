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
      answer: "有志の方たちが作成したライブラリがNintendoSwitch用以外にもあるのでそれ次第です。",
    },
    {
      question: "好きな食べ物何ですか？",
      answer: "ポケモンカード",
    },
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
