const main=document.querySelector("#main");
const questionSection=document.querySelector("#questionSection");
const result=document.querySelector("#result");
const ENDPOINT=12;
var resultList=new Array(ENDPOINT).fill(0);
console.log(resultList);

function calResult(){
    return resultList.indexOf(Math.max(...resultList));
    //...은 전개 연산자라고 부른다!
}

function setResult(){
    var resultIndex=calResult();
    console.log(resultIndex)

    var name=document.querySelector(".name");
    var desc=document.querySelector(".description");
    name.innerHTML=infoList[resultIndex].name;
    desc.innerHTML=infoList[resultIndex].desc;

    var image=document.querySelector("#resultImage");
    var resultImage=document.createElement('img')
    resultImage.src='./image/image_'+resultIndex+".png";
    resultImage.alt=resultIndex;
    resultImage.classList.add('img-fluid')
    image.appendChild(resultImage);


}

function goResult(){
    questionSection.style.display='none';
    result.style.display='block';
    setResult();
}

function addAnswer(answerText,currentIdx,idx){

    var answerBox=document.querySelector(".answerBox");
    var button=document.createElement('button')
    button.classList.add('answerList')
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
        var target=qnaList[currentIdx].a[idx].type;
        for(j in target){
            resultList[target[j]]+=1;
        }
        console.log("currentIdx : ",currentIdx,"idx : ",idx)
        console.log(resultList);

        console.log('addEvent 끝날때의 currentIdx',currentIdx)
        addQuestion(++currentIdx)
    }, false);


}

function addQuestion(currentIdx){
    if(currentIdx==ENDPOINT){
        goResult();
        return;
    }
    var image = document.querySelector('.questionImage');

    var question = document.querySelector(".question");
    question.innerHTML=qnaList[currentIdx].q;
    for(let i in qnaList[currentIdx].a){
        console.log("addAnswer 호출",i);
        addAnswer(qnaList[currentIdx].a[i].answer,currentIdx,i);
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

