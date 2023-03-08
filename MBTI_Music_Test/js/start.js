const main = document.querySelector("#main");
const questionSection = document.querySelector("#questionSection");
const result = document.querySelector("#result");
const ENDPOINT = 12;
var resultList = new Array(8).fill(0);
var resultIndex = 0;
console.log("안녕하세요~")


function calResult() {
  var str = "";
  if (resultList[0] >= resultList[1]) {
    str += "E";
  } else {
    str += "I";
  }
  if (resultList[2] >= resultList[3]) {
    str += "N";
  } else {
    str += "S";
  }
  if (resultList[4] >= resultList[5]) {
    str += "F";
  } else {
    str += "T";
  }
  if (resultList[6] >= resultList[7]) {
    str += "J";
  } else {
    str += "P";
  }
  console.log("당신의 MBTI : ", str);

  switch (str) {
    case "ISFP":
    case "INFP":
      resultIndex = 0;
      return;
    case "ISFJ":
    case "ESTP":
      resultIndex = 1;
      return;
    case "ISTP":
    case "ENTP":
      resultIndex = 2;
      return;
    case "ISTJ":
      resultIndex = 3;
      return;
    case "INTJ":
    case "ESFP":
      resultIndex = 4;
      return;
    case "INFJ":
    case "INTP":
      resultIndex = 5;
      return;
    case "ENFJ":
      resultIndex = 6;
      return;
    case "ESTJ":
    case "ESFJ":
    case "ENTJ":
      resultIndex = 7;
      return;
    default: //case : 'ENFP'
      resultIndex = 8;
    return;
  }
  return;
}
function setRandom(listLength) {
  let randomIndexArray = [];
  for (let i = 0; i < 5; i++) {
    randomNum = Math.floor(Math.random() * listLength);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      i--;
    }
  }
  return randomIndexArray;
}

function setResult() {

  var name = document.querySelector(".name");
  var desc = document.querySelector(".description");
  name.innerHTML = infoList[resultIndex].name;
  desc.innerHTML = infoList[resultIndex].desc;

  const slideItem = document.querySelectorAll(".slide_item");

  var randomList = setRandom(infoList[resultIndex].music.length);
  for (let i = 0; i < 5; i++) {
    slideItem.item(i).innerHTML = infoList[resultIndex].music[randomList[i]];
  }
  resultPage();

  var image = document.querySelector(".resultImage");
  var resultImage = document.createElement("img");

  resultImage.src = "./image/image_" + (resultIndex + 1) + ".jpg";
  resultImage.alt = resultIndex + 1;
  resultImage.classList.add("img-fluid");
  resultImage.setAttribute("style", "height : 280px;");

  image.appendChild(resultImage);

  var friend1 = document.getElementById("friend1");
  var friend2 = document.getElementById("friend2");

  friend1.innerHTML = infoList[infoList[resultIndex].friend[0]].name;
  friend2.innerHTML = infoList[infoList[resultIndex].friend[1]].name;

  const Func1 = function () {
    goFriendResult(infoList[resultIndex].friend[0]);
    friend1.removeEventListener("click", Func1);
    friend2.removeEventListener("click", Func2);
  };
  friend1.addEventListener("click", Func1);

  const Func2 = function () {
    friend1.removeEventListener("click", Func1);
    friend2.removeEventListener("click", Func2);
    goFriendResult(infoList[resultIndex].friend[1]);
  };
  friend2.addEventListener("click", Func2);

  return;
}

function recommendAgain() {
  var slideItem = document.querySelectorAll(".slide_item");
  console.log("새로운 추천 노래!")
  var randomList = setRandom(infoList[resultIndex].music.length);
  for (let i = 0; i < 5; i++) {
    slideItem.item(i + 1).innerHTML =
      infoList[resultIndex].music[randomList[i]];
    console.log(slideItem.item(i + 1));
  }
  // 무한 슬라이드를 위해 start, end 슬라이드 복사하기
  const startSlide = slideItem[0];
  const endSlide = slideItem[5];

  // 엘리먼트 생성
  const startElem = document.createElement(startSlide.tagName);
  const endElem = document.createElement(endSlide.tagName);

  // 엘리먼트에 클래스 적용 동일하게 하기
  endSlide.classList.forEach((c) => endElem.classList.add(c));
  endElem.innerHTML = endSlide.innerHTML;
  startSlide.classList.forEach((c) => startElem.classList.add(c));
  startElem.innerHTML = startSlide.innerHTML;

  // 각 복제한 엘리먼트를 각 위치에 추가하기
  slideItem[0] = endElem;
  slideItem[slideItem.length - 1] = startElem;
  return;
}

function goResult() {
  questionSection.style.WebkitAnimation = "fadeOut 1s";
  questionSection.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      questionSection.style.display = "none";
      result.style.display = "block";
    }, 450);
  }, 450);

  setResult();
  return;
}

