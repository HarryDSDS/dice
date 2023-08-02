// selectors czy chuj
const diceShowcase = document.querySelector('.dice-showcase')
const diceGrid = document.querySelector('.dice-grid')

// buttons 
const btnRollAll = document.querySelector('.btn-roll-all')
const btnRollSelected = document.querySelector('.btn-roll-selected')

// arrays
const diceArray = [
  {
    name: '1',
    img: 'img/1.png'
  },
  {
    name: '2',
    img: 'img/2.png'
  },
  {
    name: '3',
    img: 'img/3.png'
  },
  {
    name: '4',
    img: 'img/4.png'
  },
  {
    name: '5',
    img: 'img/5.png'
  },
  {
    name: '6',
    img: 'img/6.png'
  }
]
diceArray.sort(() => 0.5 - Math.random())
let diceChosen = []
let diceChosenID = []

// functions 

function rollAll() {
  for (let i = 0; i < diceArray.length; i++) {
    const dice = document.createElement('img')
    const diceName = diceArray[i].name
    console.log(diceName)
    dice.setAttribute('src', `img/${diceName}.png`)
    dice.setAttribute('data-id', i)
    console.log(diceArray)
    console.log(dice)
    // dice.addEventListener('click', throwDice())
    diceGrid.appendChild(dice)
 }


}
function throwDice() {
  let diceID = this.getAttribute('data-id')
  diceChosen.push(diceArray[diceID].name)
  diceChosenID.push(diceID)
  this.setAttribute('src', diceArray[diceID].img)
}
btnRollAll.addEventListener('click', () => {
  diceShowcase.classList.add('dice-gone')
  rollAll()
})

