const main=document.querySelector("#main");
const questionSection=document.querySelector("#questionSection");
const result=document.querySelector("#result");
const ENDPOINT=12;
var resultList=new Array(8).fill(0);
console.log(resultList);

function calResult(){
    var str='';
    if (resultList[0]>=resultList[1]){
        str+='E';
    }
    else{
        str+='I';
    }
    if (resultList[2]>=resultList[3]){
        str+='N';
    }
    else{
        str+='S';
    }
    if (resultList[4]>=resultList[5]){
        str+='F';
    }
    else{
        str+='T';
    }
    if (resultList[6]>=resultList[7]){
        str+='J';
    }
    else{
        str+='P';
    }
    console.log('MBTI : ', str)

    switch(str){
        case 'ISFP':
        case 'INFP':
            return 0;
        case 'ISFJ':
        case 'ESTP':
            return 1;
        case 'ISTP' :
        case 'ENTP':
            return 2;
        case 'ISTJ':
            return 3;
        case 'INTJ' :
        case 'ESFP':
            return 4;
        case 'INFJ':
        case 'INTP':
            return 5;
        case 'ENFJ':
            return 6;
        case 'ESTJ' :
        case 'ESFJ' :
        case 'ENTJ' :
            return 7;
        default:         //case : 'ENFP'
            return 8;
    }

}
function setRandom(listLength){
    let randomIndexArray = [];
    for(let i = 0; i<5;i++){
        randomNum = Math.floor(Math.random() * listLength)
        if (randomIndexArray.indexOf(randomNum) === -1) {
            randomIndexArray.push(randomNum)
        } 
        else {
        i--
        }
    }
    return randomIndexArray;
}

function setResult(){
    var resultIndex=calResult();
    console.log(resultIndex)

    var name=document.querySelector(".name");
    var desc=document.querySelector(".description");
    name.innerHTML=infoList[resultIndex].name;
    desc.innerHTML=infoList[resultIndex].desc;

    
    var image=document.querySelector(".resultImage");
    var resultImage=document.createElement('img')
    resultImage.src='./image/image_'+(resultIndex+1)+".jpg";
    resultImage.alt=resultIndex+1;
    resultImage.classList.add('img-fluid')
    image.appendChild(resultImage);

    const slideItem = document.querySelectorAll(".slide_item");

    var randomList=setRandom(infoList[resultIndex].music.length);
    console.log(randomList)
    for (let i = 0;i<5;i++){
        console.log(slideItem.item(i));
        slideItem.item(i).innerHTML=infoList[resultIndex].music[randomList[i]];
    }


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

