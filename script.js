
let ball = document.querySelector(".ball");
let shakeButton = document.querySelector("button");
let triangles = document.querySelectorAll("img");
shakeButton.addEventListener('click', start);
function start() {
    let x = document.querySelector("input").value;
    let inputQuestion = document.querySelector("input");
    if (x == "") {
        inputQuestion.classList.add("inputIncorrect");
        inputQuestion.classList.add('shakeAnimation');
    } else {
        inputQuestion.classList.remove("inputIncorrect");
        shake();
    }
}
function shake(){
    ball.classList.add('shakeAnimation');
    ball.addEventListener('animationend', spin);
}
function spin(){
    ball.removeEventListener('animationend', spin);
    ball.classList.remove('shakeAnimation');
    ball.classList.add('spinAnimation');
    ball.addEventListener('animationend', randomNumber);
}

function randomNumber(){
    ball.removeEventListener('animationend', randomNumber);
    min = Math.ceil(0);
    max = Math.floor(19);
    let rnd = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive, this one works all the time, because the radius is set precisely.
    //let rnd = Math.floor(Math.random()*20); woking one, but sometimes rolls nothing, because nothing is assigned.
    console.log(rnd);
    triangles[rnd].style.display='inline';
    triangles[rnd].style.opacity=1;
    setTimeout(function(){triangles[rnd].style.opacity=0;},4000);//change the last number for the amount of time the answer stays in full opacity(1)//
    setTimeout(function(){
        ball.classList.remove('spinAnimation');
        ball.classList.add('spinAnimation2');},7000);
    setTimeout(function(){
        ball.classList.remove('spinAnimation2');},8000);
}
