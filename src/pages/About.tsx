//概要説明

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center text-center min-h-[50vh]">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <p className="text-lg mb-6">React + TypeScript + Vite</p>
      <div className="text-lg mb-6">編集中ざます</div>
      <a href="/" className="btn btn-primary">
        トップページへ戻る
      </a>
    </div>
  );
};
export default About;
