import React from "react";
import { Link } from "react-router-dom";
import ReferencesSection from "../components/ReferencesSection";

const Docs: React.FC = () => {
  return (
    <div className="container mx-auto p-6 md:p-8 min-h-[50vh] flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl bg-white/80 backdrop-blur-md shadow-lg rounded-lg p-8 border-l-8 border-blue-500">
        {/* タイトル */}
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 underline decoration-blue-500">
          Documents
        </h1>

        {/* 概要 */}
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          ここでは、<strong>Arduboy Auto-Farm</strong> を活用して Nintendo
          Switch の自動周回を行うための詳細なドキュメントをまとめています。
          <br />
          <strong>React + TypeScript + Vite</strong> で作成した本サイトには、
          Arduboyへの書き込み手順やサンプルコードの使い方、
          複雑なマクロ操作の例などをまとめています。
          <br />
          このページを参考に、任天堂スイッチの周回操作を効率化してみてください。
        </p>

        {/* コマンド一覧: ボタン操作 */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 underline decoration-blue-500">
          ボタン操作コマンド
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed">
          Arduboy Auto-Farm では、任天堂スイッチの各種ボタンを
          <strong>連打</strong>・<strong>長押し</strong>
          といった形で操作できます。
          以下のコマンドを用いて、繰り返し操作の自動化が可能です。
        </p>
        <ul className="list-disc list-inside text-gray-800 mb-4 leading-relaxed">
          <li>
            <strong>pushButton(button, delay_time = 0, loop = 1)</strong>
            <br />
            ボタンを連打する。
            <br />
            <em>例</em>：pushButton(Button.A, 500) → Aボタンを押して0.5秒待機
          </li>
          <li>
            <strong>holdButton(button, hold_time)</strong>
            <br />
            ボタンを押し続ける。
            <br />
            <em>例</em>：holdButton(Button.L, 2000) → Lボタンを2秒長押し
          </li>
        </ul>
        <p className="text-gray-800 mb-4">
          <strong>Button 定義一覧</strong>：Y, B, A, X, L, R, ZL, ZR, MINUS,
          PLUS, LCLICK, RCLICK, HOME, CAPTURE
        </p>

        {/* コマンド一覧: 十字キー（ハット操作） */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 underline decoration-blue-500">
          十字キー（方向ボタン）操作
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed">
          十字キーも連打や長押し、さらには斜め方向への入力に対応しています。
        </p>
        <ul className="list-disc list-inside text-gray-800 mb-4 leading-relaxed">
          <li>
            <strong>pushHat(hat, delay_time = 0, loop = 1)</strong>
            <br />
            十字キーを連打。
            <br />
            <em>例</em>：pushHat(Hat.UP, 1000) → 上キー入力後、1秒待機
          </li>
          <li>
            <strong>holdHat(hat, hold_time)</strong>
            <br />
            十字キーを押し続ける。
            <br />
            <em>例</em>：holdHat(Hat.RIGHT, 5000) → 右キーを5秒長押し
          </li>
        </ul>
        <p className="text-gray-800 mb-4">
          <strong>Hat 定義一覧</strong>：UP, UP_RIGHT, RIGHT, DOWN_RIGHT, DOWN,
          DOWN_LEFT, LEFT, UP_LEFT, NEUTRAL
        </p>

        {/* コマンド一覧: スティック操作 */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 underline decoration-blue-500">
          スティック操作
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed">
          0～255 の範囲でスティックを倒す角度を指定できます。Stick::MIN (0),
          Stick::NEUTRAL (128), Stick::MAX (255)
          などの定義を利用すると便利です。
        </p>
        <ul className="list-disc list-inside text-gray-800 mb-4 leading-relaxed">
          <li>
            <strong>tiltLeftStick(lx, ly, tilt_time, button=NULL)</strong>
            <br />
            左スティックを倒す。
            <br />
            <em>例</em>：tiltLeftStick(Stick::MIN, 128, 5000)
            <br />→ 左スティックを左に5秒間倒す
          </li>
          <li>
            <strong>tiltRightStick(rx, ry, tilt_time, button=NULL)</strong>
            <br />
            右スティックを倒す。
            <br />
            <em>例</em>： tiltRightStick(Stick::MAX, Stick::MAX, 15000,
            Button.A)
            <br />→ Aボタン連打しながら右スティックを右下に15秒倒す
          </li>
          <li>
            <strong>spinLeftStick(spin_time, speed=5, direction=1)</strong>
            <br />
            左スティックを回転。
            <br />
            <em>例</em>：spinLeftStick(10000)
            <br />→ 10秒間、時計回りに1秒5回転で左スティックをぐるぐる
          </li>
          <li>
            <strong>spinRightStick(spin_time, speed=5, direction=1)</strong>
            <br />
            右スティックを回転。
          </li>
        </ul>

        {/* SwitchControlLibrary のコマンド */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 underline decoration-blue-500">
          SwitchControlLibrary を使ったその他のコマンド
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed">
          本ライブラリは <strong>SwitchControlLibrary (v2)</strong>{" "}
          のコマンドも内蔵しています。
          例えば、ポケモン剣盾のバックアップデータ読み込みなど、
          特殊な操作をしたい場合に利用できます。
        </p>
        {/* カラー付きのコードブロック */}
        <div className="bg-gray-900 text-gray-100 p-4 rounded leading-relaxed whitespace-pre-wrap overflow-auto text-sm">
          {`SwitchControlLibrary().pressButton(Button::B);
            SwitchControlLibrary().pressButton(Button::X);
            SwitchControlLibrary().pressHatButton(Hat::UP);
            SwitchControlLibrary().sendReport(); // B、X、↑ボタンを同時に送信
            delay(100);
            SwitchControlLibrary().releaseButton(Button::B);
            SwitchControlLibrary().releaseButton(Button::X);
            SwitchControlLibrary().releaseHatButton(); // 方向キーをニュートラルに
            SwitchControlLibrary().sendReport(); // B、X、↑ボタンを同時に離す
          `}
        </div>
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          これらのドキュメントは随時アップデート予定です。
          新しい情報があれば、どんどん追加していきます。
          ぜひ定期的にチェックしてみてください！
        </p>

        {/* 参考文献 */}
        <ReferencesSection />

        <div className="mt-8"></div>

        {/* ボタン：トップページへ */}
        <Link
          to="/home"
          className="btn btn-primary px-6 py-3 font-semibold text-white"
        >
          Homeへ戻る
        </Link>
      </div>
    </div>
  );
};

export default Docs;
