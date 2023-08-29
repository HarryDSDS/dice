// selectors czy chuj
const diceGrid = document.querySelector(".dice-grid");
const diceGridSelected = document.querySelector(".dice-grid-selected");
const schoolOne = document.querySelector(".school-one");
const schoolTwo = document.querySelector(".school-two");
const schoolThree = document.querySelector(".school-three");
const schoolFour = document.querySelector(".school-four");
const schoolFive = document.querySelector(".school-five");
const schoolSix = document.querySelector(".school-six");

// buttons
const btnRollAll = document.querySelector(".btn-roll-all");
const btnRollSelected = document.querySelector(".btn-roll-selected");
const btnNextRound = document.querySelector(".next-round");
const btnSchoolConfirmOne = document.querySelector(".confirm-one");
const btnSchoolConfirmTwo = document.querySelector(".confirm-two");
const btnSchoolConfirmThree = document.querySelector(".confirm-three");
const btnSchoolConfirmFour = document.querySelector(".confirm-four");
const btnSchoolConfirmFive = document.querySelector(".confirm-five");
const btnSchoolConfirmSix = document.querySelector(".confirm-six");

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
let rollCount = 0;
let rollSelectedCount = 0;
let oneDie = 0;
let oneDieRoll = 0;
let oneDieSave = 0;
let twoDice = 0;
let twoDieSave = 0;
let twoDiceRoll = 0;
let threeDice = 0;
let threeDieSave = 0;
let threeDiceRoll = 0;
let fourDice = 0;
let fourDieSave = 0;
let fourDiceRoll = 0;
let fiveDice = 0;
let fiveDieSave = 0;
let fiveDiceRoll = 0;
let sixDice = 0;
let sixDieSave = 0;
let sixDiceRoll = 0;
let oneLogicEnable = true;
let twoLogicEnable = true;
let threeLogicEnable = true;
let fourLogicEnable = true;
let fiveLogicEnable = true;
let sixLogicEnable = true;

// functions
function diceCheck() {
  let diceGridChildren = diceGrid.children;
  let diceGridSelectedChildren = diceGridSelected.children;
  // for oneDie
  for (i = 0; i < diceGridChildren.length; i++) {
    if (rollSelectedCount == 0) {
      if (diceGridChildren[i].name == "1") {
        oneDie++;
      }
    }
  }
  for (i = 0; i < diceGridSelectedChildren.length; i++) {
    if (rollSelectedCount == 1) {
      if (diceGridSelectedChildren[i].name == "1") {
        oneDieRoll++;
        oneDie++;
        oneDieSave = oneDie;
        oneDieLogic();
      }
    } else if (rollSelectedCount == 2) {
      if (diceGridSelectedChildren[i].name == "1") {
        oneDie++;
        oneDieLogic();
      }
    }
  }
  if (rollSelectedCount == 2) {
    oneDie = oneDie - oneDieRoll;
    oneDieLogic();
  }
  // end of diceCheck for oneDie
  // diceCheck for twoDice
  for (i = 0; i < diceGridChildren.length; i++) {
    if (rollSelectedCount == 0) {
      if (diceGridChildren[i].name == "2") {
        twoDice++;
      }
    }
  }
  for (i = 0; i < diceGridSelectedChildren.length; i++) {
    if (rollSelectedCount == 1) {
      if (diceGridSelectedChildren[i].name == "2") {
        twoDiceRoll++;
        twoDice++;
        twoDiceSave = twoDice;
        twoDiceLogic();
      }
    } else if (rollSelectedCount == 2) {
      if (diceGridSelectedChildren[i].name == "2") {
        twoDice++;
        twoDiceLogic();
      }
    }
  }
  if (rollSelectedCount == 2) {
    twoDice = twoDice - twoDiceRoll;
    twoDiceLogic();
  }
  // end of diceCheck for twoDice
  // diceCheck for threeDice
  for (i = 0; i < diceGridChildren.length; i++) {
    if (rollSelectedCount == 0) {
      if (diceGridChildren[i].name == "3") {
        threeDice++;
      }
    }
  }
  for (i = 0; i < diceGridSelectedChildren.length; i++) {
    if (rollSelectedCount == 1) {
      if (diceGridSelectedChildren[i].name == "3") {
        threeDiceRoll++;
        threeDice++;
        threeDiceSave = threeDice;
        threeDiceLogic();
      }
    } else if (rollSelectedCount == 2) {
      if (diceGridSelectedChildren[i].name == "3") {
        threeDice++;
        threeDiceLogic();
      }
    }
  }
  if (rollSelectedCount == 2) {
    threeDice = threeDice - threeDiceRoll;
    threeDiceLogic();
  }
  //end of diceCheck for threeDice
  // checkDice for fourDice
  for (i = 0; i < diceGridChildren.length; i++) {
    if (rollSelectedCount == 0) {
      if (diceGridChildren[i].name == "4") {
        fourDice++;
      }
    }
  }
  for (i = 0; i < diceGridSelectedChildren.length; i++) {
    if (rollSelectedCount == 1) {
      if (diceGridSelectedChildren[i].name == "4") {
        fourDiceRoll++;
        fourDice++;
        fourDiceSave = fourDice;
        fourDiceLogic();
      }
    } else if (rollSelectedCount == 2) {
      if (diceGridSelectedChildren[i].name == "4") {
        fourDice++;
        fourDiceLogic();
      }
    }
  }
  if (rollSelectedCount == 2) {
    fourDice = fourDice - fourDiceRoll;
    fourDiceLogic();
  }
  // end of diceCheck for fourDice
  // diceCheck for fiveDice
  for (i = 0; i < diceGridChildren.length; i++) {
    if (rollSelectedCount == 0) {
      if (diceGridChildren[i].name == "5") {
        fiveDice++;
      }
    }
  }
  for (i = 0; i < diceGridSelectedChildren.length; i++) {
    if (rollSelectedCount == 1) {
      if (diceGridSelectedChildren[i].name == "5") {
        fiveDiceRoll++;
        fiveDice++;
        fiveDiceSave = fiveDice;
        fiveDiceLogic();
      }
    } else if (rollSelectedCount == 2) {
      if (diceGridSelectedChildren[i].name == "5") {
        fiveDice++;
        fiveDiceLogic();
      }
    }
  }
  if (rollSelectedCount == 2) {
    fiveDice = fiveDice - fiveDiceRoll;
    fiveDiceLogic();
  }
  // end of diceCheck for fiveDice
  // diceCheck for sixDice
  for (i = 0; i < diceGridChildren.length; i++) {
    if (rollSelectedCount == 0) {
      if (diceGridChildren[i].name == "6") {
        sixDice++;
      }
    }
  }
  for (i = 0; i < diceGridSelectedChildren.length; i++) {
    if (rollSelectedCount == 1) {
      if (diceGridSelectedChildren[i].name == "6") {
        sixDiceRoll++;
        sixDice++;
        sixDiceSave = sixDice;
        sixDiceLogic();
      }
    } else if (rollSelectedCount == 2) {
      if (diceGridSelectedChildren[i].name == "6") {
        sixDice++;
        sixDiceLogic();
      }
    }
  }
  if (rollSelectedCount == 2) {
    sixDice = sixDice - sixDiceRoll;
    sixDiceLogic();
  }
  // end of diceCheck for sixDice
}

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
  }
  diceCheck();
}

