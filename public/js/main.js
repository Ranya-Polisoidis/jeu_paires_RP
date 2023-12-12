

//###################################################################################################################################################################################

let devantDeCarteFacileAll = document.querySelectorAll(".devantDeCarteFacile")

let tabRandomCarte = ["./public/img/img1.difficulterFacile.jpeg", "./public/img/img2.difficulterFacile.jpeg", "./public/img/img3.difficulterFacile.jpeg", "./public/img/img1.difficulterFacile.jpeg", "./public/img/img2.difficulterFacile.jpeg", "./public/img/img3.difficulterFacile.jpeg"]

tabRandomCarte.sort(() => Math.random() - 0.5);

for (let i = 0; i < devantDeCarteFacileAll.length; i++) {
    devantDeCarteFacileAll[i].src = tabRandomCarte[i];
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let dosDeCarteFacileAll = document.querySelectorAll(".dosDeCarteFacile")


let btnAll = document.querySelectorAll("button")

let btnGO = btnAll[0]

let input1 = document.querySelector("input")
// console.log(input1);
let h3_1 = document.querySelector("h3")
// console.log(h3_1);
let h1_2 = document.querySelectorAll("h1")[1]
// console.log(h1_2);

let difficuterDeJeu = document.querySelector(".difficuterDeJeu")

let divChrono=document.querySelector("#divChrono")

btnGO.addEventListener("click", function () {
    let vP = input1.value
    h3_1.innerHTML = vP;
    h3_1.style.color="rgb(170, 115, 48)"
    h3_1.style.fontSize="50px"

    h1_2.style.display = "flex"
    divChrono.style.display = "flex"
    difficuterDeJeu.style.display = "flex"
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


btnFacile.addEventListener("click", function () {

    difficuterDeJeu.style.display = "none"
    console.log("testtt");
    console.log(tabStockerVariable);
    console.log(tabStockerSrc);
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
                console.log("juste");
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
                        difficuterDeJeu.style.display = "flex"
                    },1000)
                }

            } else {
                tabStockerVariable.forEach(element => {
                    // element.style.display = 'flex'
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
            console.log("test");
            console.log(tabStockerSrc);
            console.log(tabStockerVariable);
            tabStockerVariable = []
            compteur = 0
            setTimeout(()=>{
                stop = false
            },1000)
            
        }

    })


});


// Chronometre
let chrono = document.getElementById("chrono");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
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

btnFacile.addEventListener("click", demarrer);







