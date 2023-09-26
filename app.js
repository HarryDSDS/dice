// selectors czy chuj
const diceGrid = document.querySelector(".dice-grid");
const diceGridSelected = document.querySelector(".dice-grid-selected");
const schoolOne = document.querySelector(".school-one");
const schoolTwo = document.querySelector(".school-two");
const schoolThree = document.querySelector(".school-three");
const schoolFour = document.querySelector(".school-four");
const schoolFive = document.querySelector(".school-five");
const schoolSix = document.querySelector(".school-six");
const schoolResult = document.getElementById("school-result");
const worldResult = document.getElementById("full-result");
const onePair = document.querySelector(".one-pair");
const twoPairs = document.querySelector(".two-pairs");
const triple = document.querySelector(".triple");
const straightFlush = document.querySelector(".straight-flush");
const royalFlush = document.querySelector(".royal-flush");
const fullHouse = document.querySelector(".full-house");
const quads = document.querySelector(".quads");
const poker = document.querySelector(".poker");

// buttons
const btnRollAll = document.querySelector(".btn-roll-all");
const btnRollSelected = document.querySelector(".btn-roll-selected");
const btnNextRound = document.querySelector(".btn-next-round");
const btnSchoolConfirmOne = document.querySelector(".confirm-one");
const btnSchoolConfirmTwo = document.querySelector(".confirm-two");
const btnSchoolConfirmThree = document.querySelector(".confirm-three");
const btnSchoolConfirmFour = document.querySelector(".confirm-four");
const btnSchoolConfirmFive = document.querySelector(".confirm-five");
const btnSchoolConfirmSix = document.querySelector(".confirm-six");
const btnOnePairConfirm = document.querySelector(".confirm-one-pair");
const btnTwoPairsConfirm = document.querySelector(".confirm-two-pairs");
const btnTripleConfirm = document.querySelector(".confirm-triple");
const btnStraightFlushConfirm = document.querySelector(
  ".confirm-straight-flush"
);
const btnRoyalFlushConfirm = document.querySelector(".confirm-royal-flush");
const btnFullHouseConfirm = document.querySelector(".confirm-full-house");
const btnQuadsConfirm = document.querySelector(".confirm-quads");
const btnPokerConfirm = document.querySelector(".confirm-poker");
const btnOnePairX = document.querySelector(".confirm-one-pair-x");
const btnTwoPairsX = document.querySelector(".confirm-two-pairs-x");
const btnTripleX = document.querySelector(".confirm-triple-x");
const btnStraightFlushX = document.querySelector(".confirm-straight-flush-x");
const btnRoyalFlushX = document.querySelector(".confirm-royal-flush-x");
const btnFullHouseX = document.querySelector(".confirm-full-house-x");
const btnQuadsX = document.querySelector(".confirm-quads-x");
const btnPokerX = document.querySelector(".confirm-poker-x");

// arrays and variables
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
let gameCount = 0;
let rollCount = 0;
let rollSelectedCount = 0;
let oneDie = 0;
let oneDieRoll = 0;
let twoDice = 0;
let twoDiceRoll = 0;
let threeDice = 0;
let threeDiceRoll = 0;
let fourDice = 0;
let fourDiceRoll = 0;
let fiveDice = 0;
let fiveDiceRoll = 0;
let sixDice = 0;
let sixDiceRoll = 0;
let oneDieWorld = 0;
let oneDieWorldRoll = 0;
let twoDiceWorld = 0;
let twoDiceWorldRoll = 0;
let threeDiceWorld = 0;
let threeDiceWorldRoll = 0;
let fourDiceWorld = 0;
let fourDiceWorldRoll = 0;
let fiveDiceWorld = 0;
let fiveDiceWorldRoll = 0;
let sixDiceWorld = 0;
let sixDiceWorldRoll = 0;
let schoolSum = 0;
let oneLogicEnable = true;
let twoLogicEnable = true;
let threeLogicEnable = true;
let fourLogicEnable = true;
let fiveLogicEnable = true;
let sixLogicEnable = true;
let onePairLogicEnable = true;
let twoPairsLogicEnable = true;
let tripleLogicEnable = true;
let straightFlushLogicEnable = true;
let royalFlushLogicEnable = true;
let fullHouseLogicEnable = true;
let quadsLogicEnable = true;
let pokerLogicEnable = true;
let idZero = true;
let idZeroCount = 2;
let idOne = true;
let idOneCount = 2;
let idTwo = true;
let idTwoCount = 2;
let idThree = true;
let idThreeCount = 2;
let idFour = true;
let idFourCount = 2;
let doubleWorld = 1;

const schoolResults = {};
const worldResults = {};