function rollSelected() {
  diceGridSelected.innerHTML = "";
  btnRollSelected.addEventListener("click", () => {
    rollCount++;
    rollCountCount();
    rollSelectedCount++;
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
    // for oneDie
    if (rollSelectedCount == 0 || rollSelectedCount == 1) {
      if (nameDice == "1") {
        oneDie--;
        oneDieLogic();
      }
    }
    if (rollSelectedCount == 2) {
      if (nameDice == "1") {
        oneDieRoll--;
        oneDieLogic();
      }
    }
    // end for oneDie
    // for twoDice
    if (rollSelectedCount == 0 || rollSelectedCount == 1) {
      if (nameDice == "2") {
        twoDice--;
        twoDiceLogic();
      }
    }
    if (rollSelectedCount == 2) {
      if (nameDice == "2") {
        twoDiceRoll--;
        twoDiceLogic();
      }
    }
    // end for twoDice
    // for threeDice
    if (rollSelectedCount == 0 || rollSelectedCount == 1) {
      if (nameDice == "3") {
        threeDice--;
        threeDiceLogic();
      }
    }
    if (rollSelectedCount == 2) {
      if (nameDice == "3") {
        threeDiceRoll--;
        threeDiceLogic();
      }
    }
    // end for threeDice
    // for fourDIce
    if (rollSelectedCount == 0 || rollSelectedCount == 1) {
      if (nameDice == "4") {
        fourDice--;
        fourDiceLogic();
      }
    }
    if (rollSelectedCount == 2) {
      if (nameDice == "4") {
        fourDiceRoll--;
        fourDiceLogic();
      }
    }
    // end for fourDice
    // for fiveDice
    if (rollSelectedCount == 0 || rollSelectedCount == 1) {
      if (nameDice == "5") {
        fiveDice--;
        fiveDiceLogic();
      }
    }
    if (rollSelectedCount == 2) {
      if (nameDice == "5") {
        fiveDiceRoll--;
        fiveDiceLogic();
      }
    }
    // end for fiveDice
    // for sixDice
    if (rollSelectedCount == 0 || rollSelectedCount == 1) {
      if (nameDice == "6") {
        sixDice--;
        sixDiceLogic();
      }
    }
    if (rollSelectedCount == 2) {
      if (nameDice == "6") {
        sixDiceRoll--;
        sixDiceLogic();
      }
    }
    // end for sixDice
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
      dice.setAttribute("class", `${diceName}`);
      dice.setAttribute("id", `${i}`);
      dice.style.marginRight = "4px";
      dice.style.borderRadius = "10px";
      diceGridSelected.removeChild(clickedDice);
      diceGrid.appendChild(dice);
      if (dice.name === "1") {
        oneDie++;
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
      diceChosen.pop();
    }
  });
}

