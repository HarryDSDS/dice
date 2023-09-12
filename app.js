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
let schoolSum = 0;
let oneLogicEnable = true;
let twoLogicEnable = true;
let threeLogicEnable = true;
let fourLogicEnable = true;
let fiveLogicEnable = true;
let sixLogicEnable = true;
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
let doubleWorld = 0;

const schoolResults = {};

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
          // oneDieFinalSchool++
          oneDieLogic();
        }
      } else if (rollSelectedCount == 2) {
        if (diceGridSelectedChildren[i].name == "1") {
          oneDie++;
          // oneDieFinalSchool++
          oneDieLogic();
        }
      }
    }
    if (rollSelectedCount == 2) {
      oneDie = oneDie - oneDieRoll;
      // oneDieFinalSchool = oneDieFinalSchool - oneDieRoll
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
            clickedDice.id;
          }
          if (clickedDice.name == "2") {
            twoDice++;
            twoDiceLogic();
          }
          if (clickedDice.name == "3") {
            threeDice++;
            threeDiceLogic();
          }
          if (clickedDice.name == "4") {
            fourDice++;
            fourDiceLogic();
          }
          if (clickedDice.name == "5") {
            fiveDice++;
            fiveDiceLogic();
          }
          if (clickedDice.name == "6") {
            sixDice++;
            sixDiceLogic();
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
          }
          if (clickedDice.name == "2") {
            twoDice++;
            twoDiceLogic();
          }
          if (clickedDice.name == "3") {
            threeDice++;
            threeDiceLogic();
          }
          if (clickedDice.name == "4") {
            fourDice++;
            fourDiceLogic();
          }
          if (clickedDice.name == "5") {
            fiveDice++;
            fiveDiceLogic();
          }
          if (clickedDice.name == "6") {
            sixDice++;
            sixDiceLogic();
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
          }
          if (clickedDice.name == "2") {
            twoDice++;
            twoDiceLogic();
          }
          if (clickedDice.name == "3") {
            threeDice++;
            threeDiceLogic();
          }
          if (clickedDice.name == "4") {
            fourDice++;
            fourDiceLogic();
          }
          if (clickedDice.name == "5") {
            fiveDice++;
            fiveDiceLogic();
          }
          if (clickedDice.name == "6") {
            sixDice++;
            sixDiceLogic();
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
          }
          if (clickedDice.name == "2") {
            twoDice++;
            twoDiceLogic();
          }
          if (clickedDice.name == "3") {
            threeDice++;
            threeDiceLogic();
          }
          if (clickedDice.name == "4") {
            fourDice++;
            fourDiceLogic();
          }
          if (clickedDice.name == "5") {
            fiveDice++;
            fiveDiceLogic();
          }
          if (clickedDice.name == "6") {
            sixDice++;
            sixDiceLogic();
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
          }
          if (clickedDice.name == "2") {
            twoDice++;
            twoDiceLogic();
          }
          if (clickedDice.name == "3") {
            threeDice++;
            threeDiceLogic();
          }
          if (clickedDice.name == "4") {
            fourDice++;
            fourDiceLogic();
          }
          if (clickedDice.name == "5") {
            fiveDice++;
            fiveDiceLogic();
          }
          if (clickedDice.name == "6") {
            sixDice++;
            sixDiceLogic();
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
          // } else if (!idZero && (!idOne || !idTwo || !idThree || !idFour)) {
          //   ('asd')
          // }
        }
      }
      clickedDice.id;
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
    clickedDice.id;
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
  btnRollAll.disabled = false;
  btnRollSelected.disabled = true;
  if (oneLogicEnable) {
    btnSchoolConfirmOne.disabled = false;
  }
  if (twoLogicEnable) {
    btnSchoolConfirmTwo.disabled = false;
  }
  if (threeLogicEnable) {
    btnSchoolConfirmThree.disabled = false;
  }
  if (fourLogicEnable) {
    btnSchoolConfirmFour.disabled = false;
  }
  if (fiveLogicEnable) {
    btnSchoolConfirmFive.disabled = false;
  }
  if (sixLogicEnable) {
    btnSchoolConfirmSix.disabled = false;
  }
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

function schoolScoreFinal(object) {
  return Object.values(object).reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
} // sum of score for each die in school

