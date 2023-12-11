


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

let btnFacile = btnAll[0]
console.log(btnFacile);

// // temporairement pas utiliser
// let btnNormal=btnAll[1]
// console.log(btnNormal);
// let btnDifficile=btnAll[2]
// console.log(btnDifficile);
// // 

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let compteur=0
let stop=false

let tabStockerSrc=[]
let tabStockerVariable=[]
let tabStockerDos=[]

btnFacile.addEventListener("click", function () {

    dosDeCarteFacileAll.forEach(element => {
        element.style.display="flex"
    });

    dosDeCarteFacileAll.forEach(element => {
        element.addEventListener("click", function () {

            if(stop==false){
                element.style.display="none"
                element.nextElementSibling.style.display="flex"



                let stockerSrc= element.nextElementSibling.src
                tabStockerSrc.push(stockerSrc)
                console.log(tabStockerSrc[0]);
                console.log(tabStockerSrc[1]);
                console.log(`------`);

                let stockerVariable=element.nextElementSibling
                tabStockerVariable.push(stockerVariable)
                console.log(tabStockerVariable[0]);
                console.log(tabStockerVariable[1]);
                console.log(`------`);



                let stockerDos=element
                tabStockerDos.push(stockerDos)
                console.log(tabStockerDos[0]);
                console.log(tabStockerDos[1]);
                console.log(`------`);


    
                compteur++
            }

            if(compteur==2){
                stop=true



                // base des bases ici 
                // if(tabStockerSrc[0]==tabStockerSrc[1]){
                //     // element.nextElementSibling.style.border="green 2px solid"
                //     tabStockerVariable[0].style.border="green 2px solid"
                //     tabStockerVariable[1].style.border="green 2px solid"
                // } else {

                //     tabStockerVariable[0].style.border="red 2px solid"
                //     tabStockerVariable[1].style.border="red 2px solid"
                // 
                if(tabStockerSrc[0]==tabStockerSrc[1]){
                    // element.nextElementSibling.style.border="green 2px solid"
                    tabStockerVariable[0].style.border="green 2px solid"
                    tabStockerVariable[1].style.border="green 2px solid"
                } else {
                    tabStockerVariable[0].style.border="red 2px solid"
                    tabStockerVariable[1].style.border="red 2px solid"

                    // setTimeout(() => {
                    //     tabStockerVariable[0].src="./public/img/dosDeCarte.jpeg"
                    //     tabStockerVariable[1].src="./public/img/dosDeCarte.jpeg"
                    // }, "1000");
                    // if(tabStockerVariable[0].style.border=="red 2px solid" && tabStockerVariable[1].style.border=="red 2px solid"){
                    //     tabStockerVariable[0].src="./public/img/dosDeCarte.jpeg"
                    //     tabStockerVariable[1].src="./public/img/dosDeCarte.jpeg"
                    // }

                    


                    // console.log(`A partir de en dessous`);
                    // tabStockerVariable[0].style.display="none"
                    // console.log(tabStockerVariable[0]);
                    // tabStockerVariable[1].style.display="none"
                    // console.log(tabStockerVariable[1]);
                    // tabStockerDos[0].style.display="flex"
                    // console.log(tabStockerDos[0]);
                    // tabStockerDos[1].style.display="flex"
                    // console.log(tabStockerDos[1]);

                    // console.log(`A partir de en dessous`);
                    // tabStockerVariable[0].style.display="none"
                    // console.log(tabStockerVariable[0]);
                    // tabStockerVariable[1].style.display="none"
                    // console.log(tabStockerVariable[1]);
                    // tabStockerDos[0].style.display="flex"
                    // console.log(tabStockerDos[0]);
                    // tabStockerDos[1].style.display="flex"
                    // console.log(tabStockerDos[1]);

                    // console.log(`A partir de en dessous`);
                    // tabStockerVariable[0].style.display="none"
                    // console.log(tabStockerVariable[0]);
                    // tabStockerVariable[1].style.display="none"
                    // console.log(tabStockerVariable[1]);
                    // tabStockerDos[0].style.display="flex"
                    // console.log(tabStockerDos[0]);
                    // tabStockerDos[1].style.display="flex"
                    // console.log(tabStockerDos[1]);


                    // // teste 1
                    // tabStockerVariable[0].setAttribute("class", "none")
                    // tabStockerVariable[1].setAttribute("class", "none")
                    // console.log(tabStockerVariable[0]);
                    // console.log(tabStockerVariable[1]);

                    // tabStockerDos[0].setAttribute("class", "flex")
                    // tabStockerDos[1].setAttribute("class", "flex")
                    // console.log(tabStockerDos[0]);
                    // console.log(tabStockerDos[1]);
                    // // fin teste 1



                    // if(tabStockerVariable[0].style.border=="red 2px solid" && tabStockerVariable[1].style.border=="red 2px solid"){
                    //     tabStockerVariable[0].style.display="none"
                    //     tabStockerVariable[1].style.display="none"
    
                    //     tabStockerDos[0].style.display="flex"
                    //     tabStockerDos[1].style.display="flex"
                    // }
                } 
                tabStockerSrc=[]
                tabStockerVariable=[]
                tabStockerDos=[]
                stop=false
                compteur = 0



            }

    

        })

    });

})


                    // setTimeout(() => {
                    //     alert(`je fct ok ?`)
                    // }, "1000");