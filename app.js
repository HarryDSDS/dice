// selectors czy chuj
const diceGrid = document.querySelector(".dice-grid");
const diceGridSelected = document.querySelector(".dice-grid-selected");
const oneDiceDiv = document.querySelector(".one-dice");

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
let rollCount = 0;
let oneDice = 0;
let twoDice = 0;
let threeDice = 0;
let fourDice = 0;
let fiveDice = 0;
let sixDice = 0;

// functions

function rollAll() {
  diceGridSelected.innerHTML = "";
  diceChosen = [];
  diceArray.sort(() => 0.5 - Math.random());
  while (diceGrid.firstChild) {
    diceGrid.removeChild(diceGrid.lastChild);
  }
  for (let i = 0; i < 5; i++) {
    const dice = document.createElement("img");
    const diceName = diceArray[i].name;
    dice.setAttribute("src", `img/${diceName}.png`);
    dice.setAttribute("name", `${diceName}`);
    dice.setAttribute("class", `${diceName}`);
    dice.setAttribute("id", `${i}`);
    diceGrid.appendChild(dice);
    dice.style.marginRight = "4px";
    dice.style.borderRadius = "10px";
    diceGrid.style.height = "120px";
    diceGrid.style.display = "block";
    if (dice.name === "1") {
      oneDice++;
    }
    if (dice.name === "2") {
      twoDice++;
    }
    if (dice.name === "3") {
      threeDice++;
    }
    if (dice.name === "4") {
      fourDice++;
    }
    if (dice.name === "5") {
      fiveDice++;
    }
    if (dice.name === "6") {
      sixDice++;
    }
  }
}

function rollSelected() {
  diceGridSelected.innerHTML = "";
  btnRollSelected.addEventListener("click", () => {
    rollCount++;
    rollCountCount();
    while (diceGridSelected.firstChild) {
      diceGridSelected.removeChild(diceGridSelected.lastChild);
    }
    for (let i = 0; i < diceChosen.length; i++) {
      diceArray.sort(() => 0.5 - Math.random());
      const dice = document.createElement("img");
      const diceName = diceArray[i].name;
      dice.setAttribute("src", `img/${diceName}.png`);
      dice.setAttribute("name", `${diceName}`);
      dice.setAttribute("index", `${i}`);
      diceGridSelected.appendChild(dice);
      dice.style.marginRight = "4px";
      dice.style.borderRadius = "10px";
      diceGridSelected.style.height = "120px";
      diceGridSelected.style.display = "block";
      console.log(dice);
      if (dice.name === "1") {
        oneDice++;
      }
      if (dice.name === "2") {
        twoDice++;
      }
      if (dice.name === "3") {
        threeDice++;
      }
      if (dice.name === "4") {
        fourDice++;
      }
      if (dice.name === "5") {
        fiveDice++;
      }
      if (dice.name === "6") {
        sixDice++;
      }
      console.log(oneDice);
    }
  });
}

function diceSelect() {
  diceGrid.addEventListener("click", (e) => {
    const clickedDice = e.target;

    btnRollSelected.addEventListener("click", () => {
      diceGrid.removeChild(clickedDice);
    });
    const nameDice = clickedDice.name;
    diceChosen.push(clickedDice);
    for (i = 0; i < diceChosen.length; i++) {
      clickedDice.setAttribute("src", `img/${nameDice}rev.png`);
    }
  });
}

function diceDeselect() {
  diceGridSelected.addEventListener("click", (e) => {
    const clickedDice = e.target;
    for (let i = 0; i < diceChosen.length; i++) {
      const dice = document.createElement("img");
      const diceName = clickedDice.name;
      dice.setAttribute("src", `img/${diceName}.png`);
      dice.setAttribute("name", `${diceName}`);
      dice.style.marginRight = "4px";
      dice.style.borderRadius = "10px";
      diceGridSelected.removeChild(clickedDice);
      diceGrid.appendChild(dice);
      oneDiceLogic();
      diceChosen.pop();
    }
  });
}

function rollCountCount() {
  if (rollCount === 4) {
    alert("next round");
    rollCount = 0;
  }
}

rollSelected();
diceSelect();
btnRollAll.addEventListener("click", () => {
  oneDice = 0;
  rollCount++;
  diceChosen = [];
  rollAll();
  diceDeselect();
  rollCountCount();
  oneDiceLogic();
});

//logika

// 1

function oneDiceLogic() {
  if (oneDice == 1) {
    oneDiceDiv.innerHTML = -2;
  } else if (oneDice == 2) {
    oneDiceDiv.innerHTML = -1;
  } else if (oneDice == 3) {
    oneDiceDiv.innerHTML = 0;
  } else if (oneDice == 4) {
    oneDiceDiv.innerHTML = 1;
  } else if (oneDice == 5) {
    oneDiceDiv.innerHTML = 2;
  }
}
