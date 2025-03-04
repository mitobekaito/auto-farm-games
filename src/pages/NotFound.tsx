//エラーページ
import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center text-center min-h-[50vh]">
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-lg mb-6">お探しのページは見つかりませんでしたぁぁぁぁｘ！！！</p>
      <Link to="/" className="btn btn-primary">
        トップページへ戻る
      </Link>
    </div>
  );
};

export default NotFound;