function goFriendResult(friendIndex) {
  result.style.WebkitAnimation = "fadeOut 1.1s";
  result.style.animation = "fadeOut 1.1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1.5s";
    result.style.animation = "fadeIn 1.5s";
    result.style.display = "none";
    var name = document.querySelector(".name");
    var desc = document.querySelector(".description");
    name.innerHTML = infoList[friendIndex].name;
    desc.innerHTML = infoList[friendIndex].desc;

    const slideItem = document.querySelectorAll(".slide_item");

    var randomList = setRandom(infoList[friendIndex].music.length);
    console.log("새로운 추천 노래!")
    for (let i = 0; i < 5; i++) {
      console.log(slideItem.item(i));
      slideItem.item(i).innerHTML = infoList[friendIndex].music[randomList[i]];
    }

    var image = document.querySelector(".resultImage");
    var resultImage = document.querySelector("img");
    resultImage.src = "./image/image_" + (friendIndex + 1) + ".jpg";
    resultImage.alt = friendIndex + 1;
    resultImage.setAttribute("style", "height : 280px;");
    image.replaceChildren(resultImage);

    var friend1 = document.getElementById("friend1");
    var friend2 = document.getElementById("friend2");
    friend1.innerHTML = infoList[infoList[friendIndex].friend[0]].name;
    friend2.innerHTML = infoList[infoList[friendIndex].friend[1]].name;

    const Func1 = function () {
      friend1.removeEventListener("click", Func1);
      friend2.removeEventListener("click", Func2);
      goFriendResult(infoList[friendIndex].friend[0]);
      resultIndex = friendIndex;
    };
    friend1.addEventListener("click", Func1);

    const Func2 = function () {
      friend1.removeEventListener("click", Func1);
      friend2.removeEventListener("click", Func2);
      goFriendResult(infoList[friendIndex].friend[1]);
      resultIndex = friendIndex;
    };
    friend2.addEventListener("click", Func2);
    result.style.display = "block";
  }, 1000);

  return;
}

function audioClick() {
  var playBtn = document.querySelector(".musicPlayBtn");
  var audiocontainer = document.querySelector("#audioContainer");

  if (playBtn.value == "pause") {
    audiocontainer.volume = 0.2;
    audiocontainer.loop = true;
    audiocontainer.play();
    playBtn.value = "play";
    playBtn.innerHTML = "❚❚";
  } else {
    audiocontainer.pause();
    playBtn.value = "pause";
    playBtn.innerHTML = "▶";
  }
  return;
}

function addAnswer(answerText, currentIdx, idx) {
  var answerBox = document.querySelector(".answerBox");
  var button = document.createElement("button");
  button.classList.add("answerList");
  button.classList.add("my-3");
  button.classList.add("py-3");
  button.classList.add("fadeIn");

  answerBox.appendChild(button);
  button.innerHTML = answerText;

  button.addEventListener(
    "click",
    function () {
      var target = qnaList[currentIdx].a[idx].type;
      for (j in target) {
        resultList[target[j]] += 1;
      }

      var children = document.querySelectorAll(".answerList");

      for (let i = children.length - 3; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }

      setTimeout(() => {
        for (let i = children.length - 3; i < children.length; i++) {
          children[i].style.display = "none";
        }
        addQuestion(++currentIdx);
      }, 450);
    },
    false
  );
  return;
}

function addQuestion(currentIdx) {
  if (currentIdx == ENDPOINT) {
    goResult();
    return;
  }
  var image = document.querySelector(".questionImage");

  var question = document.querySelector(".question");
  question.innerHTML = qnaList[currentIdx].q;
  for (let i in qnaList[currentIdx].a) {
    addAnswer(qnaList[currentIdx].a[i].answer, currentIdx, i);
  }
  var status = document.querySelector(".statusBar");
  status.style.width = (100 / ENDPOINT) * (currentIdx + 1) + "%";
  var percent = document.querySelector(".percentage");
  percent.innerHTML = " " + (1 + currentIdx) + ":00 / " + ENDPOINT + ":00";

  if (currentIdx == ENDPOINT - 1) {
    var musicPlayBtn = document.querySelector(".musicPlayBtn");
    musicPlayBtn.style.display = "flex";
    musicPlayBtn.onclick = function () {
      audioClick();
    };
  }
  return;
}

function goQuestionSection() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    questionSection.style.WebkitAnimation = "fadeIn 1s";
    questionSection.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      questionSection.style.display = "block";
    }, 450);
  }, 450);

  addQuestion(0);
  return;
}

let reverseBtn = document.querySelectorAll(".reverseBtn");
reverseBtn[0].addEventListener("click", click);
reverseBtn[1].addEventListener("click", click);

let reloadBtn = document.querySelector(".reloadBtn");
reloadBtn.addEventListener("click", reload);
function reload(event) {
  result.style.WebkitAnimation = "fadeOut 1s";
  result.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.display = "none";
    location.reload();
  }, 950);
}

function click(event) {
  let elem = document.querySelector(".card");
  if (elem.style.transform == "rotateY(180deg)") {
    elem.style.transform = "rotateY(0deg)";
  } else {
    elem.style.transform = "rotateY(180deg)";
  }
  return;
}
