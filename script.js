let userScore=0;
let compScore=0;

let msg=document.querySelector("#msg");
let userscore=document.querySelector("#user-score");
let Computerscore=document.querySelector("#Computer-score")
const choices=document.querySelectorAll(".choice");

const getCompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3); 
    return options[randIdx];
}

const gamedraw=()=>{
    msg.innerText="Game Was draw. Play Again.";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compchoice)=>{
    if(userWin){
        msg.innerText=`You Win your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userscore.innerText=userScore;
    }
    else{
        msg.innerText=`You Lose ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        Computerscore.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
    const compchoice=getCompchoice();
    if(userChoice===compchoice){
        gamedraw();
    }

    else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin = compchoice==="paper" ? false : true;
        } else if (userChoice==="paper"){
            userWin=compchoice==="scissors" ? false : true;
        } else {
            userWin=compchoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});