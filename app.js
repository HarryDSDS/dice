// selectors czy chuj
const diceGrid = document.querySelector(".dice-grid");
const diceGridSelected = document.querySelector(".dice-grid-selected");
const schoolOne = document.querySelector(".school-one");
const schoolTwo = document.querySelector(".school-two");
const schoolThree = document.querySelector(".school-three");
const schoolFour = document.querySelector(".school-four");
const schoolFive = document.querySelector(".school-five");
const schoolSix = document.querySelector(".school-six");
let schoolResult = document.getElementById("school-result");

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
    // debugger
    const clickedDice = e.target;
    console.log(clickedDice.id)
    let clickedDiceID = 0
    
    // debugger;
    // if (idZero || idOne || idTwo || idThree || idFour) {
    //   btnRollSelected.addEventListener("click", () => {
    //     diceGrid.removeChild(clickedDice);
    //   });
    // } else {
  
    // }

    const nameDice = clickedDice.name;

    // for id = 0
    if (clickedDice.id == "0") {
      clickedDice.setAttribute('id', '0')
      if (idZero == false && idZeroCount % 2 !== 0) {
        btnRollSelected.addEventListener("click", () => {
            diceGrid.appendChild(clickedDice);
          });
        diceChosen.pop(clickedDice);
        idZeroCount++;
        if (clickedDice.id == "0") {
          clickedDice.setAttribute("src", `img/${nameDice}.png`);
          idZero = true;
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
      else if (idZero == true && idZeroCount % 2 === 0) {
        if (clickedDice.id == "0") {
          console.log(clickedDice.id)
          diceChosen.push(clickedDice);
          btnRollSelected.addEventListener("click", () => {
            diceGrid.removeChild(clickedDice);
          });
          idZeroCount++;
          idZero = false;
          clickedDice.setAttribute("src", `img/${nameDice}rev.png`);
          diceChosen.push(clickedDice)
        }
      }
    }

    // end for id = 0
    // for id = 1
    if ((clickedDice.id == "1")) {
      // debugger;
      console.log(clickedDice.id)
      if (idOne == false && idOneCount % 2 !== 0) {
        diceChosen.pop(clickedDice);
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
          diceChosen.push(clickedDice);
          idOneCount++;
          idOne = false;
          clickedDice.setAttribute("src", `img/${nameDice}rev.png`);
        }
      }
    }

    // end for id = 1
    // for id = 2
    if (clickedDice.id == "2") {
      if (idTwo == false && idTwoCount % 2 !== 0) {
        diceChosen.pop(clickedDice);
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
          diceChosen.push(clickedDice);
          idTwoCount++;
          idTwo = false;
          clickedDice.setAttribute("src", `img/${nameDice}rev.png`);
        }
      }
    }

    // end for id = 2
    // // for id = 3
    if ((clickedDice.id == "3")) {
      if (idThree == false && idThreeCount % 2 !== 0) {
        diceChosen.pop(clickedDice);
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
          diceChosen.push(clickedDice);
          idThreeCount++;
          idThree = false;
          clickedDice.setAttribute("src", `img/${nameDice}rev.png`);
          clickedDice.setAttribute("id", "3");
        }
      }
    }

    // // end for id = 3
    // for id = 4
    if ((clickedDice.id == "4")) {
      if (idFour == false && idFourCount % 2 !== 0) {
        diceChosen.pop(clickedDice);
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
          diceChosen.push(clickedDice);
          idFourCount++;
          idFour = false;
          clickedDice.setAttribute("src", `img/${nameDice}rev.png`);
          clickedDice.setAttribute("id", "4");
        }
      }
    }

    // end for id = 4

    // for oneDie
    if (oneLogicEnable) {
      if(clickedDice.id == '0'){
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
        //   console.log('asd')
        // }
      }
      }
    }
    if (oneLogicEnable) {
      if(clickedDice.id == '1'){
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
      if(clickedDice.id == '2'){
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
      if(clickedDice.id=='3'){
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
      if(clickedDice.id=='4'){
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
      if(clickedDice.id=='0'){
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
      if(clickedDice.id=='1'){
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
      if(clickedDice.id=='2'){
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
      if(clickedDice.id=='3'){
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
      if(clickedDice.id=='4'){
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
      if (clickedDice.id=='0'){
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
      if(clickedDice.id=='1'){
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
      if(clickedDice.id=='2'){
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
      if(clickedDice.id=='3'){
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
      if(clickedDice.id=='4'){
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
      if(clickedDice.id=='0'){
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
      if(clickedDice.id=='1'){
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
      if(clickedDice.id=='2'){
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
      if(clickedDice.id =='3'){
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
      if(clickedDice.id=='4'){
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
      if(clickedDice.id=='0'){
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
    if (fiveLogicEnable) {
      if(clickedDice.id='1'){
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
      if(clickedDice.id=='2'){
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
      if(clickedDice.id=='3'){
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
      if(clickedDice.id=='4'){
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
    // for sixDice
    if (sixLogicEnable) {
      if(clickedDice.id=='0'){
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
      if(clickedDice.id=='1'){
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
      if(clickedDice.id=='2'){
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
      if(clickedDice.id=='3'){
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
      if(clickedDice.id=='4'){
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