// functions
function diceCheck() {
  let diceGridChildren = diceGrid.children;
  let diceGridSelectedChildren = diceGridSelected.children;
  // for oneDie

  if (oneLogicEnable) {
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
  }

  // end of diceCheck for oneDie
  // diceCheck for twoDice
  if (twoLogicEnable) {
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
  }

  // end of diceCheck for twoDice
  // diceCheck for threeDice
  if (threeLogicEnable) {
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
  }
  //end of diceCheck for threeDice
  // checkDice for fourDice
  if (fourLogicEnable) {
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
  }
  // end of diceCheck for fourDice
  // diceCheck for fiveDice
  if (fiveLogicEnable) {
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
  }
  // end of diceCheck for fiveDice
  // diceCheck for sixDice
  if (sixLogicEnable) {
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
  }
  // end of diceCheck for sixDice

  // for oneDie
  for (i = 0; i < diceGridChildren.length; i++) {
    if (rollSelectedCount == 0) {
      if (diceGridChildren[i].name == "1") {
        oneDieWorld++;
      }
    }
  }
  for (i = 0; i < diceGridSelectedChildren.length; i++) {
    if (rollSelectedCount == 1) {
      if (diceGridSelectedChildren[i].name == "1") {
        oneDieWorldRoll++;
        oneDieWorld++;
        oneDieLogicWorld();
      }
    } else if (rollSelectedCount == 2) {
      if (diceGridSelectedChildren[i].name == "1") {
        oneDieWorld++;
        oneDieLogicWorld();
      }
    }
  }
  if (rollSelectedCount == 2) {
    oneDieWorld = oneDieWorld - oneDieWorldRoll;
    oneDieLogicWorld();
  }

  // end of diceCheck for oneDie
  // diceCheck for twoDice
  for (i = 0; i < diceGridChildren.length; i++) {
    if (rollSelectedCount == 0) {
      if (diceGridChildren[i].name == "2") {
        twoDiceWorld++;
      }
    }
  }
  for (i = 0; i < diceGridSelectedChildren.length; i++) {
    if (rollSelectedCount == 1) {
      if (diceGridSelectedChildren[i].name == "2") {
        twoDiceWorldRoll++;
        twoDiceWorld++;
        twoDiceLogicWorld();
      }
    } else if (rollSelectedCount == 2) {
      if (diceGridSelectedChildren[i].name == "2") {
        twoDiceWorld++;
        twoDiceLogicWorld();
      }
    }
  }
  if (rollSelectedCount == 2) {
    twoDiceWorld = twoDiceWorld - twoDiceWorldRoll;
    twoDiceLogicWorld();
  }

  // end of diceCheck for twoDice
  // diceCheck for threeDice
  for (i = 0; i < diceGridChildren.length; i++) {
    if (rollSelectedCount == 0) {
      if (diceGridChildren[i].name == "3") {
        threeDiceWorld++;
      }
    }
  }
  for (i = 0; i < diceGridSelectedChildren.length; i++) {
    if (rollSelectedCount == 1) {
      if (diceGridSelectedChildren[i].name == "3") {
        threeDiceWorldRoll++;
        threeDiceWorld++;
        threeDiceLogicWorld();
      }
    } else if (rollSelectedCount == 2) {
      if (diceGridSelectedChildren[i].name == "3") {
        threeDiceWorld++;
        threeDiceLogicWorld();
      }
    }
  }
  if (rollSelectedCount == 2) {
    threeDiceWorld = threeDiceWorld - threeDiceWorldRoll;
    threeDiceLogicWorld();
  }

  //end of diceCheck for threeDice
  // checkDice for fourDice
  for (i = 0; i < diceGridChildren.length; i++) {
    if (rollSelectedCount == 0) {
      if (diceGridChildren[i].name == "4") {
        fourDiceWorld++;
      }
    }
  }
  for (i = 0; i < diceGridSelectedChildren.length; i++) {
    if (rollSelectedCount == 1) {
      if (diceGridSelectedChildren[i].name == "4") {
        fourDiceWorldRoll++;
        fourDiceWorld++;
        fourDiceLogicWorld();
      }
    } else if (rollSelectedCount == 2) {
      if (diceGridSelectedChildren[i].name == "4") {
        fourDiceWorld++;
        fourDiceLogicWorld();
      }
    }
  }
  if (rollSelectedCount == 2) {
    fourDiceWorld = fourDiceWorld - fourDiceWorldRoll;
    fourDiceLogicWorld();
  }

  // end of diceCheck for fourDice
  // diceCheck for fiveDice

  for (i = 0; i < diceGridChildren.length; i++) {
    if (rollSelectedCount == 0) {
      if (diceGridChildren[i].name == "5") {
        fiveDiceWorld++;
      }
    }
  }
  for (i = 0; i < diceGridSelectedChildren.length; i++) {
    if (rollSelectedCount == 1) {
      if (diceGridSelectedChildren[i].name == "5") {
        fiveDiceWorldRoll++;
        fiveDiceWorld++;
        fiveDiceLogicWorld();
      }
    } else if (rollSelectedCount == 2) {
      if (diceGridSelectedChildren[i].name == "5") {
        fiveDiceWorld++;
        fiveDiceLogicWorld();
      }
    }
  }
  if (rollSelectedCount == 2) {
    fiveDiceWorld = fiveDiceWorld - fiveDiceWorldRoll;
    fiveDiceLogicWorld();
  }

  // end of diceCheck for fiveDice
  // diceCheck for sixDice
  for (i = 0; i < diceGridChildren.length; i++) {
    if (rollSelectedCount == 0) {
      if (diceGridChildren[i].name == "6") {
        sixDiceWorld++;
      }
    }
  }
  for (i = 0; i < diceGridSelectedChildren.length; i++) {
    if (rollSelectedCount == 1) {
      if (diceGridSelectedChildren[i].name == "6") {
        sixDiceWorldRoll++;
        sixDiceWorld++;
        sixDiceLogicWorld();
      }
    } else if (rollSelectedCount == 2) {
      if (diceGridSelectedChildren[i].name == "6") {
        sixDiceWorld++;
        sixDiceLogicWorld();
      }
    }
  }
  if (rollSelectedCount == 2) {
    sixDiceWorld = sixDiceWorld - sixDiceWorldRoll;
    sixDiceLogicWorld();
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
  doubleWorld++;
  diceGridSelected.innerHTML = "";
  btnRollSelected.addEventListener("click", () => {
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
    const nameDice = clickedDice.name;
    // for id = 0
    if (clickedDice.id == "0") {
      if (idZero == false && idZeroCount % 2 !== 0) {
        diceChosen.pop();
        btnRollSelected.addEventListener("click", () => {
          diceGrid.appendChild(clickedDice);
        });
        idZeroCount++;
        if (clickedDice.id == "0") {
          clickedDice.setAttribute("src", `img/${nameDice}.png`);
          idZero = true;
          if (clickedDice.name == "1") {
            oneDie++;
            oneDieLogic();
            oneDieWorld++;
            oneDieLogicWorld();
            clickedDice.id;
          }
          if (clickedDice.name == "2") {
            twoDice++;
            twoDiceLogic();
            twoDiceWorld++;
            twoDiceLogicWorld();
          }
          if (clickedDice.name == "3") {
            threeDice++;
            threeDiceLogic();
            threeDiceWorld++;
            threeDiceLogicWorld();
          }
          if (clickedDice.name == "4") {
            fourDice++;
            fourDiceLogic();
            fourDiceWorld++;
            fourDiceLogicWorld();
          }
          if (clickedDice.name == "5") {
            fiveDice++;
            fiveDiceLogic();
            fiveDiceWorld++;
            fiveDiceLogicWorld();
          }
          if (clickedDice.name == "6") {
            sixDice++;
            sixDiceLogic();
            sixDiceWorld++;
            sixDiceLogicWorld();
          }
        }
        return;
      } else if (idZero == true && idZeroCount % 2 === 0) {
        if (clickedDice.id == "0") {
          idZeroCount++;
          idZero = false;
          clickedDice.setAttribute("src", `img/${nameDice}rev.png`);
          diceChosen.push(clickedDice);
          btnRollSelected.addEventListener("click", () => {
            diceGrid.removeChild(clickedDice);
          });
        }
      }
    }

    // end for id = 0
    // for id = 1
    if (clickedDice.id == "1") {
      if (idOne == false && idOneCount % 2 !== 0) {
        diceChosen.pop();
        btnRollSelected.addEventListener("click", () => {
          diceGrid.appendChild(clickedDice);
        });
        idOneCount++;
        if (clickedDice.id == "1") {
          clickedDice.setAttribute("src", `img/${nameDice}.png`);
          idOne = true;
          if (clickedDice.name == "1") {
            oneDie++;
            oneDieLogic();
            oneDieWorld++;
            oneDieLogicWorld();
            clickedDice.id;
          }
          if (clickedDice.name == "2") {
            twoDice++;
            twoDiceLogic();
            twoDiceWorld++;
            twoDiceLogicWorld();
          }
          if (clickedDice.name == "3") {
            threeDice++;
            threeDiceLogic();
            threeDiceWorld++;
            threeDiceLogicWorld();
          }
          if (clickedDice.name == "4") {
            fourDice++;
            fourDiceLogic();
            fourDiceWorld++;
            fourDiceLogicWorld();
          }
          if (clickedDice.name == "5") {
            fiveDice++;
            fiveDiceLogic();
            fiveDiceWorld++;
            fiveDiceLogicWorld();
          }
          if (clickedDice.name == "6") {
            sixDice++;
            sixDiceLogic();
            sixDiceWorld++;
            sixDiceLogicWorld();
          }
        }
        return;
      }
      if (idOne == true && idOneCount % 2 === 0) {
        if (clickedDice.id == "1") {
          idOneCount++;
          idOne = false;
          clickedDice.setAttribute("src", `img/${nameDice}rev.png`);
          diceChosen.push(clickedDice);
          btnRollSelected.addEventListener("click", () => {
            diceGrid.removeChild(clickedDice);
          });
        }
      }
    }

    // end for id = 1
    // for id = 2
    if (clickedDice.id == "2") {
      clickedDice.id;
      if (idTwo == false && idTwoCount % 2 !== 0) {
        diceChosen.pop();
        btnRollSelected.addEventListener("click", () => {
          diceGrid.appendChild(clickedDice);
        });
        idTwoCount++;
        if (clickedDice.id == "2") {
          clickedDice.setAttribute("src", `img/${nameDice}.png`);
          idTwo = true;
          if (clickedDice.name == "1") {
            oneDie++;
            oneDieLogic();
            oneDieWorld++;
            oneDieLogicWorld();
            clickedDice.id;
          }
          if (clickedDice.name == "2") {
            twoDice++;
            twoDiceLogic();
            twoDiceWorld++;
            twoDiceLogicWorld();
          }
          if (clickedDice.name == "3") {
            threeDice++;
            threeDiceLogic();
            threeDiceWorld++;
            threeDiceLogicWorld();
          }
          if (clickedDice.name == "4") {
            fourDice++;
            fourDiceLogic();
            fourDiceWorld++;
            fourDiceLogicWorld();
          }
          if (clickedDice.name == "5") {
            fiveDice++;
            fiveDiceLogic();
            fiveDiceWorld++;
            fiveDiceLogicWorld();
          }
          if (clickedDice.name == "6") {
            sixDice++;
            sixDiceLogic();
            sixDiceWorld++;
            sixDiceLogicWorld();
          }
        }
        return;
      }
      if (idTwo == true && idTwoCount % 2 === 0) {
        if (clickedDice.id == "2") {
          idTwoCount++;
          idTwo = false;
          clickedDice.setAttribute("src", `img/${nameDice}rev.png`);
          diceChosen.push(clickedDice);
          btnRollSelected.addEventListener("click", () => {
            diceGrid.removeChild(clickedDice);
          });
        }
      }
    }

    // end for id = 2
    // // for id = 3
    if (clickedDice.id == "3") {
      if (idThree == false && idThreeCount % 2 !== 0) {
        diceChosen.pop();
        btnRollSelected.addEventListener("click", () => {
          diceGrid.appendChild(clickedDice);
        });
        idThreeCount++;
        if (clickedDice.id == "3") {
          clickedDice.setAttribute("src", `img/${nameDice}.png`);
          idThree = true;
          if (clickedDice.name == "1") {
            oneDie++;
            oneDieLogic();
            oneDieWorld++;
            oneDieLogicWorld();
            clickedDice.id;
          }
          if (clickedDice.name == "2") {
            twoDice++;
            twoDiceLogic();
            twoDiceWorld++;
            twoDiceLogicWorld();
          }
          if (clickedDice.name == "3") {
            threeDice++;
            threeDiceLogic();
            threeDiceWorld++;
            threeDiceLogicWorld();
          }
          if (clickedDice.name == "4") {
            fourDice++;
            fourDiceLogic();
            fourDiceWorld++;
            fourDiceLogicWorld();
          }
          if (clickedDice.name == "5") {
            fiveDice++;
            fiveDiceLogic();
            fiveDiceWorld++;
            fiveDiceLogicWorld();
          }
          if (clickedDice.name == "6") {
            sixDice++;
            sixDiceLogic();
            sixDiceWorld++;
            sixDiceLogicWorld();
          }
        }
        return;
      }
      if (idThree == true && idThreeCount % 2 === 0) {
        if (clickedDice.id == "3") {
          idThreeCount++;
          idThree = false;
          clickedDice.setAttribute("src", `img/${nameDice}rev.png`);
          diceChosen.push(clickedDice);
          btnRollSelected.addEventListener("click", () => {
            diceGrid.removeChild(clickedDice);
          });
        }
      }
    }

    // // end for id = 3
    // for id = 4
    if (clickedDice.id == "4") {
      if (idFour == false && idFourCount % 2 !== 0) {
        diceChosen.pop();
        btnRollSelected.addEventListener("click", () => {
          diceGrid.appendChild(clickedDice);
        });
        idFourCount++;
        if (clickedDice.id == "4") {
          clickedDice.setAttribute("src", `img/${nameDice}.png`);
          clickedDice.setAttribute("id", "4");
          idFour = true;
          if (clickedDice.name == "1") {
            oneDie++;
            oneDieLogic();
            oneDieWorld++;
            oneDieLogicWorld();
          }
          if (clickedDice.name == "2") {
            twoDice++;
            twoDiceLogic();
            twoDiceWorld++;
            twoDiceLogicWorld();
          }
          if (clickedDice.name == "3") {
            threeDice++;
            threeDiceLogic();
            threeDiceWorld++;
            threeDiceLogicWorld();
          }
          if (clickedDice.name == "4") {
            fourDice++;
            fourDiceLogic();
            fourDiceWorld++;
            fourDiceLogicWorld();
          }
          if (clickedDice.name == "5") {
            fiveDice++;
            fiveDiceLogic();
            fiveDiceWorld++;
            fiveDiceLogicWorld();
          }
          if (clickedDice.name == "6") {
            sixDice++;
            sixDiceLogic();
            sixDiceWorld++;
            sixDiceLogicWorld();
          }
        }
        return;
      }
      if (idFour == true && idFourCount % 2 === 0) {
        if (clickedDice.id == "4") {
          idFourCount++;
          idFour = false;
          clickedDice.setAttribute("src", `img/${nameDice}rev.png`);
          diceChosen.push(clickedDice);
          btnRollSelected.addEventListener("click", () => {
            diceGrid.removeChild(clickedDice);
          });
        }
      }
    }

    // end for id = 4
    // // tu dla WORLD
    if (clickedDice.id == "0") {
      if (!idZero) {
        if (rollSelectedCount == 0 || rollSelectedCount == 1) {
          if (nameDice == "1") {
            oneDieWorld--;
            oneDieLogicWorld();
          }
          if (nameDice == "2") {
            twoDiceWorld--;
            twoDiceLogicWorld();
          }
          if (nameDice == "3") {
            threeDiceWorld--;
            threeDiceLogicWorld();
          }
          if (nameDice == "4") {
            fourDiceWorld--;
            fourDiceLogicWorld();
          }
          if (nameDice == "5") {
            fiveDiceWorld--;
            fiveDiceLogicWorld();
          }
          if (nameDice == "6") {
            sixDiceWorld--;
            sixDiceLogicWorld();
          }
        }
        if (rollSelectedCount == 2) {
          if (nameDice == "1") {
            oneDieWorldRoll--;
            oneDieLogicWorld();
          }
          if (nameDice == "2") {
            twoDiceWorldRoll--;
            twoDiceLogicWorld();
          }
          if (nameDice == "3") {
            threeDiceWorldRoll--;
            threeDiceLogicWorld();
          }
          if (nameDice == "4") {
            fourDiceWorldRoll--;
            fourDiceLogicWorld();
          }
          if (nameDice == "5") {
            fiveDiceWorldRoll--;
            fiveDiceLogicWorld();
          }
          if (nameDice == "6") {
            sixDiceWorldRoll--;
            sixDiceLogicWorld();
          }
        }
      }
    }
    if (clickedDice.id == "1") {
      if (!idOne) {
        if (rollSelectedCount == 0 || rollSelectedCount == 1) {
          if (nameDice == "1") {
            oneDieWorld--;
            oneDieLogicWorld();
          }
          if (nameDice == "2") {
            twoDiceWorld--;
            twoDiceLogicWorld();
          }
          if (nameDice == "3") {
            threeDiceWorld--;
            threeDiceLogicWorld();
          }
          if (nameDice == "4") {
            fourDiceWorld--;
            fourDiceLogicWorld();
          }
          if (nameDice == "5") {
            fiveDiceWorld--;
            fiveDiceLogicWorld();
          }
          if (nameDice == "6") {
            sixDiceWorld--;
            sixDiceLogicWorld();
          }
        }
        if (rollSelectedCount == 2) {
          if (nameDice == "1") {
            oneDieWorldRoll--;
            oneDieLogicWorld();
          }
          if (nameDice == "2") {
            twoDiceWorldRoll--;
            twoDiceLogicWorld();
          }
          if (nameDice == "3") {
            threeDiceWorldRoll--;
            threeDiceLogicWorld();
          }
          if (nameDice == "4") {
            fourDiceWorldRoll--;
            fourDiceLogicWorld();
          }
          if (nameDice == "5") {
            fiveDiceWorldRoll--;
            fiveDiceLogicWorld();
          }
          if (nameDice == "6") {
            sixDiceWorldRoll--;
            sixDiceLogicWorld();
          }
        }
      }
    }

    if (clickedDice.id == "2") {
      if (!idTwo) {
        if (rollSelectedCount == 0 || rollSelectedCount == 1) {
          if (nameDice == "1") {
            oneDieWorld--;
            oneDieLogicWorld();
          }
          if (nameDice == "2") {
            twoDiceWorld--;
            twoDiceLogicWorld();
          }
          if (nameDice == "3") {
            threeDiceWorld--;
            threeDiceLogicWorld();
          }
          if (nameDice == "4") {
            fourDiceWorld--;
            fourDiceLogicWorld();
          }
          if (nameDice == "5") {
            fiveDiceWorld--;
            fiveDiceLogicWorld();
          }
          if (nameDice == "6") {
            sixDiceWorld--;
            sixDiceLogicWorld();
          }
        }
        if (rollSelectedCount == 2) {
          if (nameDice == "1") {
            oneDieWorldRoll--;
            oneDieLogicWorld();
          }
          if (nameDice == "2") {
            twoDiceWorldRoll--;
            twoDiceLogicWorld();
          }
          if (nameDice == "3") {
            threeDiceWorldRoll--;
            threeDiceLogicWorld();
          }
          if (nameDice == "4") {
            fourDiceWorldRoll--;
            fourDiceLogicWorld();
          }
          if (nameDice == "5") {
            fiveDiceWorldRoll--;
            fiveDiceLogicWorld();
          }
          if (nameDice == "6") {
            sixDiceWorldRoll--;
            sixDiceLogicWorld();
          }
        }
      }
    }

    if (clickedDice.id == "3") {
      if (!idThree) {
        if (rollSelectedCount == 0 || rollSelectedCount == 1) {
          if (nameDice == "1") {
            oneDieWorld--;
            oneDieLogicWorld();
          }
          if (nameDice == "2") {
            twoDiceWorld--;
            twoDiceLogicWorld();
          }
          if (nameDice == "3") {
            threeDiceWorld--;
            threeDiceLogicWorld();
          }
          if (nameDice == "4") {
            fourDiceWorld--;
            fourDiceLogicWorld();
          }
          if (nameDice == "5") {
            fiveDiceWorld--;
            fiveDiceLogicWorld();
          }
          if (nameDice == "6") {
            sixDiceWorld--;
            sixDiceLogicWorld();
          }
        }
        if (rollSelectedCount == 2) {
          if (nameDice == "1") {
            oneDieWorldRoll--;
            oneDieLogicWorld();
          }
          if (nameDice == "2") {
            twoDiceWorldRoll--;
            twoDiceLogicWorld();
          }
          if (nameDice == "3") {
            threeDiceWorldRoll--;
            threeDiceLogicWorld();
          }
          if (nameDice == "4") {
            fourDiceWorldRoll--;
            fourDiceLogicWorld();
          }
          if (nameDice == "5") {
            fiveDiceWorldRoll--;
            fiveDiceLogicWorld();
          }
          if (nameDice == "6") {
            sixDiceWorldRoll--;
            sixDiceLogicWorld();
          }
        }
      }
    }

    if (clickedDice.id == "4") {
      if (!idFour) {
        if (rollSelectedCount == 0 || rollSelectedCount == 1) {
          if (nameDice == "1") {
            oneDieWorld--;
            oneDieLogicWorld();
          }
          if (nameDice == "2") {
            twoDiceWorld--;
            twoDiceLogicWorld();
          }
          if (nameDice == "3") {
            threeDiceWorld--;
            threeDiceLogicWorld();
          }
          if (nameDice == "4") {
            fourDiceWorld--;
            fourDiceLogicWorld();
          }
          if (nameDice == "5") {
            fiveDiceWorld--;
            fiveDiceLogicWorld();
          }
          if (nameDice == "6") {
            sixDiceWorld--;
            sixDiceLogicWorld();
          }
        }
        if (rollSelectedCount == 2) {
          if (nameDice == "1") {
            oneDieWorldRoll--;
            oneDieLogicWorld();
          }
          if (nameDice == "2") {
            twoDiceWorldRoll--;
            twoDiceLogicWorld();
          }
          if (nameDice == "3") {
            threeDiceWorldRoll--;
            threeDiceLogicWorld();
          }
          if (nameDice == "4") {
            fourDiceWorldRoll--;
            fourDiceLogicWorld();
          }
          if (nameDice == "5") {
            fiveDiceWorldRoll--;
            fiveDiceLogicWorld();
          }
          if (nameDice == "6") {
            sixDiceWorldRoll--;
            sixDiceLogicWorld();
          }
        }
      }
    }
    // // chuj chjuj chujuajsduiasd
    // for oneDie
    if (oneLogicEnable) {
      if (clickedDice.id == "0") {
        if (!idZero) {
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
        }
      }
    }
    if (oneLogicEnable) {
      if (clickedDice.id == "1") {
        if (!idOne) {
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
        }
      }
    }

    if (oneLogicEnable) {
      if (clickedDice.id == "2") {
        if (!idTwo) {
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
        }
      }
    }
    if (oneLogicEnable) {
      if (clickedDice.id == "3") {
        if (!idThree) {
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
        }
      }
    }
    if (oneLogicEnable) {
      if (clickedDice.id == "4") {
        if (!idFour) {
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
        }
      }
    }
    // end for oneDie
    // for twoDice
    if (twoLogicEnable) {
      if (clickedDice.id == "0") {
        if (!idZero)
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
      }
    }
    if (twoLogicEnable) {
      if (clickedDice.id == "1") {
        if (!idOne)
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
      }
    }

    if (twoLogicEnable) {
      if (clickedDice.id == "2") {
        if (!idTwo)
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
      }
    }
    if (twoLogicEnable) {
      if (clickedDice.id == "3") {
        if (!idThree)
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
      }
    }
    if (twoLogicEnable) {
      if (clickedDice.id == "4") {
        if (!idFour)
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
      }
    }
    // end for twoDice

    // for threeDice
    if (threeLogicEnable) {
      if (clickedDice.id == "0") {
        if (!idZero)
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
      }
    }
    if (threeLogicEnable) {
      if (clickedDice.id == "1") {
        if (!idOne)
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
      }
    }
    if (threeLogicEnable) {
      if (clickedDice.id == "2") {
        if (!idTwo)
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
      }
    }
    if (threeLogicEnable) {
      if (clickedDice.id == "3") {
        if (!idThree)
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
      }
    }
    if (threeLogicEnable) {
      if (clickedDice.id == "4") {
        if (!idFour)
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
      }
    }

    // end for threeDice
    // for fourDIce
    if (fourLogicEnable) {
      if (clickedDice.id == "0") {
        if (!idZero)
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
      }
    }

    if (fourLogicEnable) {
      if (clickedDice.id == "1") {
        if (!idOne)
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
      }
    }
    if (fourLogicEnable) {
      if (clickedDice.id == "2") {
        if (!idTwo)
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
      }
    }
    if (fourLogicEnable) {
      if (clickedDice.id == "3") {
        if (!idThree)
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
      }
    }
    if (fourLogicEnable) {
      if (clickedDice.id == "4") {
        if (!idFour)
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
      }
    }

    // end for fourDice
    // for fiveDice
    if (fiveLogicEnable) {
      if (clickedDice.id == "0") {
        if (!idZero)
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
      }
    }
    clickedDice.id;
    if (fiveLogicEnable) {
      if (clickedDice.id == "1") {
        if (!idOne)
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
      }
    }

    if (fiveLogicEnable) {
      if (clickedDice.id == "2") {
        if (!idTwo)
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
      }
    }
    if (fiveLogicEnable) {
      if (clickedDice.id == "3") {
        if (!idThree)
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
      }
    }
    if (fiveLogicEnable) {
      if (clickedDice.id == "4") {
        if (!idFour)
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
      }
    }
    // end for fiveDice
    clickedDice.id;
    // for sixDice
    if (sixLogicEnable) {
      if (clickedDice.id == "0") {
        if (!idZero)
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
      }
    }
    if (sixLogicEnable) {
      if (clickedDice.id == "1") {
        if (!idOne)
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
      }
    }
    if (sixLogicEnable) {
      if (clickedDice.id == "2") {
        if (!idTwo)
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
      }
    }
    if (sixLogicEnable) {
      if (clickedDice.id == "3") {
        if (!idThree)
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
      }
    }
    if (sixLogicEnable) {
      if (clickedDice.id == "4") {
        if (!idFour)
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
      }
    }
    // end for sixDice
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

function pickLock() {
  rollCount = 0;
  rollSelectedCount = 0;
  oneDieRoll = 0;
  twoDiceRoll = 0;
  threeDiceRoll = 0;
  fourDiceRoll = 0;
  fiveDiceRoll = 0;
  sixDiceRoll = 0;
  oneDieWorldRoll = 0;
  twoDiceWorldRoll = 0;
  threeDiceWorldRoll = 0;
  fourDiceWorldRoll = 0;
  fiveDiceWorldRoll = 0;
  sixDiceWorldRoll = 0;
  btnRollAll.disabled = false;
  btnRollSelected.disabled = true;
  idZero = true;
  idZeroCount = 2;
  idOne = true;
  idOneCount = 2;
  idTwo = true;
  idTwoCount = 2;
  idThree = true;
  idThreeCount = 2;
  idFour = true;
  idFourCount = 2;
}

function zeroDice() {
  if (oneLogicEnable) {
    oneDie = 0;
  }
  if (twoLogicEnable) {
    twoDice = 0;
  }
  if (threeLogicEnable) {
    threeDice = 0;
  }
  if (fourLogicEnable) {
    fourDice = 0;
  }
  if (fiveLogicEnable) {
    fiveDice = 0;
  }
  if (sixLogicEnable) {
    sixDice = 0;
  }
  oneDieWorld = 0;
  twoDiceWorld = 0;
  threeDiceWorld = 0;
  fourDiceWorld = 0;
  fiveDiceWorld = 0;
  sixDiceWorld = 0;
}

function fullZero() {
  oneDie = 0;
  twoDice = 0;
  threeDice = 0;
  fourDice = 0;
  fiveDice = 0;
  sixDice = 0;
  oneDieWorld = 0;
  twoDiceWorld = 0;
  threeDiceWorld = 0;
  fourDiceWorld = 0;
  fiveDiceWorld = 0;
  sixDiceWorld = 0;
}

function callDiceLogic() {
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
}

function callDiceLogicWorld() {
  oneDieLogicWorld();
  twoDiceLogicWorld();
  threeDiceLogicWorld();
  fourDiceLogicWorld();
  fiveDiceLogicWorld();
  sixDiceLogicWorld();
  twoPairsLogic();
  straightFlushLogic();
  royalFlushLogic();
  fullHouseLogic();
}
function worldValueReset() {
  if (onePairLogicEnable) {
    onePair.innerHTML = "---";
  }
  if (twoPairsLogicEnable) {
    twoPairs.innerHTML = "---";
  }
  if (tripleLogicEnable) {
    triple.innerHTML = "---";
  }
  if (straightFlushLogicEnable) {
    straightFlush.innerHTML = "---";
  }
  if (royalFlushLogicEnable) {
    royalFlush.innerHTML = "---";
  }
  if (fullHouseLogicEnable) {
    fullHouse.innerHTML = "---";
  }
  if (quadsLogicEnable) {
    quads.innerHTML = "---";
  }
  if (pokerLogicEnable) {
    poker.innerHTML = "---";
  }
}
function reenableBtn() {
  if (onePairLogicEnable) {
    if (onePair.innerHTML == "---") {
      btnOnePairConfirm.disabled = true;
      btnOnePairX.disabled = false;
    } else {
      btnOnePairConfirm.disabled = false;
      btnOnePairX.disabled = false;
    }
  }
  if (twoPairsLogicEnable) {
    if (twoPairs.innerHTML == "---") {
      btnTwoPairsConfirm.disabled = true;
      btnTwoPairsX.disabled = false;
    } else {
      btnTwoPairsConfirm.disabled = false;
      btnTwoPairsX.disabled = false;
    }
  }
  if (tripleLogicEnable) {
    if (triple.innerHTML == "---") {
      btnTripleConfirm.disabled = true;
      btnTripleX.disabled = false;
    } else {
      btnTripleConfirm.disabled = false;
      btnTripleX.disabled = false;
    }
  }
  if (straightFlushLogicEnable) {
    if (straightFlush.innerHTML == "---") {
      btnStraightFlushConfirm.disabled = true;
      btnStraightFlushX.disabled = false;
    } else {
      btnStraightFlushConfirm.disabled = false;
      btnStraightFlushX.disabled = false;
    }
  }
  if (royalFlushLogicEnable) {
    if (royalFlush.innerHTML == "---") {
      btnRoyalFlushConfirm.disabled = true;
      btnRoyalFlushX.disabled = false;
    } else {
      btnRoyalFlushConfirm.disabled = false;
      btnRoyalFlushX.disabled = false;
    }
  }
  if (fullHouseLogicEnable) {
    if (fullHouse.innerHTML == "---") {
      btnFullHouseConfirm.disabled = true;
      btnFullHouseX.disabled = false;
    } else {
      btnFullHouseConfirm.disabled = false;
      btnFullHouseX.disabled = false;
    }
  }
  if (quadsLogicEnable) {
    if (quads.innerHTML == "---") {
      btnQuadsConfirm.disabled = true;
      btnQuadsX.disabled = false;
    } else {
      btnQuadsConfirm.disabled = false;
      btnQuadsX.disabled = false;
    }
  }
  if (pokerLogicEnable) {
    if (poker.innerHTML == "---") {
      btnPokerConfirm.disabled = true;
      btnPokerX.disabled = false;
    } else {
      btnPokerConfirm.disabled = false;
      btnPokerX.disabled = false;
    }
  }
}
function schoolScoreFinal(object) {
  return Object.values(object).reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
} // sum of score for each die in school/world

function gameCountScore() {
  if (gameCount < 3) {
    btnOnePairConfirm.disabled = true;
    btnTwoPairsConfirm.disabled = true;
    btnTripleConfirm.disabled = true;
    btnStraightFlushConfirm.disabled = true;
    btnRoyalFlushConfirm.disabled = true;
    btnFullHouseConfirm.disabled = true;
    btnQuadsConfirm.disabled = true;
    btnPokerConfirm.disabled = true;
    btnOnePairX.disabled = true;
    btnTwoPairsX.disabled = true;
    btnTripleX.disabled = true;
    btnStraightFlushX.disabled = true;
    btnRoyalFlushX.disabled = true;
    btnFullHouseX.disabled = true;
    btnQuadsX.disabled = true;
    btnPokerX.disabled = true;
  }
  let schoolResultToParse = schoolResult.innerHTML;
  let schoolResultParsed = parseInt(schoolResultToParse);
  if (gameCount === 14 && schoolResultParsed < 0) {
    worldResult.innerHTML = worldResult.innerHTML - 50;
  }
  if(gameCount === 14){
    alert('Your final score is ' + worldResult.innerHTML)
  }
}

rollSelected();
diceSelect();
schoolScoreFinal(schoolResults);
btnRollSelected.addEventListener("click", () => {
  worldValueReset();
  doubleWorld++;
  rollCount++;
  rollCountCount();
  rollSelectedCount++;
  diceCheck();
  callDiceLogic();
  callDiceLogicWorld();

  reenableBtn();
});
btnRollAll.addEventListener("click", () => {
  worldValueReset();
  doubleWorld = 1;
  rollCount++;
  diceChosen = [];
  btnRollSelected.disabled = false;
  zeroDice();
  rollAll();
  diceDeselect();
  rollCountCount();
  callDiceLogic();
  callDiceLogicWorld();
  reenableBtn();
  gameCountScore();
});

btnSchoolConfirmOne.addEventListener("click", () => {
  const oneDieFinalSchool = parseInt(schoolOne.innerHTML);
  schoolResults.oneDieResult = oneDieFinalSchool;
  worldResults.oneDieResult = oneDieFinalSchool;
  schoolOne.innerHTML = oneDieFinalSchool;
  oneLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  schoolResult.innerHTML = schoolScoreFinal(schoolResults);
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
  btnSchoolConfirmOne.style.backgroundColor = "#81f885";
  btnSchoolConfirmOne.innerHTML = "+";
  btnSchoolConfirmOne.style.fontSize = "16px";
  if (oneDieFinalSchool < 0) {
    btnSchoolConfirmOne.style.backgroundColor = "#ff0000";
    btnSchoolConfirmOne.innerHTML = "-";
    btnSchoolConfirmOne.style.fontSize = "16px";
  }
});
btnSchoolConfirmTwo.addEventListener("click", () => {
  const twoDiceFinalSchool = parseInt(schoolTwo.innerHTML);
  schoolResults.twoDieResult = twoDiceFinalSchool;
  worldResults.twoDieResult = twoDiceFinalSchool;
  schoolSum = schoolSum + schoolResults.twoDiceResult;
  twoLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  schoolResult.innerHTML = schoolScoreFinal(schoolResults);
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
  btnSchoolConfirmTwo.style.backgroundColor = "#81f885";
  btnSchoolConfirmTwo.innerHTML = "+";
  btnSchoolConfirmTwo.style.fontSize = "16px";
});
btnSchoolConfirmThree.addEventListener("click", () => {
  const threeDiceFinalSchool = parseInt(schoolThree.innerHTML);
  schoolResults.threeDieResult = threeDiceFinalSchool;
  worldResults.threeDieResult = threeDiceFinalSchool;
  threeLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  schoolResult.innerHTML = schoolScoreFinal(schoolResults);
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
  btnSchoolConfirmThree.style.backgroundColor = "#81f885";
  btnSchoolConfirmThree.innerHTML = "+";
  btnSchoolConfirmThree.style.fontSize = "16px";
});
btnSchoolConfirmFour.addEventListener("click", () => {
  const fourDiceFinalSchool = parseInt(schoolFour.innerHTML);
  schoolResults.fourDieResult = fourDiceFinalSchool;
  worldResults.fourDieResult = fourDiceFinalSchool;
  fourLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  schoolResult.innerHTML = schoolScoreFinal(schoolResults);
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
  btnSchoolConfirmFour.style.backgroundColor = "#81f885";
  btnSchoolConfirmFour.innerHTML = "+";
  btnSchoolConfirmFour.style.fontSize = "16px";
});
btnSchoolConfirmFive.addEventListener("click", () => {
  const fiveDiceFinalSchool = parseInt(schoolFive.innerHTML);
  schoolResults.fiveDieResult = fiveDiceFinalSchool;
  worldResults.fiveDieResult = fiveDiceFinalSchool;
  fiveLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  schoolResult.innerHTML = schoolScoreFinal(schoolResults);
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
  btnSchoolConfirmFive.style.backgroundColor = "#81f885";
  btnSchoolConfirmFive.innerHTML = "+";
  btnSchoolConfirmFive.style.fontSize = "16px";
});
btnSchoolConfirmSix.addEventListener("click", () => {
  const sixDiceFinalSchool = parseInt(schoolSix.innerHTML);
  schoolResults.sixDieResult = sixDiceFinalSchool;
  worldResults.sixDieResult = sixDiceFinalSchool;
  sixLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  schoolResult.innerHTML = schoolScoreFinal(schoolResults);
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
  btnSchoolConfirmSix.style.backgroundColor = "#81f885";
  btnSchoolConfirmSix.innerHTML = "+";
  btnSchoolConfirmSix.style.fontSize = "16px";
});

btnOnePairConfirm.addEventListener("click", () => {
  const onePairFinal = parseInt(onePair.innerHTML);
  worldResults.onePairResult = onePairFinal;
  onePair.innerHTML = onePairFinal;
  onePairLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
  btnOnePairConfirm.style.backgroundColor = "#81f885";
  btnOnePairConfirm.innerHTML = "+";
  btnOnePairConfirm.style.fontSize = "16px";
});
btnTwoPairsConfirm.addEventListener("click", () => {
  const twoPairsFinal = parseInt(twoPairs.innerHTML);
  worldResults.twoPairsResult = twoPairsFinal;
  twoPairs.innerHTML = twoPairsFinal;
  twoPairsLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
  btnTwoPairsConfirm.style.backgroundColor = "#81f885";
  btnTwoPairsConfirm.innerHTML = "+";
  btnTwoPairsConfirm.style.fontSize = "16px";
});
btnTripleConfirm.addEventListener("click", () => {
  const tripleFinal = parseInt(triple.innerHTML);
  worldResults.tripleResult = tripleFinal;
  triple.innerHTML = tripleFinal;
  tripleLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
  btnTripleConfirm.style.backgroundColor = "#81f885";
  btnTripleConfirm.innerHTML = "+";
  btnTripleConfirm.style.fontSize = "16px";
});
btnStraightFlushConfirm.addEventListener("click", () => {
  const straightFinal = parseInt(straightFlush.innerHTML);
  worldResults.straightFlushResult = straightFinal;
  straightFlush.innerHTML = straightFinal;
  straightFlushLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
  btnStraightFlushConfirm.style.backgroundColor = "#81f885";
  btnStraightFlushConfirm.innerHTML = "+";
  btnStraightFlushConfirm.style.fontSize = "16px";
});
btnRoyalFlushConfirm.addEventListener("click", () => {
  const royalFinal = parseInt(royalFlush.innerHTML);
  worldResults.royalFlushResult = royalFinal;
  royalFlush.innerHTML = royalFinal;
  royalFlushLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
  btnRoyalFlushConfirm.style.backgroundColor = "#81f885";
  btnRoyalFlushConfirm.innerHTML = "+";
  btnRoyalFlushConfirm.style.fontSize = "16px";
});
btnFullHouseConfirm.addEventListener("click", () => {
  const fullFinal = parseInt(fullHouse.innerHTML);
  worldResults.fullHouseResult = fullFinal;
  fullHouse.innerHTML = fullFinal;
  fullHouseLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
  btnFullHouseConfirm.style.backgroundColor = "#81f885";
  btnFullHouseConfirm.innerHTML = "+";
  btnFullHouseConfirm.style.fontSize = "16px";
});
btnQuadsConfirm.addEventListener("click", () => {
  const quadsFinal = parseInt(quads.innerHTML);
  worldResults.quadsResult = quadsFinal;
  quads.innerHTML = quadsFinal;
  quadsLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
  btnQuadsConfirm.style.backgroundColor = "#81f885";
  btnQuadsConfirm.innerHTML = "+";
  btnQuadsConfirm.style.fontSize = "16px";
});
btnPokerConfirm.addEventListener("click", () => {
  const pokerFinal = parseInt(poker.innerHTML);
  worldResults.pokerResult = pokerFinal;
  poker.innerHTML = pokerFinal;
  pokerLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
  btnPokerConfirm.style.backgroundColor = "#81f885";
  btnPokerConfirm.innerHTML = "+";
  btnPokerConfirm.style.fontSize = "16px";
});

btnOnePairX.addEventListener("click", () => {
  const onePairFinal = 0;
  worldResults.onePairResult = onePairFinal;
  onePair.innerHTML = onePairFinal;
  onePairLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
});

btnTwoPairsX.addEventListener("click", () => {
  const twoPairsFinal = 0;
  worldResults.twoPairsResult = twoPairsFinal;
  twoPairs.innerHTML = twoPairsFinal;
  twoPairsLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
});

btnTripleX.addEventListener("click", () => {
  const tripleFinal = 0;
  worldResults.tripleResult = tripleFinal;
  triple.innerHTML = tripleFinal;
  tripleLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
});
btnStraightFlushX.addEventListener("click", () => {
  const straightFlushFinal = 0;
  worldResults.straightFlushResult = straightFlushFinal;
  straightFlush.innerHTML = straightFlushFinal;
  straightFlushLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
});

btnRoyalFlushX.addEventListener("click", () => {
  const royalFlushFinal = 0;
  worldResults.royalFlushResult = royalFlushFinal;
  royalFlush.innerHTML = royalFlushFinal;
  royalFlushLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
});

btnFullHouseX.addEventListener("click", () => {
  const fullHouseFinal = 0;
  worldResults.fullhHouseResult = fullHouseFinal;
  fullHouse.innerHTML = fullHouseFinal;
  fullHouseLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
});

btnQuadsX.addEventListener("click", () => {
  const quadsFinal = 0;
  worldResults.quadsResult = quadsFinal;
  quads.innerHTML = quadsFinal;
  quadsLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
});

btnPokerX.addEventListener("click", () => {
  const pokerFinal = 0;
  worldResults.pokerResult = pokerFinal;
  poker.innerHTML = pokerFinal;
  pokerLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnOnePairConfirm.disabled = true;
  btnTwoPairsConfirm.disabled = true;
  btnTripleConfirm.disabled = true;
  btnStraightFlushConfirm.disabled = true;
  btnRoyalFlushConfirm.disabled = true;
  btnFullHouseConfirm.disabled = true;
  btnQuadsConfirm.disabled = true;
  btnPokerConfirm.disabled = true;
  btnOnePairX.disabled = true;
  btnTwoPairsX.disabled = true;
  btnTripleX.disabled = true;
  btnStraightFlushX.disabled = true;
  btnRoyalFlushX.disabled = true;
  btnFullHouseX.disabled = true;
  btnQuadsX.disabled = true;
  btnPokerX.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  worldResult.innerHTML = schoolScoreFinal(worldResults);
  gameCount++;
});
btnNextRound.addEventListener("click", () => {
  pickLock();
  fullZero();
  gameCountScore()
});

//logika

// world scores if null

function nullScoresWorld() {
  if (
    onePair.innerHTML == "---" ||
    twoPairs.innerHTML == "---" ||
    triple.innerHTML == "---" ||
    straightFlush.innerHTML == "---" ||
    royalFlush.innerHTML == "---" ||
    fullHouse.innerHTML == "---" ||
    quads.innerHTML == "---" ||
    poker.innerHTML == "---"
  ) {
    if (
      oneDie == 0 ||
      twoDice == 0 ||
      threeDice == 0 ||
      fourDice == 0 ||
      fiveDice == 0 ||
      sixDice == 0
    ) {
      onePair.innerHTML = "---";
      twoPairs.innerHTML == "---";
      triple.innerHTML == "---";
      straightFlush.innerHTML == "---";
      royalFlush.innerHTML == "---";
      fullHouse.innerHTML == "---";
      quads.innerHTML == "---";
      poker.innerHTML == "---";
    }
  }
}

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

  if (schoolOne.innerHTML == "---") {
    btnSchoolConfirmOne.disabled = true;
  } else {
    btnSchoolConfirmOne.disabled = false;
  }
}

function oneDieLogicWorld() {
  if (onePairLogicEnable) {
    if (oneDieWorld > 1) {
      onePair.innerHTML = 2;
      if (doubleWorld == 1) {
        onePair.innerHTML = 4;
      }
    }
  }
  if (tripleLogicEnable) {
    if (oneDieWorld > 2) {
      triple.innerHTML = 3;
      if (doubleWorld == 1) {
        triple.innerHTML = 6;
      }
    }
  }

  if (twoPairsLogicEnable) {
    if (oneDieWorld > 3) {
      twoPairs.innerHTML = 4;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 8;
      }
    }
  }

  if (quadsLogicEnable) {
    if (oneDieWorld > 3) {
      quads.innerHTML = 54;
      if (doubleWorld == 1) {
        quads.innerHTML = 58;
      }
    }
  }

  if (pokerLogicEnable) {
    if (oneDieWorld > 4) {
      poker.innerHTML = 105;
      if (doubleWorld == 1) {
        poker.innerHTML = 110;
      }
    }
  }

  if (fullHouseLogicEnable) {
    if (oneDieWorld > 4) {
      fullHouse.innerHTML = 5;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 10;
      }
    }
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

  if (schoolTwo.innerHTML == "---") {
    btnSchoolConfirmTwo.disabled = true;
  } else {
    btnSchoolConfirmTwo.disabled = false;
  }
}

function twoDiceLogicWorld() {
  if (onePairLogicEnable) {
    if (twoDiceWorld > 1) {
      onePair.innerHTML = 4;
      if (doubleWorld == 1) {
        onePair.innerHTML = 8;
      }
    }
  }
  if (tripleLogicEnable) {
    if (twoDiceWorld > 2) {
      triple.innerHTML = 6;
      if (doubleWorld == 1) {
        triple.innerHTML = 12;
      }
    }
  }

  if (twoPairsLogicEnable) {
    if (twoDiceWorld > 3) {
      twoPairs.innerHTML = 8;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 8;
      }
    }
  }

  if (quadsLogicEnable) {
    if (twoDiceWorld > 3) {
      quads.innerHTML = 58;
      if (doubleWorld == 1) {
        quads.innerHTML = 116;
      }
    }
  }

  if (pokerLogicEnable) {
    if (twoDiceWorld > 4) {
      poker.innerHTML = 110;
      if (doubleWorld == 1) {
        poker.innerHTML = 120;
      }
    }
  }

  if (fullHouseLogicEnable) {
    if (twoDiceWorld > 4) {
      fullHouse.innerHTML = 10;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 20;
      }
    }
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

  if (schoolThree.innerHTML == "---") {
    btnSchoolConfirmThree.disabled = true;
  } else {
    btnSchoolConfirmThree.disabled = false;
  }
}

function threeDiceLogicWorld() {
  if (onePairLogicEnable) {
    if (threeDiceWorld > 1) {
      onePair.innerHTML = 6;
      if (doubleWorld == 1) {
        onePair.innerHTML = 12;
      }
    }
  }
  if (tripleLogicEnable) {
    if (threeDiceWorld > 2) {
      triple.innerHTML = 9;
      if (doubleWorld == 1) {
        triple.innerHTML = 18;
      }
    }
  }

  if (twoPairsLogicEnable) {
    if (threeDiceWorld > 3) {
      twoPairs.innerHTML = 12;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 24;
      }
    }
  }

  if (quadsLogicEnable) {
    if (threeDiceWorld > 3) {
      quads.innerHTML = 62;
      if (doubleWorld == 1) {
        quads.innerHTML = 74;
      }
    }
  }

  if (pokerLogicEnable) {
    if (threeDiceWorld > 4) {
      poker.innerHTML = 115;
      if (doubleWorld == 1) {
        poker.innerHTML = 130;
      }
    }
  }

  if (fullHouseLogicEnable) {
    if (threeDiceWorld > 4) {
      fullHouse.innerHTML = 15;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 30;
      }
    }
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

  if (schoolFour.innerHTML == "---") {
    btnSchoolConfirmFour.disabled = true;
  } else {
    btnSchoolConfirmFour.disabled = false;
  }
}

