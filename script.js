let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const getCompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3); 
    return options[randIdx];
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    //Generate computer choice
    const compchoice=getCompchoice();
    console.log("Computer choice =",compchoice);
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    })
})