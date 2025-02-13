import React from "react";

const FAQ: React.FC = () => {
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

  return (
    <section className="py-8 flex justify-center">
      <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-red-800 text-center">教えて！しっっつも～～ん！！</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="collapse collapse-arrow border border-gray-300 rounded-lg bg-white">
              <input type="checkbox" className="peer" title="Toggle FAQ" />
              <div className="collapse-title text-lg font-semibold text-gray-800 peer-checked:bg-gray-100">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-600 text-sm peer-checked:bg-gray-50 p-4 rounded-b-lg">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
