import React, { useEffect } from "react";
import CodeExample from "../components/CodeExample";
import FAQ from "../components/FAQ";
import Features from "../components/Features";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      {/* 目次コンポーネント */}
      <Features />

      {/* 1) #intro */}
      <section
        id="intro"
        className="bg-white/80 shadow-md rounded-lg p-4 md:p-6 my-6 border-l-4 border-blue-400"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 underline decoration-blue-400 mb-4">
          はじめに
        </h2>
        <p className="text-gray-800 mb-4">
          こんにちは！人です。
          ゲームが大好きで、時間があるときはずっとやり込んでいます。
          <br />
          しかし、ゲームには必ずといっていいほど
          <strong>「同じ操作を何度も繰り返す作業」</strong>が存在しますよね？
        </p>
        <p className="text-gray-800 mb-4">
          このページでは、小型ゲーム機兼プログラミング学習ツール
          <strong>『Arduboy』</strong>を活用して
          <strong>「ゲームの自動周回」</strong>
          を実現する方法について詳しく紹介します。 Nintendo Switch
          に繰り返し作業を丸投げすることで、
          <strong>アイテム収集や経験値稼ぎを効率化</strong>できるんです！
          <br />
          例えば、<strong>スプラトゥーン3のナワバトラー</strong>や、
          <strong>ポケモンシリーズの孵化・厳選作業</strong>などに応用可能。
          その結果、単純作業のストレスから解放され、
          <strong>もっと楽しい部分</strong>に時間をかけられます。
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-gray-900 underline decoration-blue-400 mt-6">
          このプロジェクトを作った理由
        </h3>
        <p className="text-gray-800 mb-4">
          ゲームを楽しむ中で、
          「同じボタン操作の繰り返しって地味に大変だな…」と思うことがしばしばありました。
          どうにかしてそれを自動化できないか？ と考えたとき、
          <strong>Arduino互換で自由にプログラミングできるArduboy</strong>{" "}
          が目に留まったんです。
          <br />
          Arduboyは本来、レトロ感のあるゲームを動かすための小型デバイスですが、
          <strong>マクロコントローラとして改造</strong>することで、
          Switchのボタン入力を自動化できるポテンシャルがあると確信しました。
        </p>
        <p className="text-gray-800 mb-4">
          本プロジェクトは、
          <strong>「繰り返し作業を減らし、ゲームをより楽しむ」</strong>
          ことを目的に立ち上げました。さらに、プログラミング初心者が
          <strong>Arduino + Arduboy で学習</strong>
          するきっかけにもなれば嬉しいと思っています。
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-gray-900 underline decoration-blue-400 mt-6">
          このページで分かること
        </h3>
        <p className="text-gray-800 mb-4">
          このページでは、以下のような情報を提供しています：
        </p>
        <ul className="list-disc pl-6 text-gray-800 mb-4">
          <li>Arduboyとは何か？どんなことができるのか？</li>
          <li>Nintendo Switchとの接続方法と具体的な自動周回の仕組み</li>
          <li>実際に使用できるサンプルコード（コード例）</li>
          <li>今後のアップデート予定や拡張機能</li>
        </ul>
        <p className="text-gray-800">
          また、プログラミング初心者でも取り組みやすいよう、なるべく、簡単に解説しています。
          興味を持っていただけたらぜひ「Arduboyとは？」からご覧ください！
        </p>
      </section>

      {/* 2) #what-is-arduboy */}
      <section
        id="what-is-arduboy"
        className="bg-white/80 shadow-md rounded-lg p-4 md:p-6 my-6 border-l-4 border-blue-400"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 underline decoration-blue-400 mb-4">
          Arduboyとは？
        </h2>
        <p className="text-gray-800 mb-4">
          <strong>Arduboy（アルドゥボーイ）</strong>は、
          <strong>Arduino</strong> をベースにした
          <strong>手のひらサイズのプログラム可能なゲーム機</strong>です。
          <br />
          クレジットカードほどのサイズながら、
          <strong>
            モノクロOLEDスクリーン、スピーカー、ボタン、バッテリー
          </strong>
          を搭載し、USB経由でプログラムを書き込むことで、
          オリジナルゲームを開発・プレイできます。
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-gray-900 underline decoration-blue-400 mt-6">
          Arduboyの成り立ち
        </h3>
        <p className="text-gray-800 mb-4">
          Arduboyは、クリエイターの
          <strong>Kevin Bates</strong> 氏が携帯型ゲーム機とプログラミング学習を
          結びつけるアイデアをもとに設計しました。
          <br />
          <em>「ポケットに入るゲーム機兼学習ツール」</em>を目指してKickstarterで
          資金調達が成功し、多くのエンジニアや学生が参加する
          <strong>オープンソースコミュニティ</strong>
          を形成しながら進化しています。
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-gray-900 underline decoration-blue-400 mt-6">
          Arduboyの特徴
        </h3>
        <ul className="list-disc pl-6 text-gray-800">
          <li>
            <strong>オープンソースハードウェア</strong>：
            誰でも自由にプログラムを作成・書き換えが可能
          </li>
          <li>
            <strong>レトロゲーム風の2Dグラフィック</strong>：
            モノクロのOLEDスクリーンで8ビット風のゲームが楽しめる
          </li>
          <li>
            <strong>超コンパクト設計</strong>：
            厚さ約5mm、重量わずか17gで持ち運びに便利
          </li>
          <li>
            <strong>USBで簡単接続</strong>： PCに接続してArduino
            IDEで開発、ゲームの書き換えが可能
          </li>
          <li>
            <strong>学習ツールとして最適</strong>：
            プログラミング初心者でも簡単にゲームを作成できる
          </li>
        </ul>

        <h3 className="text-lg md:text-xl font-semibold text-gray-900 underline decoration-blue-400 mt-6">
          どんなことができるの？
        </h3>
        <p className="text-gray-800 mb-4">
          Arduboyは、単なるゲーム機としてだけでなく、
          さまざまな用途で活用できます：
        </p>
        <ul className="list-disc pl-6 text-gray-800 mb-4">
          <li>
            <strong>ゲームプレイ</strong>：すでに開発された
            <strong>100種類以上のオープンソースゲーム</strong>をプレイ可能
          </li>
          <li>
            <strong>プログラミング学習</strong>： Arduino
            IDEを使ってC++で簡単にゲームを開発
          </li>
          <li>
            <strong>コントローラーとして活用</strong>：
            USB接続し、PCやゲーム機の入力デバイスとしてカスタマイズ
          </li>
          <li>
            <strong>IoTデバイスの制御</strong>：
            Arduino互換のため、センサーや他のハードウェアとの連携も可能
          </li>
        </ul>
        <p className="text-gray-800">
          実際にコミュニティでは、Arduboyを<b>マクロコントローラ</b>に改造し、
          ゲームの自動周回に活用している事例が数多く報告されています。
          まさに「遊びながら学べる」ツールの代表格といえます。
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-gray-900 underline decoration-blue-400 mt-6">
          どこで手に入るの？
        </h3>
        <p className="text-gray-800">
          Arduboyは、公式サイトやAmazon、その他のガジェットショップなどで購入できます。
          <br />
          <strong>オープンソース</strong>
          なので、ハードウェアの回路図や設計図が公開されており、
          自作したり、カスタムモデルを作ることも可能です。
          コミュニティで公開されている改造例を参考にして、
          自分だけのArduboyを作る人もいます。
        </p>
      </section>

      {/* 3) #features */}
      <section
        id="features"
        className="bg-white/80 shadow-md rounded-lg p-4 md:p-6 my-6 border-l-4 border-blue-400"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 underline decoration-blue-400 mb-4">
          ゲーム自動周回
        </h2>
        <p className="text-gray-800 mb-4">
          Arduboy を Nintendo Switch に接続することで、ボタン入力を自動化し、
          効率的にゲームの周回プレイを行うことができます。
          <br />
          例えば、以下のようなことが可能です
        </p>
        <ul className="list-disc pl-4 md:pl-6 text-gray-800 mb-4">
          <li>スプラトゥーン3のヒーローモードのイクラを自動回収</li>
          <li>ポケモンSVの孵化作業やアイテム生成を自動化</li>
          <li>特定のボタン操作を記録・再生してルーチン化</li>
        </ul>
        <div className="flex justify-center items-center">
          <video className="w-full max-w-3xl rounded-lg shadow-lg" controls>
            <source src="./videos/arduboy_demo.mp4" type="video/mp4" />
            お使いのブラウザは動画に対応していません。
          </video>
        </div>
      </section>

      {/* 4) #code-example */}
      <section
        id="code-example"
        className="bg-white/80 shadow-md rounded-lg p-4 md:p-6 my-6 border-l-4 border-blue-400"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 underline decoration-blue-400 mb-4">
          コード例
        </h2>
        <p className="text-gray-800 mb-4">
          実際にArduboyでボタン入力を自動化するためのサンプルコードを紹介します。
          <br />
          このコードをArduino
          IDEで書き込むことで、スイッチのボタン操作を記録・再生できます。
        </p>
        <CodeExample />
      </section>

      {/* 5) #future-plans */}
      <section
        id="future-plans"
        className="bg-white/80 shadow-md rounded-lg p-4 md:p-6 my-6 border-l-4 border-blue-400"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 underline decoration-blue-400 mb-4">
          今後の展望
        </h2>
        <p className="text-gray-800 mb-4">
          Arduboy Auto-Farm
          プロジェクトは、今後以下のような機能追加や拡張を予定しています。
          より多くのゲームやユーザーのニーズに応えられるよう、開発を続けていきます。
        </p>

        <ul className="list-disc pl-4 md:pl-6 text-gray-800 mb-4">
          <li>
            <strong>Webブラウザから直接Arduboyにコードを書き込める機能</strong>
            <br />
            ArduboyをPCに接続しなくても、
            <strong>Web Serial API</strong> や <strong>WebHID</strong>{" "}
            などの仕組みを利用して
            ブラウザ上から直接ファームウェアの書き換えができるようにします。
            これにより、追加のソフトウェアインストールなしで
            「最新のマクロプログラム」をすぐに書き込むことが可能になります。
          </li>
          <li className="mt-3">
            <strong>AIを利用した最適なボタン入力の記録・再生</strong>
            <br />
            ゲームの操作手順をAIが学習し、最適化することで、
            さらに効果的なアイテム収集・レベル上げを実現したいと考えています。
            <br />
            例えば、同じゲームの周回でも 「敵の出現パターン」「ランダム要素」
            に応じてボタン入力を自動調整し、成功率を高めるイメージです。
          </li>
          <li className="mt-3">
            <strong>
              新しいゲームタイトルへの対応（ユーザーからのリクエスト受付予定）
            </strong>
            <br />
            今はスプラトゥーンやポケモンシリーズでの利用を想定していますが、
            他のゲームにも対応してほしいという声があれば、ユーザーからの要望を受け付けます。
            <br />
            可能な範囲で、
            <strong>ボタンマッピングやシーケンスを追加</strong>{" "}
            して対応タイトルを増やしていく予定です。
          </li>
          <li className="mt-3">
            <strong>コミュニティとの連携</strong>
            <br />
            開発の進捗や新機能の案内、バグ報告などを受け付けるために、
            <strong>Discord</strong> や <strong>GitHub Issues</strong>{" "}
            を活用したいと考えています。
            ユーザー同士で知見を共有し、より便利なツールに育てたいです。（願望）
          </li>
        </ul>

        <p className="text-gray-800 mb-4">
          新機能のリクエストやバグ報告などは、プロジェクトのGitHubリポジトリや
          各種SNSで受け付ける予定です。ぜひ、ご意見やご要望をお寄せください！
        </p>
      </section>

      {/* 6) #faq */}
      <section
        id="faq"
        className="bg-white/80 shadow-md rounded-lg p-4 md:p-6 my-6 border-l-4 border-blue-400"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 underline decoration-blue-400 mb-4">
          Q&A
        </h2>
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
