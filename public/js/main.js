


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


