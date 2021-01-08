let rockbtn = document.querySelector("#rock")
let paperbtn = document.querySelector("#paper")
let scissorsbtn = document.querySelector("#scissors")

let player = document.querySelector(".player");
let computer = document.querySelector(".computer");

let winner = document.querySelector(".winner")


rockbtn.addEventListener("click", round)
paperbtn.addEventListener("click",round)
scissorsbtn.addEventListener("click",round)
function anime(){
    winner.classList.add("txt-animate")

}

function round(e){
    let playerselect = e.target.parentElement.id;
    
    console.log(playerselect)
    const computerselect = computerplay();
console.log(computerselect)
    update(play(playerselect, computerselect))
   
anime()

close()
}

function play( playerselect,computerselect){
    if(playerselect == computerselect){
       winner.innerHTML = "tie"
       winner.style.color = "black"

    }
if(playerselect =="rock" && computerselect == "scissors" ||
playerselect == "paper" && computerselect =="rock" ||
playerselect == "scissors" && computerselect == "paper" ){
    winner.style.color = "green"
winner.innerHTML = "player won"
    return "player";   

} 

if(computerselect =="rock" && playerselect == "scissors" ||
computerselect == "paper" && playerselect =="rock" ||
computerselect == "scissors" && playerselect== "paper"){
    winner.innerHTML = "computer won"
    winner.style.color = "red"

    return "computer";
}

}

function computerplay(){
    let ran =Math.floor( Math.random()*3)
    switch (ran){
        case 0:
    return "rock";
    
    case 1:
        return "paper";
        
     case 2:
         return "scissors";
         

    }
}

let playscore = 0;
let comscore =0;

function update(win){
    if(win == "player"){
        playscore++;
        player.textContent = playscore
    }
    if(win == "computer"){
        comscore++;
        computer.textContent =comscore;
    }

}

function close(){
    if (playscore == 5 || comscore == 5){
        alert("gamer over... paly again!");
        player.textContent = 0
        computer.textContent = 0;
        playscore =0;
        comscore =0;
        winner.innerHTML = "";

        return;
    }
}