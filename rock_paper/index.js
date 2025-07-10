let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector('#comp-score');
const showWinner=(userWin,userChoice,comp)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${comp}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost,${comp} beats your choice ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const compChoice=()=>{
    const options=["rock","paper","scissors"];
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
}
const Draw=()=>{
    msg.innerText="Game Was Draw!,Play Again";
    msg.style.backgroundColor="#081b31";
}
const playGame=(userChoice)=>{
const comp = compChoice();
if(userChoice===comp){
    Draw();
}else{
    let userWin=true;
    if(userChoice=="rock"){
        //scissors,paper
        userWin=comp==="paper"?false:true;
    }else if(userChoice=="paper"){
        //rock,scissors
        userWin=comp==="scissors"?false:true;
    }else if(userChoice=="scissors"){
        //paper,rock
        userWin=comp==="rock"?false:true; 
    }
    showWinner(userWin,userChoice,comp)
}
};


choices.forEach((choice)=>{
choice.addEventListener("click",()=>
{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
});
});

