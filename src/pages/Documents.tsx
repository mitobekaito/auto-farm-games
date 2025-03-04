//ドキュメントページ
import React from "react";
import { Link } from "react-router-dom";

const Docs: React.FC = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center text-center min-h-[50vh]">
      <h1 className="text-4xl font-bold mb-4">Documents</h1>
      <p className="text-lg mb-6">React + TypeScript + Vite</p>
      <div className="text-lg mb-6">編集中でごじゃる</div>
      <Link to="/" className="btn btn-primary">
        トップページへ戻る
      </Link>
    </div>
  );
};

export default Docs;
