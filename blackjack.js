var deck = [
  aceOfDiamonds = { 
    point: 1,
    suit: 'diamonds'
  },
  twoOfDiamonds = { 
    point: 2,
    suit: 'diamonds'
  },
  threeOfDiamonds = { 
    point: 3,
    suit: 'diamonds'
  },
  fourOfDiamonds = { 
    point: 4,
    suit: 'diamonds'
  },
  fiveOfDiamonds = { 
    point: 5,
    suit: 'diamonds'
  },
  sixOfDiamonds = { 
    point: 6,
    suit: 'diamonds'
  },
  sevenOfDiamonds = { 
    point: 7,
    suit: 'diamonds'
  },
  eightOfDiamonds = { 
    point: 8,
    suit: 'diamonds'
  },
  nineOfDiamonds = { 
    point: 9,
    suit: 'diamonds'
  },
  tenOfDiamonds = { 
    point: 10,
    suit: 'diamonds'
  },
  jackOfDiamonds = { 
    point: 11,
    suit: 'diamonds'
  },
  queenOfDiamonds = { 
    point: 12,
    suit: 'diamonds'
  },
  kingOfDiamonds = { 
    point: 13,
    suit: 'diamonds'
  },
  
  aceOfHearts = { 
    point: 1,
    suit: 'diamonds'
  },
  twoOfHearts = { 
  point: 2,
    suit: 'diamonds'
  },
  threeOfHearts = { 
    point: 3,
    suit: 'diamonds'
  },
  fourOfHearts = { 
    point: 4,
    suit: 'diamonds'
  },
  fiveOfHearts = { 
    point: 5,
    suit: 'diamonds'
  },
  sixOfHearts = { 
    point: 6,
    suit: 'diamonds'
  },
  sevenOfHearts = { 
    point: 7,
    suit: 'diamonds'
  },
  eightOfHearts = { 
    point: 8,
    suit: 'diamonds'
  },
  nineOfHearts = { 
    point: 9,
    suit: 'diamonds'
  },
  tenOfHearts = { 
    point: 10,
    suit: 'diamonds'
  },
  jackOfHearts = { 
    point: 11,
    suit: 'diamonds'
  },
  queenOfHearts = { 
    point: 12,
    suit: 'diamonds'
  },
  kingOfHearts = { 
    point: 13,
    suit: 'diamonds'
  },
  
  aceOfSpades = { 
    point: 1,
    suit: 'diamonds'
  },
  twoOfSpades = { 
    point: 2,
    suit: 'diamonds'
  },
  threeOfSpades = { 
    point: 3,
    suit: 'diamonds'
  },
  fourOfSpades = { 
    point: 4,
    suit: 'diamonds'
  },
  fiveOfSpades = { 
    point: 5,
    suit: 'diamonds'
  },
  sixOfSpades = { 
    point: 6,
    suit: 'diamonds'
  },
  sevenOfSpades = { 
    point: 7,
    suit: 'diamonds'
  },
  eightOfSpades = { 
    point: 8,
    suit: 'diamonds'
  },
  nineOfSpades = { 
    point: 9,
    suit: 'diamonds'
  },
  tenOfSpades = { 
    point: 10,
    suit: 'diamonds'
  },
  jackOfSpades = { 
    point: 11,
    suit: 'diamonds'
  },
  queenOfSpades = { 
    point: 12,
    suit: 'diamonds'
  },
  kingOfSpades = { 
    point: 13,
    suit: 'diamonds'
  },
  
  aceOfClubs = { 
    point: 1,
    suit: 'diamonds'
  },
  twoOfClubs = { 
    point: 2,
    suit: 'diamonds'
  },
  threeOfClubs = { 
    point: 3,
    suit: 'diamonds'
  },
  fourOfClubs = { 
    point: 4,
    suit: 'diamonds'
  },
  fiveOfClubs = { 
    point: 5,
    suit: 'diamonds'
  },
  sixOfClubs = { 
    point: 6,
    suit: 'diamonds'
  },
  sevenOfClubs = { 
    point: 7,
    suit: 'diamonds'
  },
  eightOfClubs = { 
    point: 8,
    suit: 'diamonds'
  },
  nineOfClubs = { 
    point: 9,
    suit: 'diamonds'
  },
  tenOfClubs = { 
    point: 10,
    suit: 'diamonds'
  },
  jackOfClubs = { 
    point: 11,
    suit: 'diamonds'
  },
  queenOfClubs = { 
    point: 12,
    suit: 'diamonds'
  },
  kingOfClubs = { 
    point: 13,
    suit: 'diamonds'
  },
];

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
});

hitButton.addEventListener('click', function() {
  const images = document.createElement('img');
  images.setAttribute('src', './resources/5_of_clubs.png');
  playerHand.append(images)
});
