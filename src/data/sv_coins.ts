const sv_coins = `
/**   
 * ポケットモンスターSVの学生最強大会でお金稼ぎを自動化するスケッチ
 *
 * ※ 当プログラムはポケットモンスタースカーレット・ヴィオレットのDLCクリア後とクリア前で初期条件が異なります。
 *
 * 初期条件：
 * 1. DLCクリア前の場合、lv100メトロノーム持ちひかえめフェアリースキンニンフィア(技構成は先頭にハイパーボイス)　
 *    DLCクリア後の場合、lv100メトロノーム持ちひかえめホワイトキュレム（技構成は先頭にれいとうビーム）の育成をお勧めします。
 * 2. 手持ちポケモンを条件1のポケモン一体のみにする。
 * 3. 学生最強大会受付の前で話しかける。
 * 
 */


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
    pushButton(Button::A, 100);
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
    starBattle();
}`;

export default sv_coins;