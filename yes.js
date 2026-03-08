let userInput=document.querySelectorAll(".img img");
let userScore=document.querySelector(".userscore");
let compScore=document.querySelector(".compscore");
let tag=document.querySelector(".start");
let resetBtn = document.querySelector(".reset");

const gencomchoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIndex= Math.floor(Math.random()*3);
    return options[randomIndex];
};

userInput.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.dataset.choice;
        playgame(userChoice);
    })
});
const playgame=(userChoice)=>{
    const compChoice=gencomchoice();
    if(userChoice===compChoice){
        tag.innerText = `You chose ${userChoice}, computer chose ${compChoice}
        It was a draw`;
        tag.style.backgroundColor="#f1c40f";
        tag.style.color="black";
        return;
    }
    else if((userChoice==="rock" && compChoice==="scissor") ||(userChoice==="paper" && compChoice==="rock") ||(userChoice==="scissor" && compChoice==="paper")){
    tag.innerText = `You chose ${userChoice}, computer chose ${compChoice}
    You won!! Yay!`;
    tag.style.backgroundColor="green";
    userScore.innerText = Number(userScore.innerText) + 1;
    } 
    else{
    tag.innerText = `You chose ${userChoice}, computer chose ${compChoice}
    You lose!!`;
    tag.style.backgroundColor="red";
    compScore.innerText = Number(compScore.innerText) + 1;
    }
    
}
resetBtn.addEventListener("click", () => {
    userScore.innerText = 0;
    compScore.innerText = 0;

    tag.innerText = "play your move";
    tag.style.backgroundColor = "blue";
    tag.style.color = "white";
});