function rollCountCount() {
  if (rollCount === 3) {
    btnRollAll.disabled = true;
    btnRollSelected.disabled = true;
  }
}

rollSelected();
diceSelect();
btnRollSelected.addEventListener("click", () => {
  diceCheck();
  console.log(oneDie);
});
btnRollAll.addEventListener("click", () => {
  oneDie = 0;
  twoDice = 0;
  threeDice = 0;
  fourDice = 0;
  fiveDice = 0;
  sixDice = 0;
  rollCount++;
  diceChosen = [];
  rollAll();
  diceDeselect();
  rollCountCount();
  if (oneLogicEnable) {
    oneDieLogic();
  }
  if (twoLogicEnable) {
    twoDiceLogic();
  }
  if (threeLogicEnable) {
    threeDiceLogic();
  }
  if (fourLogicEnable) {
    fourDiceLogic();
  }
  if (fiveLogicEnable) {
    fiveDiceLogic();
  }
  if (sixLogicEnable) {
    sixDiceLogic();
  }
});

btnSchoolConfirmOne.addEventListener("click", () => {
  oneLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
});
btnSchoolConfirmTwo.addEventListener("click", () => {
  twoLogicEnable = false;
  btnSchoolConfirmTwo.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
});
btnSchoolConfirmThree.addEventListener("click", () => {
  threeLogicEnable = false;
  btnSchoolConfirmThree.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
});
btnSchoolConfirmFour.addEventListener("click", () => {
  fourLogicEnable = false;
  btnSchoolConfirmFour.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
});
btnSchoolConfirmFive.addEventListener("click", () => {
  fiveLogicEnable = false;
  btnSchoolConfirmFive.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
});
btnSchoolConfirmSix.addEventListener("click", () => {
  sixLogicEnable = false;
  btnSchoolConfirmSix.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
});

//logika

// 1

function oneDieLogic() {
  if (oneDie == 1) {
    schoolOne.innerHTML = -2;
  } else if (oneDie == 2) {
    schoolOne.innerHTML = -1;
  } else if (oneDie == 3) {
    schoolOne.innerHTML = 0;
  } else if (oneDie == 4) {
    schoolOne.innerHTML = 1;
  } else if (oneDie == 5) {
    schoolOne.innerHTML = 2;
  } else {
    schoolOne.innerHTML = "---";
  }
}

// 2

function twoDiceLogic() {
  if (twoDice == 1) {
    schoolTwo.innerHTML = -4;
  } else if (twoDice == 2) {
    schoolTwo.innerHTML = -2;
  } else if (twoDice == 3) {
    schoolTwo.innerHTML = 0;
  } else if (twoDice == 4) {
    schoolTwo.innerHTML = 2;
  } else if (twoDice == 5) {
    schoolTwo.innerHTML = 4;
  } else {
    schoolTwo.innerHTML = "---";
  }
}

// 3
function threeDiceLogic() {
  if (threeDice == 1) {
    schoolThree.innerHTML = -6;
  } else if (threeDice == 2) {
    schoolThree.innerHTML = -3;
  } else if (threeDice == 3) {
    schoolThree.innerHTML = 0;
  } else if (threeDice == 4) {
    schoolThree.innerHTML = 3;
  } else if (threeDice == 5) {
    schoolThree.innerHTML = 6;
  } else {
    schoolThree.innerHTML = "---";
  }
}

// 4

function fourDiceLogic() {
  if (fourDice == 1) {
    schoolFour.innerHTML = -8;
  } else if (fourDice == 2) {
    schoolFour.innerHTML = -4;
  } else if (fourDice == 3) {
    schoolFour.innerHTML = 0;
  } else if (fourDice == 4) {
    schoolFour.innerHTML = 4;
  } else if (fourDice == 5) {
    schoolFour.innerHTML = 8;
  } else {
    schoolFour.innerHTML = "---";
  }
}

// 5

function fiveDiceLogic() {
  if (fiveDice == 1) {
    schoolFive.innerHTML = -10;
  } else if (fiveDice == 2) {
    schoolFive.innerHTML = -5;
  } else if (fiveDice == 3) {
    schoolFive.innerHTML = 0;
  } else if (fiveDice == 4) {
    schoolFive.innerHTML = 5;
  } else if (fiveDice == 5) {
    schoolFive.innerHTML = 10;
  } else {
    schoolFive.innerHTML = "---";
  }
}

// 6

function sixDiceLogic() {
  if (sixDice == 1) {
    schoolSix.innerHTML = -12;
  } else if (sixDice == 2) {
    schoolSix.innerHTML = -6;
  } else if (sixDice == 3) {
    schoolSix.innerHTML = 0;
  } else if (sixDice == 4) {
    schoolSix.innerHTML = 6;
  } else if (sixDice == 5) {
    schoolSix.innerHTML = 12;
  } else {
    schoolSix.innerHTML = "---";
  }
}
