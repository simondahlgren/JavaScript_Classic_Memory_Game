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
    
}
]

const grid = document.querySelector('.grid')

// skapa brädet 

function createBoard() {
 for (let i = 0; i < cardArray.length; i++) {
     let card = document.createElement('img')
     card.setAttribute('src', 'Images/blank.jpg')
     card.setAttribute('data-id', i)
     //card.removeEventListener('click', flipcard)
     grid.appendChild(card)
 }

}
createBoard()

}
)


