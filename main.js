console.log("Up and running!");

var cards = [
	{
       rank: "queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png"
   },
   {
       rank: "queen",
       suit: "diamonds",
       cardImage: "images/queen-of-diamonds.png"
   },
   {
       rank: "king",
       suit: "hearts",
       cardImage: "images/king-of-hearts.png"
   },
   {
       rank: "king",
       suit: "diamonds",
       cardImage: "images/king-of-diamonds.png"
   }
];

var cardsInPlay = [];

var checkForMatch = function (a) {
	if (cardsInPlay.length === 2) {	
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
}
};
//console.log("Roxann is my name");
function flipCard () {
	//this.getAttribute();	
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[this.getAttribute('data-id')].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch(cardId);
}

var createBoard = function () {
	for (var i=0; i<cards.length; i++) {	
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		document.getElementById("game-board").appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
	}
};

createBoard();



