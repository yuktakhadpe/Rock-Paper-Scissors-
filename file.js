let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choices img");

const msg = document.querySelector(".status p");

let userpoint = document.querySelector(".score #user-score");

let comppoint = document.querySelector(".score #comp-score")


const gencompchoice = () => {
    const options = ["rock","paper","scissors"]
    const compchoice = Math.floor(Math.random() * 3);
    return options[compchoice];
}

const play = (userchoice) => {
    console.log("userchoice = ",userchoice);
    const compc = gencompchoice();
    console.log("comp choice= ",compc);
    

    if(compc === userchoice) 
    {
        console.log("It was a draw!");
        msg.innerText = "It was a draw !"
    }
    else
    {
        let userwin = true;
        if(userchoice == "rock")
            {
                //paper,scissors
                userwin = compc == "paper" ? false : true; 
                console.log("",userwin);
                if (userwin)
                    {
                        console.log("you win");
                        msg.innerText = "You win !";
                        userscore++;
                        userpoint.innerText = userscore;
                    }
                else
                    {
                        console.log("computer wins");
                        msg.innerText = "computer wins !";
                        compscore++;
                        comppoint.innerHTML = compscore;
                    }
            }
        else if(userchoice == "paper")
            {
                //rock,scissors
                userwin = compc == "scissors" ? false : true;
                console.log("",userwin);
                if (userwin)
                    {
                        console.log("you win ");
                        msg.innerText = "You win !";
                        userscore++;
                        userpoint.innerText = userscore;
                    }
                else
                    {
                        console.log("computer wins");
                        msg.innerText = "computer wins !";
                        compscore++;
                        comppoint.innerHTML = compscore;
                    }
            }
        else
            {
                //rock,paper
                userwin = compc == "rock" ? false : true;
                console.log("",userwin);
                if (userwin)
                    {
                        console.log("you win");
                        msg.innerText = "You win !";
                        userscore++;
                        userpoint.innerText = userscore;
                    }
                else
                    {
                        console.log("computer wins");
                        msg.innerText = "computer wins !";
                        compscore++;
                        comppoint.innerText = compscore;
                    }
            }
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        play(userchoice);
    });
});




