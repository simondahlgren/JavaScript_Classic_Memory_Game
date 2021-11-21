document.addEventListener('DOMContentLoaded', () => {

// kort alternativ



const cardArray = [
{
name: 'Apple',
img: 'Images/Apple.jpg'

},
{
    name: 'Blueberry',
    img: 'Images/blueberry.jpg'
    
},

{
    name: 'Car',
    img: 'Images/car.jpg'
    
},
    
{
    name: 'Hamburger',
    img: 'Images/hamburger.jpg'
    
},

{
    name: 'Mountain',
    img: 'Images/Mountain.jpg'
    
},

{
    name: 'Ocean',
    img: 'Images/ocean.jpg'
    
},
{
    name: 'Pizza',
    img: 'Images/Pizza.jpg'
    
},
{
    name: 'Boat',
    img: 'Images/boat.jpg'
    
},
{
    name: 'Apple',
    img: 'Images/Apple.jpg'
    
    },
    {
        name: 'Blueberry',
        img: 'Images/blueberry.jpg'
        
    },
    
    {
        name: 'Car',
        img: 'Images/car.jpg'
        
    },
        
    {
        name: 'Hamburger',
        img: 'Images/hamburger.jpg'
        
    },
    
    {
        name: 'Mountain',
        img: 'Images/Mountain.jpg'
        
    },
    
    {
        name: 'Ocean',
        img: 'Images/ocean.jpg'
        
    },
    {
        name: 'Pizza',
        img: 'Images/Pizza.jpg'
        
    },
    {
        name: 'Boat',
        img: 'Images/boat.jpg'
        
    }
]


cardArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChoosen = []
let cardsChoosenId = []
let cardsWon = []

// skapa brädet 

function createBoard() {
 for (let i = 0; i < cardArray.length; i++) {
     const card = document.createElement('img')
     card.setAttribute('src', 'Images/blank.jpg')
     card.setAttribute('data-id', i)
     card.addEventListener('click', flipCard)
     grid.appendChild(card)
 }

}

function checkForMatch(){
    let cards =  document.querySelectorAll('img')
    const optionOneId = cardsChoosenId[0]
    const optionTwoId = cardsChoosenId[1]
    if (cardsChoosen[0] === cardsChoosen[1]){
        alert('Du hittade en matchning! Bra jobbat!'), 
        cards[optionOneId].setAttribute('src', 'Images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'Images/white.jpg')
        cardsWon.push(cardsChoosen)
    }
   else {
    cards[optionOneId].setAttribute('src', 'Images/blank.jpg')
    cards[optionTwoId].setAttribute('src', 'Images/blank.jpg')
}
cardsChoosen = []
cardsChoosenId = []
resultDisplay.textContent = cardsWon.length
if (cardsWon.length === cardArray.length/2){
resultDisplay.textContent = 'Grattis! Du hittade alla paren!'

}
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChoosen.push(cardArray[cardId].name)
    cardsChoosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChoosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
    
    
    }


createBoard()

}
)


