

//###################################################################################################################################################################################

let devantDeCarteFacileAll = document.querySelectorAll(".devantDeCarteFacile")

let tabRandomCarte = ["./public/img/img1.difficulterFacile.jpeg", "./public/img/img2.difficulterFacile.jpeg", "./public/img/img3.difficulterFacile.jpeg", "./public/img/img1.difficulterFacile.jpeg", "./public/img/img2.difficulterFacile.jpeg", "./public/img/img3.difficulterFacile.jpeg"]

tabRandomCarte.sort(() => Math.random() - 0.5);

for (let i = 0; i < devantDeCarteFacileAll.length; i++) {
    devantDeCarteFacileAll[i].src = tabRandomCarte[i];
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let dosDeCarteFacileAll = document.querySelectorAll(".dosDeCarteFacile")

let input1 = document.querySelector("input")

let btnAll = document.querySelectorAll("button")

let btnGO = btnAll[0]

// pour faire des ajouts a chaque fois des joueurs
let h2TableauDesScoresAll=document.querySelectorAll("h2")
let h2TableauDesScores1=h2TableauDesScoresAll[0]

// 


let tableauDesScores=document.querySelector(".tableauDesScores")
let difficuterDeJeu = document.querySelector(".difficuterDeJeu")


btnGO.addEventListener("click", function () {

    tableauDesScores.style.display="flex"
    difficuterDeJeu.style.display = "flex"

    let h3PseudoNew= document.createElement("h3")
    let vP = input1.value
    h3PseudoNew.innerHTML = vP;
    let texteH3PseudoNew= document.createTextNode("")
    h3PseudoNew.appendChild(texteH3PseudoNew)
    h2TableauDesScores1.appendChild(h3PseudoNew)
    h3PseudoNew.style.color="#d65915"
    h3PseudoNew.style.color="#d65915"
    h3PseudoNew.style.fontSize="35px"
    h3PseudoNew.style.margin="0"
    h3PseudoNew.style.padding="0"

    h3PseudoNew.style.textAlign="center"
})

let btnFacile = btnAll[1]
// console.log(btnFacile);
let btnNormal = btnAll[2]
// console.log(btnNormal);
let btnDifficile = btnAll[3]
// console.log(btnDifficile);


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let compteur = 0
let stop = false

let tabStockerSrc = []
let tabStockerVariable = []

let compteurRécup6=0


let h3ChronoNew

btnFacile.addEventListener("click", function () {


    demarrer()
    

    difficuterDeJeu.style.display = "none"

    
    dosDeCarteFacileAll.forEach(element => {
        element.style.display = "flex"
    });

})

dosDeCarteFacileAll.forEach(element => {

    element.addEventListener("click", function () {

        if (stop == false) {
            console.log(element);
            element.style.display = "none"
            console.log(element);
            console.log(element);
            element.nextElementSibling.style.display = "flex"

            
            let stockerSrc = element.nextElementSibling.src
            tabStockerSrc.push(stockerSrc)
            // console.log(tabStockerSrc[0]);
            // console.log(tabStockerSrc[1]);
            console.log(`------`);

            let stockerVariable = element.nextElementSibling
            tabStockerVariable.push(stockerVariable)
            // console.log(tabStockerVariable[0]);
            // console.log(tabStockerVariable[1]);
            console.log(`------`);

            console.log(tabStockerVariable);
            console.log(tabStockerSrc);

            compteur++

        }


        if (compteur == 2) {
            stop = true

            if (tabStockerSrc[0] == tabStockerSrc[1]) {
                tabStockerVariable.forEach(element => {
                    element.style.border = "#ffe433 20px solid"
                });
                compteurRécup6+=2
                if(compteurRécup6==dosDeCarteFacileAll.length){
                    setTimeout(()=>{
                        dosDeCarteFacileAll.forEach(element => {
                            element.style.display = "flex"
                        });
                        devantDeCarteFacileAll.forEach(element => {
                            element.style.display = "none"
                            element.style.border = ""
                        });
                        compteurRécup6 = 0
                        tabStockerSrc = []
                        tabStockerVariable = []
                        stop = false
                        compteur = 0

                        arreter()
                        console.log(h3ChronoNew);


                        // ! de base ici il est en flex
                        // difficuterDeJeu.style.display = "flex"
                        // ! j'ai mis en none puis en dessous 
                        dosDeCarteFacileAll.forEach(element => {
                            element.style.display="none"
                        });
                        difficuterDeJeu.style.display = "none"
                        // return 
                        
                        // reset()
                    },1000) 
                }

            } else {
                tabStockerVariable.forEach(element => {
                    element.style.border = "#a70b0b 20px solid"
                    console.log(element);
                    console.log(element.previousElementSibling);
                    setTimeout(() => {
                        element.previousElementSibling.style.display = 'flex'
                        element.style.display = 'none'
                    }, 1000);
                });

            }
            tabStockerSrc = []
            tabStockerVariable = []
            compteur = 0
            setTimeout(()=>{
                stop = false
            },1000)
            
        }

    })


});



// Chronometre
// let chrono = document.getElementById("chrono");
// let resetBtn = document.getElementById("reset");
// let stopBtn = document.getElementById("stop");
// let startBtn = document.getElementById("start");


let heures = 0;
let minutes = 0;
let secondes = 0;

let timeout;

let estArrete = true;

const demarrer = () => {
    if (estArrete) {
        estArrete = false;
        defilerTemps();
    }
};

const arreter = () => {
    if (!estArrete) {
        estArrete = true;
        clearTimeout(timeout);
    }
};

const defilerTemps = () => {
    if (estArrete) return;

    secondes = parseInt(secondes);
    minutes = parseInt(minutes);
    heures = parseInt(heures);

    secondes++;

    if (secondes == 60) {
        minutes++;
        secondes = 0;
    }

    if (minutes == 60) {
        heures++;
        minutes = 0;
    }

    //   affichage
    if (secondes < 10) {
        secondes = "0" + secondes;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (heures < 10) {
        heures = "0" + heures;
    }

    chrono.textContent = `${heures}:${minutes}:${secondes}`;

    timeout = setTimeout(defilerTemps, 1000);
};

const reset = () => {
    chrono.textContent = "00:00:00";
    estArrete = true;
    heures = 0;
    minutes = 0;
    secondes = 0;
    clearTimeout(timeout);
};

// startBtn.addEventListener("click", demarrer);
// stopBtn.addEventListener("click", arreter);
// resetBtn.addEventListener("click", reset);





