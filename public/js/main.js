// let inpu = document.querySelector('input')
// console.log(inpu);

// inpu.addEventListener('focus', () => {
//     inpu.style.backgroundColor = 'blue'
// })

/// 2 ///

let inpu2 = document.querySelectorAll('input')[1]
console.log(inpu2);

inpu2.addEventListener('focus', () => {
    inpu2.style.backgroundColor = 'blue'
})
inpu2.addEventListener('focusout', () => {
    inpu2.style.backgroundColor = ''
})

//// 3 ////

let para1 = document.querySelector('.premierParagraphe')
console.log(para1);
let para2 = document.getElementsByClassName('secondParagraphe')
console.log(para2);
let para3 = document.querySelector('.dernierParagraphe')
console.log(para3);
let btn = document.getElementsByClassName('buttonExo')[0]
console.log(btn);

btn.addEventListener('click', () => {
    para1.innerText = "Mmm les tartines c'est délicieux"
    para3.innerText = "Mmm les tartines c'est délicieux"

})

// correction //

// Exo 1
let myInputExo1 = document.getElementsByTagName("input")[0];
myInputExo1.addEventListener("focus", () => {
  myInputExo1.style = "background-color: blue";
});

// Exo 2
let myInputExo2 = document.getElementsByTagName("input")[1];
myInputExo2.addEventListener("focus", () => {
  myInputExo2.style = "background-color:blue";
});
myInputExo2.addEventListener("focusout", () => {
  myInputExo2.style = "";
});

// Exo 3
let recupP1 = document.getElementsByClassName("premierParagraphe")[0];
let recupP2 = document.getElementsByClassName("secondParagraphe")[0];
let recupP3 = document.getElementsByClassName("dernierParagraphe")[0];
let recupButton = document.getElementsByClassName("buttonExo")[0];

recupButton.addEventListener("click", () => {
  recupP1.textContent = recupP2.textContent;
  recupP3.textContent = recupP2.textContent;
});

// Exo 4

let myInputExo4 = document.querySelectorAll("input")[2];
let recupButtonExo4 = document.getElementsByClassName("buttonExo")[1];
let nameExo4 = document.querySelector("#exo4");
recupButtonExo4.addEventListener("click", () => {
  nameExo4.innerText = myInputExo4.value;
});

// Exo 5
let btn3 = document.getElementsByClassName("btn")[2];
let img1 = document.getElementsByClassName("img-responsive")[0];
let exo5P = document.getElementsByTagName("p")[4].innerText;

btn3.addEventListener("click", () => {
  // Récupère l'index du point dans la chaine de caractère "Chemin : ./src/image/tartine.png" et stock cet index dans la variable indexPoint
  let indexPoint = exo5P.indexOf(".");
  // On ce sert de la methode slice sur la chaine de caractère "Chemin : ./src/image/tartine.png" pour ne garder que le texte a partir de l'index contenu dans la variable indexPoint
  let cheminExo5P = exo5P.slice(indexPoint);

  img1.src = cheminExo5P;
});

//6
let imgSecond = document.querySelectorAll("img")[1];
let imgthird = document.querySelectorAll("img")[2];
let stock = "";

let stockimg = () => {
  stock = imgSecond.attributes[1].value;
};
let remplaceimg = () => {
  imgthird.attributes[1].value = stock;
};

imgSecond.addEventListener("click", stockimg);
imgthird.addEventListener("click", remplaceimg);

// Exo 7
let exo7Button = document.querySelectorAll("button.btn")[3];
let exo7P1 = exo7Button.previousElementSibling;
let exo7P2 = exo7Button.nextElementSibling;
let exo7Temp = "";

let interChange = () => {
  exo7Temp = exo7P1.innerText;
  exo7P1.innerText = exo7P2.innerText;
  exo7P2.innerText = exo7Temp;
};

exo7Button.addEventListener("click", interChange);
