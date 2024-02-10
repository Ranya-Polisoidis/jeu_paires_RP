
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

// pour faire des ajouts à chaque fois des joueurs
let h2TableauDesScoresAll = document.querySelectorAll("h2")
let h2TableauDesScores1 = h2TableauDesScoresAll[0]
let h2TableauDesScores2 = h2TableauDesScoresAll[1]
let h2TableauDesScores3 = h2TableauDesScoresAll[2]
// 


let tableauDesScores = document.querySelector(".tableauDesScores")
let difficuterDeJeu = document.querySelector(".difficuterDeJeu")
let btnRESTART = document.querySelector(".btnRESTART")


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


btnGO.addEventListener("click", function () {

    tableauDesScores.style.display = "flex"
    difficuterDeJeu.style.display = "flex"
    // input1.style.display="flex"
    // btnGO.style.display="block"
    input1.style.display="none"
    btnGO.style.display="none"

    let h3PseudoNew = document.createElement("h3")
    let vP = input1.value
    h3PseudoNew.innerHTML = vP;
    let texteH3PseudoNew = document.createTextNode("")
    h3PseudoNew.appendChild(texteH3PseudoNew)
    h2TableauDesScores1.appendChild(h3PseudoNew)
    h3PseudoNew.style.color = "#e7ab7d"
    h3PseudoNew.style.color = "#e7ab7d"
    h3PseudoNew.style.fontSize = "35px"
    h3PseudoNew.style.margin = "0"
    h3PseudoNew.style.padding = "0"
    h3PseudoNew.style.display = "flex"
    h3PseudoNew.style.alignItems = "center"
    h3PseudoNew.style.justifyContent = "center"

    h3PseudoNew.style.textAlign = "center"
})

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


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

let compteurRécup6 = 0


let monIntervalChrono


btnFacile.addEventListener("click", function () {

    // Fonction de mon chrono 
    let compteurSeconde = 0
    let compteurMinute = 0
    let compteurHeure = 0

    function fctChrono() {
        compteurSeconde++

        if (compteurSeconde == 60) {
            compteurSeconde = 0
            compteurMinute++
        }
        if (compteurMinute == 60) {
            compteurMinute = 0
            compteurHeure++
        }
        if (compteurHeure == 60) {
            compteurHeure = 0
        }

        // console.log(`${compteurHeure}:${compteurMinute}:${compteurSeconde}`);
        texteH3ChronoNew.textContent = `${compteurHeure}:${compteurMinute}:${compteurSeconde}` // textContent fct ! (innerHTML NON !)
        
    }



    let h3ChronoNew = document.createElement("h3")
    let texteH3ChronoNew = document.createTextNode("") // J'ai créé son emplacement dont j'ai intégré dans ma fonction (car si je le fais ici il aura 0: 0: 0 mais là bah ça va fonctionner)
    h3ChronoNew.appendChild(texteH3ChronoNew)
    h2TableauDesScores2.appendChild(h3ChronoNew)
    h3ChronoNew.style.color = "#e7ab7d"
    h3ChronoNew.style.color = "#e7ab7d"
    h3ChronoNew.style.fontSize = "35px"
    h3ChronoNew.style.margin = "0"
    h3ChronoNew.style.padding = "0"
    h3ChronoNew.style.display = "flex"
    h3ChronoNew.style.alignItems = "center"
    h3ChronoNew.style.justifyContent = "center"

    h3ChronoNew.style.textAlign = "center"


    // activation de mon chrono
    monIntervalChrono=setInterval(fctChrono, 1000);  // je lui ai donner un nom car ici je l'active mais je veux une fin donc je la clear là où je souhaite (+bas)



    let h3NiveauNew = document.createElement("h3")
    let texteH3NiveauNew = document.createTextNode("Facile")
    h3NiveauNew.appendChild(texteH3NiveauNew)
    h2TableauDesScores3.appendChild(h3NiveauNew)
    h3NiveauNew.style.color = "#e7ab7d"
    h3NiveauNew.style.color = "#e7ab7d"
    h3NiveauNew.style.fontSize = "35px"
    h3NiveauNew.style.margin = "0"
    h3NiveauNew.style.padding = "0"
    h3NiveauNew.style.display = "flex"
    h3NiveauNew.style.alignItems = "center"
    h3NiveauNew.style.justifyContent = "center"

    h3NiveauNew.style.textAlign = "center"


    difficuterDeJeu.style.display = "none"
    input1.style.display="none"
    btnGO.style.display="none"


    dosDeCarteFacileAll.forEach(element => {
        element.style.display = "flex"
    });

})


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


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
                compteurRécup6 += 2
                if (compteurRécup6 == dosDeCarteFacileAll.length) {
                    setTimeout(() => {
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

                        // arrêt de mon chrono
                        clearInterval(monIntervalChrono)


                        // ! de base ici il est en flex
                        // difficuterDeJeu.style.display = "flex"
                        // ! j'ai mis en none puis en dessous 
                        dosDeCarteFacileAll.forEach(element => {
                            element.style.display = "none"
                        });
                        difficuterDeJeu.style.display = "none"
                        input1.style.display="flex"
                        btnGO.style.display="block"

                    }, 1000)
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
            setTimeout(() => {
                stop = false
            }, 1000)

        }

    })


});

//###################################################################################################################################################################################
