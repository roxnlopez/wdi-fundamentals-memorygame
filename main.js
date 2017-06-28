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

console.log("Hello World");

var cardsInPlay = [];


var checkForMatch = function(){
	this.setAttribute('src', cards[cardId].cardImage);
var checkForMatch = function(){
	console.log(cards[cardId].cardImage);
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};
};
console.log("Roxann is my name");

var flipCard = function(){
	this.getAttribute('data-id');
	checkForMatch();
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);	
	console.log(cards.cardImage);
	console.log(cards.suit);
	document.addEventListener('click', cardElement);
};
console.log("JS is hard");
var createBoard = function () {
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		document.addEventListener('click', cardElement);
		document.getElementById('game-board').appendChild(cardElement);
	}
};
createBoard();
console.log("Roxann is my name");


