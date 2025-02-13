//エラーページ

// src/pages/NotFound.tsx
import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center text-center min-h-[50vh]">
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-lg mb-6">お探しのページは見つかりませんでした。</p>
      <a href="/" className="btn btn-primary">
        ホームへ戻る
      </a>
    </div>
  );
};

export default NotFound;
