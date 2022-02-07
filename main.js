let result = document.getElementById("result");
let resultImg = document.querySelector(".main-img");
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
    if (leftChance != 1) {
      resultImg.src =
        "https://media1.giphy.com/media/Rdod7XvXQjzCVpiDnR/100.webp?cid=ecf05e47ji91902o7mz0qscb1hocllw4b9vym4gwa6nyfqcc&rid=100.webp&ct=g";
      result.textContent = "DOWN!!!!";
    }
  } else if (userInput.value < randomNum) {
    if (leftChance != 1) {
      resultImg.src =
        "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200w.webp?cid=ecf05e476b7a83q0gv47l0r9i9l9tbw6v5onoafqj2gt2z4v&rid=200w.webp&ct=g";
      result.textContent = "UP!!!!";
    }
  } else {
    resultImg.src =
      "https://media4.giphy.com/media/KtGvusrgMKlkvHjZUY/200w.webp?cid=ecf05e47wujjz8nnxhchnk07fpy0iv2nuxibx20d44jyoqkf&rid=200w.webp&ct=g";
    result.textContent = "맞췄습니다!!!";
    btnGo.disabled = true;
    return;
  }
  numHistory.push(userInput.value);
  leftChance--;
  if (leftChance == 1) {
    chance.style.color = "red";
  }
  chance.textContent = `남은 기회 : ${leftChance}회`;
  if (leftChance < 1) {
    resultImg.src =
      "https://media2.giphy.com/media/SIPIe590rx6iA/200w.webp?cid=ecf05e47238qks5py3v3kp0tgd8c126h19r1wqd3uracz5o4&rid=200w.webp&ct=g";
    result.textContent = `실패!!! 정답은 ${randomNum}`;
    btnGo.disabled = true;
  }
}

function reset() {
  randomNum = getRandomNum();
  resultImg.src =
    "https://media1.giphy.com/media/7mHTSb5tSI5Yc0xhAO/200w.webp?cid=ecf05e47xchaeyxphh5eawv9cq4edanv9ilj1hwultxsu819&rid=200w.webp&ct=g";
  result.textContent = "과연 당신의 운명은?";
  userInput.value = "";
  chance.textContent = "남은 기회 : 5회";
  leftChance = 5;
  chance.style.color = "black";
  btnGo.disabled = false;
  numHistory = [];
}