function fourDiceLogicWorld() {
  if (onePairLogicEnable) {
    if (fourDiceWorld > 1) {
      onePair.innerHTML = 8;
      if (doubleWorld == 1) {
        onePair.innerHTML = 16;
      }
    }
  }

  if (tripleLogicEnable) {
    if (fourDiceWorld > 2) {
      triple.innerHTML = 12;
      if (doubleWorld == 1) {
        triple.innerHTML = 24;
      }
    }
  }

  if (twoPairsLogicEnable) {
    if (fourDiceWorld > 3) {
      twoPairs.innerHTML = 16;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 32;
      }
    }
  }

  if (quadsLogicEnable) {
    if (fourDiceWorld > 3) {
      quads.innerHTML = 66;
      if (doubleWorld == 1) {
        quads.innerHTML = 82;
      }
    }
  }

  if (pokerLogicEnable) {
    if (fourDiceWorld > 4) {
      poker.innerHTML = 120;
      if (doubleWorld == 1) {
        poker.innerHTML = 140;
      }
    }
  }

  if (fullHouseLogicEnable) {
    if (fourDiceWorld > 4) {
      fullHouse.innerHTML = 20;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 40;
      }
    }
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

  if (schoolFive.innerHTML == "---") {
    btnSchoolConfirmFive.disabled = true;
  } else {
    btnSchoolConfirmFive.disabled = false;
  }
}

