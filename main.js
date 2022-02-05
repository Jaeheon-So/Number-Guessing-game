// input 다시 클릭하면 지우기
let result = document.getElementById("result");
let chance = document.getElementById("chance");
let userInput = document.getElementById("user-input");
let btnGo = document.getElementById("btn-go");
let btnReset = document.getElementById("btn-reset");

let randomNum = getRandomNum();
let leftChance = 5;
let numHistory = [];

btnGo.addEventListener("click", play);
btnReset.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function getRandomNum() {
  let num = Math.floor(Math.random() * 100 + 1);
  console.log("정답 : " + num);
  return num;
}

function play() {
  console.log(userInput.value);
  if (userInput.value < 1 || userInput.value > 100) {
    result.textContent = "1부터 100 사이의 숫자를 입력 해주세요";
    return;
  }
  if (numHistory.includes(userInput.value)) {
    result.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";
    return;
  }
  if (userInput.value > randomNum) {
    result.textContent = "DOWN!!!!";
  } else if (userInput.value < randomNum) {
    result.textContent = "UP!!!!";
  } else {
    result.textContent = "맞췄습니다!!!";
    btnGo.disabled = true;
    return;
  }
  numHistory.push(userInput.value);
  leftChance--;
  chance.textContent = `남은 기회 : ${leftChance}회`;
  if (leftChance < 1) {
    result.textContent = "실패!!!";
    btnGo.disabled = true;
  }
}

function reset() {
  randomNum = getRandomNum();
  result.textContent = "결과는?";
  userInput.value = "";
  chance.textContent = "남은 기회 : 5회";
  leftChance = 5;
  btnGo.disabled = false;
  numHistory = [];
}
