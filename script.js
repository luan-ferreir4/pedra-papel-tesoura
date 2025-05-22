let playerBttns = document.querySelectorAll("#bttns-list > button");
playerBttns = [...playerBttns];

const pcChoice = document.getElementById("pcChoice");
let pcPlay = Math.floor(Math.random()*3);

const resultContainer = document.getElementById("result");

let containerReset = document.getElementById("containerReset");

const resetBtn = document.getElementById('resetBtn');

const getBttns = () => {
    for(let cont = 0; cont < playerBttns.length; cont++){
        let bttn = playerBttns[cont];
       
        bttn.dataset.buttonId = cont;
        
        bttn.addEventListener('click', getMatch);
    }
}

const pcChoiceToString = (pc) => {
    let pcOption = '';

    if(pc === 0){
        pcOption = 'Pedra'
    }
    if(pc === 1){
        pcOption = 'Papel'
    }
    if(pc === 2){
        pcOption = 'Tesoura'
    }
    return pcOption;
}

const compareChoices = (player , pc) => {
    let gameMsg = '';
    let pcChoiceClass = '';

    if(player === pc){
        gameMsg = "Empate!";

        pcChoiceClass = ("drawBackground"); 
    }

    if(player === 0 && pc === 2){
        gameMsg = "Você Venceu!";

        pcChoiceClass = ("winBackground");        
    }    
    if(player === 0 && pc === 1){
        gameMsg = "Você Perdeu!";

        pcChoiceClass = ("loseBackground"); 
    } 

    if(player === 1 && pc === 0){
        gameMsg = "Você Venceu!";  

        pcChoiceClass = "winBackground";      
    }    
    if(player === 1 && pc === 2){
        gameMsg = "Você Perdeu!";

        pcChoiceClass = "loseBackground"; 
    } 

    if(player === 2 && pc === 1){
        gameMsg = "Você Venceu!";  

        pcChoiceClass = "winBackground";      
    }    
    if(player === 2 && pc === 0){
        gameMsg = "Você Perdeu!";

        pcChoiceClass = "loseBackground"; 
    } 
    pcChoice.classList.add(pcChoiceClass);
    
    return gameMsg;
}


const getMatch = (event) => {
            let button = event.target;
            let buttonData = event.target.getAttribute('data-button-id');
        
            buttonData = Number(buttonData);

            if(resultContainer.innerHTML === ''){
                button.classList.add('bttnsStylefocus')

                setTimeout(() => {
                    pcChoice.innerHTML = pcChoiceToString(pcPlay);

                    resultContainer.innerHTML = compareChoices(buttonData, pcPlay);
                },500)

                appearReset();
            }   
    
}

const appearReset = () => {
    let appear = setTimeout(()=> {
        containerReset.classList.replace("hidden", "resetContainer");
    }, 1200); 

    return appear;
}

const removeActiveButton = () => {
   return playerBttns.map(element => {
        let activeClass = element.classList[2];

        if(activeClass !== undefined){
            element.classList.remove(activeClass);
        }
    });
}

const removeBackgroundColor = () => {
    let backGroundClass = pcChoice.classList[1];
    if(backGroundClass !== undefined){
       return pcChoice.classList.remove(backGroundClass)
    }
}

const resetGame = () => {
    pcPlay = Math.floor(Math.random()*3);

    pcChoice.innerHTML = '';
    resultContainer.innerHTML = '';

    removeBackgroundColor();

    removeActiveButton();

    containerReset.classList.replace("resetContainer","hidden");
}

resetBtn.addEventListener('click', resetGame);
getBttns();