function fiveDiceLogicWorld() {
  if (onePairLogicEnable) {
    if (fiveDiceWorld > 1) {
      onePair.innerHTML = 10;
      if (doubleWorld == 1) {
        onePair.innerHTML = 20;
      }
    }
  }
  if (tripleLogicEnable) {
    if (fiveDiceWorld > 2) {
      triple.innerHTML = 15;
      if (doubleWorld == 1) {
        triple.innerHTML = 30;
      }
    }
  }

  if (twoPairsLogicEnable) {
    if (fiveDiceWorld > 3) {
      twoPairs.innerHTML = 20;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 40;
      }
    }
  }

  if (quadsLogicEnable) {
    if (fiveDiceWorld > 3) {
      quads.innerHTML = 70;
      if (doubleWorld == 1) {
        quads.innerHTML = 90;
      }
    }
  }

  if (pokerLogicEnable) {
    if (fiveDiceWorld > 4) {
      poker.innerHTML = 125;
      if (doubleWorld == 1) {
        poker.innerHTML = 150;
      }
    }
  }

  if (fullHouseLogicEnable) {
    if (fiveDiceWorld > 4) {
      fullHouse.innerHTML = 25;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 50;
      }
    }
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

  if (schoolSix.innerHTML == "---") {
    btnSchoolConfirmSix.disabled = true;
  } else {
    btnSchoolConfirmSix.disabled = false;
  }
}

