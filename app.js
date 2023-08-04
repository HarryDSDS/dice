// selectors czy chuj
const diceShowcase = document.querySelector(".dice-showcase");
const diceGrid = document.querySelector(".dice-grid");

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
];

let diceChosen = [];
let diceChosenID = [];
// functions

function randomDiceNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function rollAll() {
  // sortowanie, za kazdym odpaleniem rollAll shufflujemy tablicę
  diceArray.sort(() => 0.5 - Math.random());

  // oramy w pizdu tego diceGrida, czyli wszystkie kości, przez ułamek sekundy jest pusto na ekranie
  while (diceGrid.firstChild) {
    diceGrid.removeChild(diceGrid.lastChild);
  }

  // zamiast 6 na sztywno, pętla idzie do diceArray.length. Raz, ze wiadomo po czym iterujemy, dwa, jak zmieni się (akurat nie w tym przypadku)
  // ilość elementów w tablicy, to pętla to będzie respektować
  for (let i = 0; i < diceArray.length; i++) {
    // tworzymy nowy element HTML img, jeszcze go nie rysujemy, on jest tylko w pamięci
    const dice = document.createElement("img");

    // z posortowanej listy bierzemy sobie name czyli 1,2,3 whatever
    const diceName = diceArray[i].name;

    // uzywamy tego name, zeby dokleic do .png (to w pizdu mozna uprościć, next time)
    dice.setAttribute("src", `img/${diceName}.png`);
    dice.setAttribute("id", `${diceName}`);

    // doklejamy, dzieki temu jest widoczne w UI, a jako, ze pętla idzie po kadej kości, to będzie 6 kości
    diceGrid.appendChild(dice);
    console.log(diceGrid);

    // stylujemy to gówno
    dice.style.marginRight = "4px";
    dice.style.borderRadius = "10px";
    diceGrid.style.height = "120px";
    diceGrid.style.display = "block";
  }
}
diceGrid.addEventListener("click", () => {
  console.log(diceGrid[2]);
});

const diceButtonRollAll = btnRollAll.addEventListener("click", () => {
  rollAll();
});
