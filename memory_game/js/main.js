cards = [
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
 	cardImage: "images/king-of-diamonda.png"
 }]

cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
}
function flipCard() {
var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank); 
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();

}
};

//create a gameboard
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		//logic here
		var cardElement = document.createElement('img');

		//image back of cards
		cardElement.setAttribute('src', 'images/back.png');

		//track which card it is
		cardElement.setAttribute('data-id', i)

		//game card stored in cardElement
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
};
createBoard();