function sixDiceLogicWorld() {
  if (onePairLogicEnable) {
    if (sixDiceWorld > 1) {
      onePair.innerHTML = 12;
      if (doubleWorld == 1) {
        onePair.innerHTML = 24;
      }
    }
  }

  if (tripleLogicEnable) {
    if (sixDiceWorld > 2) {
      triple.innerHTML = 18;
      if (doubleWorld == 1) {
        triple.innerHTML = 36;
      }
    }
  }

  if (twoPairsLogicEnable) {
    if (sixDiceWorld > 3) {
      twoPairs.innerHTML = 24;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 48;
      }
    }
  }

  if (quadsLogicEnable) {
    if (sixDiceWorld > 3) {
      quads.innerHTML = 74;
      if (doubleWorld == 1) {
        quads.innerHTML = 98;
      }
    }
  }

  if (pokerLogicEnable) {
    if (sixDiceWorld > 4) {
      poker.innerHTML = 130;
      if (doubleWorld == 1) {
        poker.innerHTML = 160;
      }
    }
  }

  if (fullHouseLogicEnable) {
    if (sixDiceWorld > 4) {
      fullHouse.innerHTML = 30;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 60;
      }
    }
  }
}

function twoPairsLogic() {
  if (twoPairsLogicEnable) {
    if (oneDieWorld == 2 && twoDiceWorld == 2) {
      twoPairs.innerHTML = 6;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 12;
      }
    }
    if (oneDieWorld == 2 && threeDiceWorld == 2) {
      twoPairs.innerHTML = 8;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 16;
      }
    }
    if (oneDieWorld == 2 && fourDiceWorld == 2) {
      twoPairs.innerHTML = 10;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 20;
      }
    }
    if (oneDieWorld == 2 && fiveDiceWorld == 2) {
      twoPairs.innerHTML = 12;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 24;
      }
    }
    if (oneDieWorld == 2 && sixDiceWorld == 2) {
      twoPairs.innerHTML = 14;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 28;
      }
    }

    if (twoDiceWorld == 2 && threeDiceWorld == 2) {
      twoPairs.innerHTML = 10;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 20;
      }
    }
    if (twoDiceWorld == 2 && fourDiceWorld == 2) {
      twoPairs.innerHTML = 12;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 24;
      }
    }
    if (twoDiceWorld == 2 && fiveDiceWorld == 2) {
      twoPairs.innerHTML = 14;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 28;
      }
    }
    if (twoDiceWorld == 2 && sixDiceWorld == 2) {
      twoPairs.innerHTML = 16;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 32;
      }
    }

    if (threeDiceWorld == 2 && fourDiceWorld == 2) {
      twoPairs.innerHTML = 14;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 28;
      }
    }
    if (threeDiceWorld == 2 && fiveDiceWorld == 2) {
      twoPairs.innerHTML = 16;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 32;
      }
    }
    if (threeDiceWorld == 2 && sixDiceWorld == 2) {
      twoPairs.innerHTML = 18;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 36;
      }
    }

    if (fourDiceWorld == 2 && fiveDiceWorld == 2) {
      twoPairs.innerHTML = 18;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 36;
      }
    }
    if (fourDiceWorld == 2 && sixDiceWorld == 2) {
      twoPairs.innerHTML = 20;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 40;
      }
    }

    if (fiveDiceWorld == 2 && sixDiceWorld == 2) {
      twoPairs.innerHTML = 22;
      if (doubleWorld == 1) {
        twoPairs.innerHTML = 44;
      }
    }
  }
}

