const spla_nawabato = `
/**
 * スプラトゥーン3のナワバトラーで経験値集めを自動化するスケッチ
 *
 * ※ 当プログラムはスプラトゥーン3のVer1.1.1で動作確認を行っております。アップデートにより正常に動作しなくなる可能性がありますのでご了承ください。
 *
 * 初期条件は
 *　1. 適当なデッキを用意
 *　2. ナワバトラーの受付に話しかける
 *　3.デッキを選んでくださいの画面で待機
 */

// バトル開始するまでの時間
const int START_LOADING_TIME_MS = 10000;

// バトルが終了した後、自由行動できるようになるまでの時間
const int FINISH_LOADING_TIME_MS = 14000;

// パスした後相手のターンが終了するまでの時間
const int PASS_TIME_MS = 8000;

// ライブラリを読み込むためのコード（詳細: https://github.com/lefmarna/NintendoSwitchControlLibrary）
#include <NintendoSwitchControlLibrary.h>

// 「使いたいコントローラーのL+Rを押してください」を閉じる
void selectController() {
    pushButton(Button::L, 100);
    pushButton(Button::R, 100);
    pushButton(Button::A, 3000);
}

// バトルを開始する
void startBattle() {
    pushButton(Button::A, START_LOADING_TIME_MS); //Button::A（デッキを選んでください）
    pushButton(Button::A, 100); //Button::A（手札のカードを引き直しますか？）
}

// カードを捨ててパスする
void Pass() {
    for(int i = 0 ; i < 12 ; i++){
      tiltLeftStick(Stick::NEUTRAL, Stick::MIN, 100); //上
      pushButton(Button::A, 100);
      pushButton(Button::A, PASS_TIME_MS);
    }
}

// マイコンのセット時に1度だけ行われる処理
void setup() {
    // Switchがマイコンを認識するまでは信号を受け付けないため、適当な処理をさせておく
    pushButton(Button::B, 500, 5);
    // 「使いたいコントローラーのL+Rを押してください」の画面が出るまで待機する
    delay(5000);
    // 「使いたいコントローラーのL+Rを押してください」を突破する
    selectController();
}

// ここに記述した内容がループされ続ける
void loop() {
      tiltLeftStick(Stick::NEUTRAL, Stick::MIN, 100); //上
      pushButton(Button::A, 10);
      pushButton(Button::A, PASS_TIME_MS);
    // startBattle();
    // Pass();
    // delay(FINISH_LOADING_TIME_MS);
    // pushButton(Button::A, 5000); //Button::A（続けて対戦しますか？）
}

`;
export default spla_nawabato;