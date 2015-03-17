function Card(value, suit) {
	this.value = value;
	this.suit = suit;
}

Card.prototype.view = function() {
		console.log( this.value + " of " + this.suit);
	}

function Deck(inputDeck) {
	this.deck = inputDeck;
}

function createDeck() {
	var suits = ["harts", "spades", "dimonds","clubs"];
	var numbers = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine","ten", "jack", "queen","king"];
	var deck = [];
	suits.forEach(function(suit) {
		numbers.forEach(function(number) {
			deck.push(new Card(suit, number));
		})
	})
	return deck;
}

var myDeck = new Deck(createDeck());
console.log(myDeck.deck);