function straightFlushLogic() {
  if (straightFlushLogicEnable) {
    if (
      oneDieWorld == 1 &&
      twoDiceWorld == 1 &&
      threeDiceWorld == 1 &&
      fourDiceWorld == 1 &&
      fiveDiceWorld == 1
    ) {
      straightFlush.innerHTML = 15;
      if (doubleWorld == 1) {
        straightFlush.innerHTML = 30;
      }
    }
  }
}

function royalFlushLogic() {
  if (royalFlushLogicEnable) {
    if (
      twoDiceWorld == 1 &&
      threeDiceWorld == 1 &&
      fourDiceWorld == 1 &&
      fiveDiceWorld == 1 &&
      sixDiceWorld == 1
    ) {
      royalFlush.innerHTML = 20;
      if (doubleWorld == 1) {
        royalFlush.innerHTML = 40;
      }
    }
  }
}

function fullHouseLogic() {
  if (fullHouseLogicEnable) {
    if (oneDieWorld == 2 && twoDiceWorld == 3) {
      fullHouse.innerHTML = 8;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 16;
      }
    }
    if (oneDieWorld == 2 && threeDiceWorld == 3) {
      fullHouse.innerHTML = 11;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 22;
      }
    }
    if (oneDieWorld == 2 && fourDiceWorld == 3) {
      fullHouse.innerHTML = 14;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 28;
      }
    }
    if (oneDieWorld == 2 && fiveDiceWorld == 3) {
      fullHouse.innerHTML = 17;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 34;
      }
    }
    if (oneDieWorld == 2 && sixDiceWorld == 3) {
      fullHouse.innerHTML = 20;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 40;
      }
    }

    if (oneDieWorld == 3 && twoDiceWorld == 2) {
      fullHouse.innerHTML = 7;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 14;
      }
    }
    if (oneDieWorld == 3 && threeDiceWorld == 2) {
      fullHouse.innerHTML = 9;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 18;
      }
    }
    if (oneDieWorld == 3 && fourDiceWorld == 2) {
      fullHouse.innerHTML = 11;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 22;
      }
    }
    if (oneDieWorld == 3 && fiveDiceWorld == 2) {
      fullHouse.innerHTML = 13;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 26;
      }
    }
    if (oneDieWorld == 3 && sixDiceWorld == 2) {
      fullHouse.innerHTML = 15;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 30;
      }
    }

    if (twoDiceWorld == 2 && threeDiceWorld == 3) {
      fullHouse.innerHTML = 13;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 26;
      }
    }
    if (twoDiceWorld == 2 && fourDiceWorld == 3) {
      fullHouse.innerHTML = 16;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 32;
      }
    }
    if (twoDiceWorld == 2 && fiveDiceWorld == 3) {
      fullHouse.innerHTML = 19;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 38;
      }
    }
    if (twoDiceWorld == 2 && sixDiceWorld == 3) {
      fullHouse.innerHTML = 22;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 44;
      }
    }

    if (twoDiceWorld == 3 && threeDiceWorld == 2) {
      fullHouse.innerHTML = 12;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 24;
      }
    }
    if (twoDiceWorld == 3 && fourDiceWorld == 2) {
      fullHouse.innerHTML = 14;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 28;
      }
    }
    if (twoDiceWorld == 3 && fiveDiceWorld == 2) {
      fullHouse.innerHTML = 16;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 32;
      }
    }
    if (twoDiceWorld == 3 && sixDiceWorld == 2) {
      fullHouse.innerHTML = 18;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 36;
      }
    }

    if (threeDiceWorld == 2 && fourDiceWorld == 3) {
      fullHouse.innerHTML = 18;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 36;
      }
    }
    if (threeDiceWorld == 2 && fiveDiceWorld == 3) {
      fullHouse.innerHTML = 21;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 42;
      }
    }
    if (threeDiceWorld == 2 && sixDiceWorld == 3) {
      fullHouse.innerHTML = 24;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 48;
      }
    }

    if (threeDiceWorld == 3 && fourDiceWorld == 2) {
      fullHouse.innerHTML = 13;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 26;
      }
    }
    if (threeDiceWorld == 3 && fiveDiceWorld == 2) {
      fullHouse.innerHTML = 19;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 38;
      }
    }
    if (threeDiceWorld == 3 && sixDiceWorld == 2) {
      fullHouse.innerHTML = 21;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 42;
      }
    }

    if (fourDiceWorld == 3 && fiveDiceWorld == 2) {
      fullHouse.innerHTML = 22;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 44;
      }
    }
    if (fourDiceWorld == 3 && sixDiceWorld == 2) {
      fullHouse.innerHTML = 24;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 48;
      }
    }

    if (fourDiceWorld == 2 && fiveDiceWorld == 3) {
      fullHouse.innerHTML = 23;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 46;
      }
    }
    if (fourDiceWorld == 2 && sixDiceWorld == 3) {
      fullHouse.innerHTML = 26;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 52;
      }
    }

    if (fiveDiceWorld == 2 && sixDiceWorld == 3) {
      fullHouse.innerHTML = 28;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 56;
      }
    }

    if (fiveDiceWorld == 3 && sixDiceWorld == 2) {
      fullHouse.innerHTML = 27;
      if (doubleWorld == 1) {
        fullHouse.innerHTML = 54;
      }
    }
  }
}