rollSelected();
diceSelect();
schoolScoreFinal(schoolResults);
btnRollSelected.addEventListener("click", () => {
  rollCount++;
  rollCountCount();
  rollSelectedCount++;
  diceCheck();
  callDiceLogic();
});
btnRollAll.addEventListener("click", () => {
  doubleWorld = 1;
  rollCount++;
  diceChosen = [];
  btnRollSelected.disabled = false;
  zeroDice();
  rollAll();
  diceDeselect();
  rollCountCount();
  callDiceLogic();
});

schoolResult.innerHTML = schoolScoreFinal(schoolResults);

btnSchoolConfirmOne.addEventListener("click", () => {
  const oneDieFinalSchool = parseInt(schoolOne.innerHTML);
  schoolResults.oneDieResult = oneDieFinalSchool;
  schoolOne.innerHTML = oneDieFinalSchool;
  oneLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  schoolResult.innerHTML = schoolScoreFinal(schoolResults);
});
btnSchoolConfirmTwo.addEventListener("click", () => {
  const twoDiceFinalSchool = parseInt(schoolTwo.innerHTML);
  schoolResults.twoDieResult = twoDiceFinalSchool;

  schoolSum = schoolSum + schoolResults.twoDiceResult;
  twoLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  schoolResult.innerHTML = schoolScoreFinal(schoolResults);
});
btnSchoolConfirmThree.addEventListener("click", () => {
  const threeDiceFinalSchool = parseInt(schoolThree.innerHTML);
  schoolResults.threeDieResult = threeDiceFinalSchool;
  threeLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  schoolResult.innerHTML = schoolScoreFinal(schoolResults);
});
btnSchoolConfirmFour.addEventListener("click", () => {
  const fourDiceFinalSchool = parseInt(schoolFour.innerHTML);
  schoolResults.fourDieResult = fourDiceFinalSchool;
  schoolSum = schoolSum + schoolResults.fourDieResult;
  fourLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  schoolResult.innerHTML = schoolScoreFinal(schoolResults);
});
btnSchoolConfirmFive.addEventListener("click", () => {
  const fiveDiceFinalSchool = parseInt(schoolFive.innerHTML);
  schoolResults.fiveDieResult = fiveDiceFinalSchool;
  fiveLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  schoolResult.innerHTML = schoolScoreFinal(schoolResults);
});
btnSchoolConfirmSix.addEventListener("click", () => {
  const sixDiceFinalSchool = parseInt(schoolSix.innerHTML);
  schoolResults.sixDieResult = sixDiceFinalSchool;
  sixLogicEnable = false;
  btnSchoolConfirmOne.disabled = true;
  btnSchoolConfirmTwo.disabled = true;
  btnSchoolConfirmThree.disabled = true;
  btnSchoolConfirmFour.disabled = true;
  btnSchoolConfirmFive.disabled = true;
  btnSchoolConfirmSix.disabled = true;
  btnRollAll.disabled = true;
  btnRollSelected.disabled = true;
  schoolResult.innerHTML = schoolScoreFinal(schoolResults);
});

