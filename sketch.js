let posX = [];
let posY = [];
let d = [40, 55, 70, 50];

let myColor = 
[
  '#BFD7EA', 
  '#87CEEB',
  '#D8C7E8', 
  '#BFE3DF'  
];

let triangleColors = 
[
  '#D9A5A5', 
  '#D8C58F', 
  '#A9B7A1', 
  '#9EB6C4', 
  '#F5F3EE', 
  '#D9A5A5', 
  '#D8C58F',
  '#A9B7A1',
  '#9EB6C4',
  '#F5F3EE'
];

let x, y;

let sizeW;
let sizeH;
let numShapes;

let numTriangles;
let triangleSize;
let triangleSpacing;

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  x = width / 2;
  y = height / 2;

  // 四个圆围绕中心
  posX = 
  [
    x - 120,
    x + 120,
    x,
    x
  ];

  posY = 
  [
    y,
    y,
    y - 120,
    y + 120
  ];

  // 方形套环
  numShapes = 20;
  sizeW = width / numShapes;
  sizeH = height / numShapes;

  // 中间同心三角形
  numTriangles = 10;
  triangleSize = 400;
  triangleSpacing = 35;
}

function draw() {
  background(0);

  // 米色方形套环
  for (let i = numShapes; i > 0; i--) 
  {
    noFill();
    stroke('#D8CBB8');
    strokeWeight(3);
    rect(x, y, sizeW * i, sizeH * i);
  }

  sizeW++;
  sizeH++;

  if (sizeW > width || sizeH > height)
  {
    sizeW = 0;
    sizeH = 0;
  }

  // 同心三角形
  let currentSize = triangleSize;

  for (let i = 0; i < numTriangles; i++) 
    {
    fill(triangleColors[i]);
    stroke('white');
    strokeWeight(2);

    triangle(
      x, y - currentSize / 2,
      x - currentSize / 2, y + currentSize / 2,
      x + currentSize / 2, y + currentSize / 2
    );

    currentSize = currentSize - triangleSpacing;
  }

  // 四个圆
  for (let i = 0; i < 4; i++) 
    {
    fill(myColor[i]);
    stroke('white');
    strokeWeight(3);
    circle(posX[i], posY[i], d[i]);
  }
}