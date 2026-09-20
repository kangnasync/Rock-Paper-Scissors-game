let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice"); 
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const themeToggle = document.getElementById("themeBtn");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
    } else {
        themeToggle.textContent = "🌙";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
    }
});

const genCompChoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()**3); 
    return options[randIdx];
};
const drawGame=()=>{
console.log("game was a draw!");
};

const showWinner=(userWin, userChoice, compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("You Win!!");
    msg.innerText=`You Won! Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor="green";
}
else{
    compScore++;
    compScorePara.innerText=compScore;
    console.log("You Lose!!");
    msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor="red";
}
};
const playGame=(userChoice)=>{
//generate computer choice
const compChoice=genCompChoice();
if(userChoice===compChoice){
    drawGame();
    msg.innerText="Game was a draw, Play again!";
    msg.style.backgroundColor="#081b31";
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissors or paper by comp
        userWin= compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        //rock or scissors by comp
        userWin= compChoice==="scissors"?false:true;
    }
    else{
        //scissors by user and rock or paper by comp
        userWin= compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    });
});
