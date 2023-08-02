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

let diceChosen = []
let diceChosenID = []

// functions 

function rollAll() {
  diceArray.sort(() => 0.5 - Math.random())
}


