// const table = document.getElementById("table");
// table.style.backgroundColor = "rgb(152,228,70)";
// table.style.height = "500px";
// table.style.display = "flex";
// table.style.flexDirection = "column";
// table.style.alignItems = "center";
// table.style.paddingTop = "100px";


// document.body.style.fontFamily = "sans-serif";


const dealButton = document.querySelector('#deal-button');
const dealerHand = document.querySelector('#dealer-hand');
const playerHand = document.querySelector('#player-hand');
const hitButton = document.querySelector('#hit-button');


dealButton.addEventListener('click', function() {
  const card1 = document.createElement('img');
  const card2 = document.createElement('img');
  const card3 = document.createElement('img');
  const card4 = document.createElement('img');
  card1.setAttribute('src', './resources/2_of_clubs.png');
  card2.setAttribute('src', './resources/10_of_diamonds.png');
  card3.setAttribute('src', './resources/6_of_hearts.png');
  card4.setAttribute('src', './resources/8_of_clubs.png');
  dealerHand.append(card1);
  dealerHand.append(card2);
  playerHand.append(card3);
  playerHand.append(card4);
})

hitButton.addEventListener('click', function() {
  const images = document.createElement('img');
  images.setAttribute('src', './resources/5_of_clubs.png');
  playerHand.append(images)
})

var kingOfHearts = {
  point: 13, suit: 'hearts'
}     

var aceOfDiamonds = {point: 1, suit: 'diamonds'};