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

Deck.prototype.shuffleDeck = function() {
	var shuffledDeck = [];
	while (shuffledDeck.length < 52) {
		if (this.deck.length ===1){
			shuffledDeck.push(this.deck[0]);
		} else {
			var randNumber = Math.floor(Math.random() * (this.deck.length - 1)) + 1;
			shuffledDeck.push(this.deck[randNumber]);
			this.deck.splice(randNumber,1);
		}	
	}
	return shuffledDeck;
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
var newDeck = myDeck.shuffleDeck();
console.log(newDeck);

function Dealer(inputDeck, players) {
	this.currentDeck= inputDeck;
	this.players= players;
}

Dealer.prototype.dealCards = function() {
	var currentDeck = this.currentDeck;
	for (var count = 5; count > 0; count--)  {
		this.players.forEach(function(player) {
			player.getCard(currentDeck.shift());
		})
	}
}	

Dealer.prototype.viewPlayerCards  = function() {
	this.players.forEach(function(player) {
		player.viewHand();
	})
}


function Player(name){
	this.name = name;
	this.hand = [];
}

Player.prototype.getCard = function(card) {
	this.hand.push(card)
}

Player.prototype.viewHand = function() {
	console.log(this.name + "'s hand is: ");
	this.hand.forEach(function(card) {
		card.view()
	});
}

function createPlayers() {
	var players = ["Joe","Bob","Becca","Daisy"];
	var playerObject = [];
	players.forEach(function(name) {
		playerObject.push(new Player(name));
	})
	return playerObject;
}

var myDealer = new Dealer(newDeck, createPlayers());
myDealer.dealCards();
myDealer.viewPlayerCards();


