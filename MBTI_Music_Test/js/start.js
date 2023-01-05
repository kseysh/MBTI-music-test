const main=document.querySelector("#main");
const qna=document.querySelector("#qna");
const result=document.querySelector("#result")
const END_POINT=12;

function goResult(){
    qna.style.WebkitAnimation="fadeOut 1s";
    qna.style.animaition="fadeOut 1s";
    setTimeout(() =>{
        result.style.WebkitAnimation="fadeIn 1s";
        result.style.animaition="fadeIn 1s";
        setTimeout(()=>{
            qna.style.display="none"
            result.style.display="block"
        },500);
    },500);

}
function addAnswer(answerText,qIdx){
    var ansBx = document.querySelector('.answerBox');
    var ansBtn = document.createElement('button');
    ansBx.appendChild(ansBtn);
    ansBtn.classList.add('answerList');
    ansBtn.classList.add('mb-3');
    ansBtn.classList.add('py-3');
    ansBtn.classList.add('mx-auto');
    ansBtn.style.WebkitAnimation="fadeIn 1s";
    ansBtn.style.animation="fadeIn 1s";


    ansBtn.innerHTML=answerText;
    ansBtn.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList')
        for(let i = 0;i<children.length;i++){
            children[i].disabled=true;
            children[i].style.WebkitAnimation="fadeOut 0.5s";
            children[i].style.animation="fadeOut 0.5s";
        }
        setTimeout(()=>{
            for(let i =0;i<children.length;i++){
                children[i].style.display="none"
            }
            goNext(++qIdx);
        },450);
    }, false);
}
function goNext(qIdx){
    if(qIdx+1===END_POINT){
        goResult();
    }
    var qBx = document.querySelector('.qBox');
    qBx.innerHTML=qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx);//변경
    }
    var status=document.querySelector('.statusBar')
    status.style.width=(100/END_POINT)*(qIdx+1)+'%';
}

function begin(){
    main.style.WebkitAnimation="fadeOut 1s";
    main.style.animaition="fadeOut 1s";
    setTimeout(() =>{
        qna.style.WebkitAnimation="fadeIn 1s";
        qna.style.animaition="fadeIn 1s";
        setTimeout(()=>{
            main.style.display="none"
            qna.style.display="block"
        },500);
        let qIdx=0;
        goNext(qIdx);
    },500);
}
