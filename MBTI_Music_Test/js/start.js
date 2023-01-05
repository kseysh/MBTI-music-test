const main=document.querySelector("#main");
const qna=document.querySelector("#qna");

function addAnswer(answerText,qIdx){
    var ansBx = document.querySelector('.answerBox');
    var ansBtn = document.createElement('button');
    ansBx.appendChild(ansBtn);
    ansBtn.classList.add('answerList');
    ansBtn.innerHTML=answerText;
    ansBtn.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList')
        for(let i = 0;i<children.length;i++){
            children[i].disabled=true;
            children[i].style.display='none';
        }
        goNext(++qIdx);
    }, false);
}
function goNext(qIdx){
    var qBx = document.querySelector('.qBox');
    qBx.innerHTML=qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx);//변경
    }
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
