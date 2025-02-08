// let choices=document.querySelectorAll(".choice")
// let you = document.querySelector(".you-div")
// let computer = document.querySelector(".computer-div")
// let result = document.querySelector(".result")

// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//        let userchoice = choice.getAttribute ("id")
//        let options = ["stone", "paper", "scissors"]
//        let compindex = Math.floor(Math.random()*3)
//        let compchoice = options[compindex]
//        playGame(userchoice, compchoice)
//     })
// })

// function playGame(userchoice, compchoice){
//     // console.log("User choice: " + userchoice)
//     // console.log("Computer choice: " + compchoice)
//     if (userchoice === compchoice){
//         result.innerText="It's a tie"
//         result.classList.add("draw")
//         // result.style="box-shadow: 2px 2px 20px rgba(105, 208, 252, 0.8), -2px -2px 20px rgba(35, 222, 225, 0.8)"
//         // style.color="rgba(105, 208, 252, 0.8)"

//         // console.log("It's a tie!")
//     } else if (userchoice === "stone"){  
//         if (compchoice === "scissor"){
//             result.innerText="You win"
//             result.classList.add("win")
//             // result.style="box-shadow: 2px 2px 20px rgba(83, 243, 81, 0.8), -2px -2px 20px rgba(83, 253, 91, 0.8)";
//             // style.color="rgba(83, 243, 81, 0.8)"
//             // console.log("You win!")
//         } else {
//             result.innerText="You lose" 
//             result.classList.add("lose")
//             // result.style="box-shadow: 2px 2px 20px rgba(255, 0, 0, 0.8), -2px -2px 20px rgba(255, 20, 20, 1)";
//             // style.color="rgba(255, 0, 0, 0.8)"
//         //     console.log("You lose!")
//          }
//     } else if (userchoice === "paper"){     
//         if (compchoice === "stone"){
//             result.innerText="You win"
//             result.classList.add("win")
//             //             result.style="box-shadow: 2px 2px 20px rgba(83, 243, 81, 0.8), -2px -2px 20px rgba(83, 253, 91, 0.8)";
//             // style.color="rgba(83, 243, 81, 0.8)"
//             // console.log("You win!")
//         } else {
//             result.innerText="You lose"
//             result.classList.add("lose")
//             //  result.style="box-shadow: 2px 2px 20px rgba(255, 0, 0, 0.8), -2px -2px 20px rgba(255, 20, 20, 1)";
//             // style.color="rgba(255, 0, 0, 0.8)"
//             console.log("You lose!")
//         }
//     }       
//     else if (userchoice === "scissor"){     
//         if (compchoice === "paper"){
//             result.innerText="You win"
//             result.classList.add("win")
//             //             result.style="box-shadow: 2px 2px 20px rgba(83, 243, 81, 0.8), -2px -2px 20px rgba(83, 253, 91, 0.8)";
//             // style.color="rgba(83, 243, 81, 0.8)"
//             // console.log("You win!")
//         } else {
//             result.innerText="You lose"
//             result.classList.add("lose")
//             //  result.style="box-shadow: 2px 2px 20px rgba(255, 0, 0, 0.8), -2px -2px 20px rgba(255, 20, 20, 1)";
//             // style.color="rgba(255, 0, 0, 0.8)"
//             // console.log("You lose!")
//         }
//     }

// }


// let choices = document.querySelectorAll(".choice");
// let you = document.querySelector(".you-div")
// let computer = document.querySelector(".computer-div")
// let result = document.querySelector(".result");

// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         let userchoice = choice.getAttribute("id");
//         let options = ["stone", "paper", "scissors"];
//         let compindex = Math.floor(Math.random() * 3);
//         let compchoice = options[compindex];
//         playGame(userchoice, compchoice);
//     });
// });

// function playGame(userchoice, compchoice) {

//     if(userchoice === "stone") {
//         you.innerText="👊"
//     }else if(userchoice === "paper") {
//         you.innerText="✋"

//     }else(userchoice === "scissors") {    
//         you.innerText="✌️"
//     }

//     if(compchoice === "stone") {
//         computer.innerText="👊"
//     }else if(compchoice === "paper") {
//         computer.innerText="✋"

//     }if(compchoice === "scissors") {    
//         computer.innerText="✌️"
//     }
//     // Clear previous results
//     result.classList.remove("win", "lose", "draw");

//     if (userchoice === compchoice) {
//         result.innerText = "It's a tie";
//         result.classList.add("draw");
//     } else if (userchoice === "stone" && compchoice === "scissors" || 
//                userchoice === "paper" && compchoice === "stone" || 
//                userchoice === "scissors" && compchoice === "paper") {
//         result.innerText = "You win";
//         result.classList.add("win");
//     } else {
//         result.innerText = "You lose";
//         result.classList.add("lose");
//     }
// }

let choices = document.querySelectorAll(".choice");
let you = document.querySelector(".you-div");
let computer = document.querySelector(".computer-div");
let result = document.querySelector(".result");

function startShake(){
    you.style="animation: shake 1s linear 3;"
    computer.style="animation: shake 01s linear 3;"
    
}

function stopShake(){
    you.style="animation: none;"
    computer.style="animation: none;"
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // let userchoice = choice.getAttribute("id");
        // let options = ["stone", "paper", "scissors"];
        // let compindex = Math.floor(Math.random() * 3);
        // let compchoice = options[compindex];
        startShake()
        let userChoice=choice.getAttribute("id")    
        setTimeout(() => {
            stopShake()
            let userchoice = choice.getAttribute("id");
            let options = ["stone", "paper", "scissors"];
            let compindex = Math.floor(Math.random() * 3);
            let compchoice = options[compindex];
            playGame(userchoice, compchoice);
        },300)
        playGame(userchoice, compchoice);
    });
});

function playGame(userchoice, compchoice) {
    // Set the user hand
    if (userchoice === "stone") {
        you.innerText = "👊";
    } else if (userchoice === "paper") {
        you.innerText = "✋";
    } else if (userchoice === "scissors") {
        you.innerText = "✌️";
    }

    // Set the computer hand
    if (compchoice === "stone") {
        computer.innerText = "👊";
    } else if (compchoice === "paper") {
        computer.innerText = "✋";
    } else if (compchoice === "scissors") {
        computer.innerText = "✌️";
    }

    // Clear previous results
    result.classList.remove("win", "lose", "draw");

    // Determine the winner
    if (userchoice === compchoice) {
        result.innerText = "It's a tie";
        result.classList.add("draw");
    } else if (userchoice === "stone" && compchoice === "scissors" || 
               userchoice === "paper" && compchoice === "stone" || 
               userchoice === "scissors" && compchoice === "paper") {
        result.innerText = "You win";
        result.classList.add("win");
    } else {
        result.innerText = "You lose";
        result.classList.add("lose");
    }
}

