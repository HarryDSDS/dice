// selectors czy chuj
const diceShowcase = document.querySelector(".dice-showcase");
const diceGrid = document.querySelector(".dice-grid");
const diceGridSelected = document.querySelector('.dice-grid-selected')

// buttons
const btnRollAll = document.querySelector(".btn-roll-all");
const btnRollSelected = document.querySelector(".btn-roll-selected");

// arrays
const diceArray = [
  {
    name: "1",
    img: "img/1.png",
  },
  {
    name: "2",
    img: "img/2.png",
  },
  {
    name: "3",
    img: "img/3.png",
  },
  {
    name: "4",
    img: "img/4.png",
  },
  {
    name: "5",
    img: "img/5.png",
  },
  {
    name: "6",
    img: "img/6.png",
  },
  {
    name: "1",
    img: "img/1.png",
  },
  {
    name: "2",
    img: "img/2.png",
  },
  {
    name: "3",
    img: "img/3.png",
  },
  {
    name: "4",
    img: "img/4.png",
  },
  {
    name: "5",
    img: "img/5.png",
  },
  {
    name: "6",
    img: "img/6.png",
  },
  {
    name: "1",
    img: "img/1.png",
  },
  {
    name: "2",
    img: "img/2.png",
  },
  {
    name: "3",
    img: "img/3.png",
  },
  {
    name: "4",
    img: "img/4.png",
  },
  {
    name: "5",
    img: "img/5.png",
  },
  {
    name: "6",
    img: "img/6.png",
  },
  {
    name: "1",
    img: "img/1.png",
  },
  {
    name: "2",
    img: "img/2.png",
  },
  {
    name: "3",
    img: "img/3.png",
  },
  {
    name: "4",
    img: "img/4.png",
  },
  {
    name: "5",
    img: "img/5.png",
  },
  {
    name: "6",
    img: "img/6.png",
  },
  {
    name: "1",
    img: "img/1.png",
  },
  {
    name: "2",
    img: "img/2.png",
  },
  {
    name: "3",
    img: "img/3.png",
  },
  {
    name: "4",
    img: "img/4.png",
  },
  {
    name: "5",
    img: "img/5.png",
  },
  {
    name: "6",
    img: "img/6.png",
  },
];

let diceChosen = [];
let diceChosenID = [];

// functions

function randomDiceNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function rollAll() {
  diceArray.sort(() => 0.5 - Math.random());
  while (diceGrid.firstChild) {
    diceGrid.removeChild(diceGrid.lastChild);
  }

  for (let i = 0; i < 5; i++) {
    const dice = document.createElement("img");
    const diceName = diceArray[i].name;
    dice.setAttribute("src", `img/${diceName}.png`);
    dice.setAttribute("id", i);
    diceGrid.appendChild(dice);
    console.log(diceGrid);
    dice.style.marginRight = "4px";
    dice.style.borderRadius = "10px";
    diceGrid.style.height = "120px";
    diceGrid.style.display = "block";
  }
}

function diceSelect(){
diceGrid.addEventListener("click", (e) => {
  const clickedDice = e.target
  diceChosen.push(clickedDice)
  console.log(diceChosen)
  // console.log(diceChosen)
//   for (i = 0; i < diceChosen.length; i++){

// }
}
)}


const diceButtonRollAll = btnRollAll.addEventListener("click", () => {
  console.log(diceGrid.innerHTML)
  rollAll();
  diceSelect()
});
