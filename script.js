// 配列
let positionX = [];
let positionY = [];
let positionXt = [];
let positionYt = [];
let velocityY = [];
let size1 = [];
let size2 = [];
let strokeIndex =[];
let ellipseIndex =[];
let rectIndex =[];
let angle = 0;
let sizeX = [];
let sizeY = [];
let numberOfTriangles = 20;
let cout = 11;



let strokeColor = [
  [255, 0, 100],
  [0, 220, 220],
  [200, 255, 0],
];

let ellipseColor = [
  [100, 100, 0],
  [0, 100, 100],
  [100, 0, 100],
];

let rectColor = [
  [100, 100, 0],
  [100, 20, 220],
  [200, 255, 0],
];

// 全体の初期化（最初に一回だけ呼ばれる）
function setup() {
  // キャンバスをつくる
  createCanvas(windowWidth, windowHeight);
  // 輪郭（りんかく）を消す
  noStroke();
  // 30回処理する
  for(let i = 0; i < cout; i++) {
    // 位置(円)
    positionX[i] = random(width);
    positionY[i] = random(height);
    //位置(三角)
    positionXt[i] = random(width);
    positionYt[i] = random(height);
    // 速度
    velocityY[i] = random(3, 10);
    // 大きさ(円)
    size1[i] = random(70, 200);
    //大きさ(四角)
    size2[i] = random(50, 200);
    // 大きさ(三角)
    sizeX[i] = random(5, 40);
    sizeY[i] =  sizeX[i] * 2;
    // 色
    strokeIndex[i] = floor(random(strokeColor.length));
    // 色
    ellipseIndex[i] = floor(random(ellipseColor.length));
    //色の四角
    rectIndex[i] = floor(random(rectColor.length));
  }
}

// 計算と表示
function draw() {
  // 背景をぬりつぶす
  background(0, 0, 60);
  push();
  angle += 0.001;
  rotate(angle);
  // ブレンドモードの設定
  blendMode(ADD);
  for(let i = 0; i < cout; i++) {
    // Y座標を上に移動
    positionY[i] -= velocityY[i];
    // 線の色
    stroke(strokeColor[strokeIndex[i]]);
    // 線の太さ
    strokeWeight(30);
    fill(ellipseColor[ellipseIndex[i]])
    // 円を描く
    ellipse(positionX[i], positionY[i], size1[i]);
    //四角
    //rect(positionX[i], positionY[i], size2[i], size2[i]);
    //三角
    triangle(
      // 頂点の座標
      positionX[i], positionY[i],
      // 左下の座標
      positionX[i] - sizeX[i] , positionY[i] + sizeY[i] ,
      // 右下の座標
      positionX[i] + sizeX[i] ,  positionY[i] + sizeY[i]);
    // キャンバスの外(上)にでたら
    if (positionY[i] < - size1[i]) {
      // キャンバスの下に戻す
      positionY[i] = height + size1[i];
    }
      else if (positionY[i] < - size2[i]) {
        positionY[i] = height + size2[i];
      }
      else if (positionY[i] < - sizeX[i]) {
        positionY[i] = height + sizeY[i];
      }
    
  }
  pop();

  translate(width/2, height/2);
  // テキストのフォント
  textFont('chewy');
  // テキストのサイズ
  textSize(120);
  // テキストの位置
  textAlign(CENTER, CENTER);
  // テキストの色
  fill(255);
  // テキストを表示
  text(hour()+':'+minute()+':'+second(), 0, 0);
}
