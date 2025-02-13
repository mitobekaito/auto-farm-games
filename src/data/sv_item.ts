const sv_item = `
/*
 * ポケットモンスターSVの道具プリンターでプリントを自動化するスケッチ
 *
 * 初期条件は道具プリンターの落とし物選択の画面で待機
 *　
 */


// ライブラリを読み込むためのコード（詳細: https://github.com/lefmarna/NintendoSwitchControlLibrary）
#include <NintendoSwitchControlLibrary.h>


// マイコンのセット時に1度だけ行われる処理
void setup() {
    // Switchがマイコンを認識するまでは信号を受け付けないため、適当な処理をさせておく
    pushButton(Button::B, 500, 5);
    delay(10000);
    // コントローラーの登録を突破する
    pushButton(Button::A, 1000);
    pushButton(Button::HOME, 1000);
    pushButton(Button::HOME, 8000);
}

// ここに記述した内容がループされ続ける
void loop() {
      pushButton(Button::X, 500);
      pushButton(Button::PLUS, 500);
      pushButton(Button::A, 5000);
}`;

export default sv_item;