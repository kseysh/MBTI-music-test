const main=document.querySelector("#main");
const qna=document.querySelector("#qna");
const result=document.querySelector("#result")
const END_POINT=12;
const select=[0,0,0,0,0,0,0,0,0,0,0,0];

function calResult(){
    
    var result=select.indexOf(Math.max(...select));
    return result;
}
function setResult(){
    let point = calResult();
    const resultName=document.querySelector('.resultName');
    resultName.innerHTML=infoList[point].name;

    var resultImg=document.createElement('img');
    const imgDiv=document.querySelector('.resultImg');
    var imgURL='img/image-'+point+'.png';
    resultImg.src=imgURL;
    resultImg.alt=point;
    resultImg.classList.add('img-fluid')
    imgDiv.appendChild(resultImg);

    const resultDesc=document.querySelector('.resultDesc');
    resultDesc.innerHTML=infoList[point].desc;
}
function goResult(){
    qna.style.WebkitAnimation="fadeOut 1s";
    qna.style.animaition="fadeOut 1s";
    setTimeout(() =>{
        result.style.WebkitAnimation="fadeIn 1s";
        result.style.animaition="fadeIn 1s";
        setTimeout(()=>{
            qna.style.display="none"
            result.style.display="block"
        },500)})
        setResult();
    }


function addAnswer(answerText,qIdx,aIdx){
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
            var target = qnaList[qIdx].a[aIdx].type;
            for(let i =0;i<target.length;i++){
                select[target[i]]+=1;
            }
            for(let i =0;i<children.length;i++){
                children[i].style.display="none"
            }
            goNext(++qIdx);
        },450);
    }, false);

}
function goNext(qIdx){
    if(qIdx===END_POINT){
        goResult();
        return;
    }
    var qBx = document.querySelector('.qBox');
    qBx.innerHTML=qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){ //console 돌렸을 때 i가 0,1,2가 나옴 파이썬과 다른 듯
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
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
