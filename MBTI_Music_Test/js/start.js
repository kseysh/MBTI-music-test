const main=document.querySelector("#main");
const questionSection=document.querySelector("#questionSection");
const result=document.querySelector("#result");
const ENDPOINT=12;
function goResult(){

}

function addAnswer(answerText,currentIdx){
    if(currentIdx==ENDPOINT){
        goResult();
    }
    var answerBox=document.querySelector(".answerBox");
    var button=document.createElement('button')
    button.classList.add('answerList')
    button.classList.add('my-1')
    button.classList.add('my-3')
    button.classList.add('py-3')
      

    answerBox.appendChild(button);
    button.innerHTML=answerText;

    button.addEventListener("click",function(){
        console.log('addEvent 호출')
        var children=document.querySelectorAll('.answerList');
        for (let i = 0;i<children.length;i++){
            children[i].disabled=true;
            children[i].style.display='none'
        }
        console.log('addEvent 끝날때의 currentIdx',currentIdx)
        addQuestion(++currentIdx)
    }, false);


}

function addQuestion(currentIdx){
    var image = document.querySelector('.questionImage');

    var question = document.querySelector(".question");
    question.innerHTML=qnaList[currentIdx].q;
    for(let i in qnaList[currentIdx].a){
        console.log("addAnswer 호출",i);
        addAnswer(qnaList[currentIdx].a[i].answer,currentIdx);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/ENDPOINT) * (currentIdx+1) + '%';
    var percent = document.querySelector('.percentage');
    console.log("addQuestion 마지막 currentIdx : ",currentIdx)
    percent.innerHTML=' '+ (1+currentIdx) + ':00 / ' + ENDPOINT +':00';

}

function goQuestionSection(){
    main.style.display="none";
    questionSection.style.display="block";
    addQuestion(0);
}

