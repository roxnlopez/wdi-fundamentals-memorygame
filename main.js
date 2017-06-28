//console.log("Up and running!");

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
<<<<<<< HEAD

var checkForMatch = function(){
	this.setAttribute('src', cards[cardId].cardImage);
=======
var checkForMatch = function(){
	console.log(cards[cardId].cardImage);
>>>>>>> 55eb3e3371745f0f51f4ce620a35ea48036ffe24
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};
<<<<<<< HEAD

=======
>>>>>>> 55eb3e3371745f0f51f4ce620a35ea48036ffe24
var flipCard = function(){
	this.getAttribute('data-id');
	checkForMatch();
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);	
	console.log(cards.cardImage);
	console.log(cards.suit);
<<<<<<< HEAD
	document.addEventListener('click', cardElement);
=======
>>>>>>> 55eb3e3371745f0f51f4ce620a35ea48036ffe24
};

var createBoard = function () {
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img');
<<<<<<< HEAD
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
=======
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		document.addEventListener('click', cardElement);
>>>>>>> 55eb3e3371745f0f51f4ce620a35ea48036ffe24
		document.getElementById('game-board').appendChild(cardElement);
	}
};
createBoard();


