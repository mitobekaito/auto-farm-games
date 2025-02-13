const sampleCode = `
// スプラトゥーン3のヒーローモードでイクラ集めを自動化するスケッチ

#include <NintendoSwitchControlLibrary.h>

// コントローラー選択
void selectController() {
    pushButton(Button::L, 100);
    pushButton(Button::R, 100);
    pushButton(Button::A, 3000);
}

// ミッション開始
void startMission() {
    holdButton(Button::ZL, 10000);
    pushButton(Button::A, 2000);
    tiltLeftStick(Stick::NEUTRAL, Stick::MIN, 2000);
    pushButton(Button::A, 3000);
}

// インク発射
void shootInk() {
    tiltRightStick(Stick::NEUTRAL, Stick::MIN, 50);
    holdButton(Button::ZR, 2000);
}

// 初回実行時のセットアップ
void setup() {
    pushButton(Button::B, 500, 5);
    delay(5000);
    selectController();
}

// 無限ループで実行
void loop() {
    startMission();
    delay(6000);
    shootInk();
    delay(30000);
}
`;

export default sampleCode;
