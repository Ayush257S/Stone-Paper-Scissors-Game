let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListern("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice wad clicked",userChoice);
    })
})