btnNextRound.addEventListener("click", () => {
  pickLock();
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
  if (oneDie == 0) {
    onePair.innerHTML = "---";
  }

  if (oneDie > 1) {
    onePair.innerHTML = 2;
    if ((doubleWorld = 1)) {
      onePair.innerHTML = 4;
    }
  }

  if (oneDie > 2) {
    triple.innerHTML = 3;
    if ((doubleWorld = 1)) {
      triple.innerHTML = 6;
    }
  }

  if (oneDie > 3) {
    twoPairs.innerHTML = 4;
    quads.innerHTML = 54;
    if ((doubleWorld = 1)) {
      twoPairs.innerHTML = 8;
      quads.innerHTML = 58;
    }
  }

  if (oneDie > 4) {
    poker.innerHTML = 105;
    if ((doubleWorld = 1)) {
      poker.innerHTML = 110;
    }
  }

  if (schoolOne.innerHTML == "---") {
    btnSchoolConfirmOne.disabled = true;
  } else {
    btnSchoolConfirmOne.disabled = false;
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

  if (twoDice == 0) {
    onePair.innerHTML = "---";
  }

  if (twoDice > 1) {
    onePair.innerHTML = 4;
    if ((doubleWorld = 1)) {
      onePair.innerHTML = 8;
    }
  }

  if (twoDice > 2) {
    triple.innerHTML = 6;
    if ((doubleWorld = 1)) {
      triple.innerHTML = 12;
    }
  }

  if (twoDice > 3) {
    twoPairs.innerHTML = 8;
    quads.innerHTML = 58;
    if ((doubleWorld = 1)) {
      twoPairs.innerHTML = 8;
      quads.innerHTML = 116;
    }
  }

  if (twoDice > 4) {
    poker.innerHTML = 110;
    if ((doubleWorld = 1)) {
      poker.innerHTML = 120;
    }
  }

  if (schoolTwo.innerHTML == "---") {
    btnSchoolConfirmTwo.disabled = true;
  } else {
    btnSchoolConfirmTwo.disabled = false;
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

  if (threeDice == 0) {
    onePair.innerHTML = "---";
  }

  if (threeDice > 1) {
    onePair.innerHTML = 6;
    if ((doubleWorld = 1)) {
      onePair.innerHTML = 12;
    }
  }

  if (threeDice > 2) {
    triple.innerHTML = 9;
    if ((doubleWorld = 1)) {
      triple.innerHTML = 18;
    }
  }

  if (threeDice > 3) {
    twoPairs.innerHTML = 12;
    quads.innerHTML = 62;
    if ((doubleWorld = 1)) {
      twoPairs.innerHTML = 24;
      quads.innerHTML = 74;
    }
  }

  if (threeDice > 4) {
    poker.innerHTML = 115;
    if ((doubleWorld = 1)) {
      poker.innerHTML = 130;
    }
  }

  if (schoolThree.innerHTML == "---") {
    btnSchoolConfirmThree.disabled = true;
  } else {
    btnSchoolConfirmThree.disabled = false;
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

  if (fourDice == 0) {
    onePair.innerHTML = "---";
  }

  if (fourDice > 1) {
    onePair.innerHTML = 8;
    if ((doubleWorld = 1)) {
      onePair.innerHTML = 16;
    }
  }

  if (fourDice > 2) {
    triple.innerHTML = 12;
    if ((doubleWorld = 1)) {
      triple.innerHTML = 24;
    }
  }

  if (fourDice > 3) {
    twoPairs.innerHTML = 16;
    quads.innerHTML = 66;
    if ((doubleWorld = 1)) {
      twoPairs.innerHTML = 32;
      quads.innerHTML = 82;
    }
  }

  if (fourDice > 4) {
    poker.innerHTML = 120;
    if ((doubleWorld = 1)) {
      poker.innerHTML = 140;
    }
  }

  if (schoolFour.innerHTML == "---") {
    btnSchoolConfirmFour.disabled = true;
  } else {
    btnSchoolConfirmFour.disabled = false;
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

  if (fiveDice == 0) {
    onePair.innerHTML = "---";
  }

  if (fiveDice > 1) {
    onePair.innerHTML = 10;
    if ((doubleWorld = 1)) {
      onePair.innerHTML = 20;
    }
  }

  if (fiveDice > 2) {
    triple.innerHTML = 15;
    if ((doubleWorld = 1)) {
      triple.innerHTML = 30;
    }
  }

  if (fiveDice > 3) {
    twoPairs.innerHTML = 20;
    quads.innerHTML = 70;
    if ((doubleWorld = 1)) {
      twoPairs.innerHTML = 40;
      quads.innerHTML = 90;
    }
  }

  if (fiveDice > 4) {
    poker.innerHTML = 125;
    if ((doubleWorld = 1)) {
      poker.innerHTML = 150;
    }
  }

  if (schoolFive.innerHTML == "---") {
    btnSchoolConfirmFive.disabled = true;
  } else {
    btnSchoolConfirmFive.disabled = false;
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

  if (sixDice == 0) {
    onePair.innerHTML = "---";
  }

  if (sixDice > 1) {
    onePair.innerHTML = 12;
    if ((doubleWorld = 1)) {
      onePair.innerHTML = 24;
    }
  }

  if (sixDice > 2) {
    triple.innerHTML = 18;
    if ((doubleWorld = 1)) {
      triple.innerHTML = 36;
    }
  }

  if (sixDice > 3) {
    twoPairs.innerHTML = 24;
    quads.innerHTML = 74;
    if ((doubleWorld = 1)) {
      twoPairs.innerHTML = 48;
      quads.innerHTML = 98;
    }
  }

  if (sixDice > 4) {
    poker.innerHTML = 130;
    if ((doubleWorld = 1)) {
      poker.innerHTML = 160;
    }
  }

  if (schoolSix.innerHTML == "---") {
    btnSchoolConfirmSix.disabled = true;
  } else {
    btnSchoolConfirmSix.disabled = false;
  }
}
