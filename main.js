function DeckConstructor(){
  if (!(this instanceof DeckConstructor)){
    return new DeckConstructor();
  }
  this.suits = ['\u2660', '\u2665', '\u2666', '\u2663'];
  this.cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Knight', 'Queen', 'King']
  this.deck = [];
}
DeckConstructor.prototype.reset = function(){
  this.deck = [];
  for (i=0;i<this.suits.length;i++){
    for (j=0;j<this.cards.length;j++){
      this.deck.push(this.suits[i]+this.cards[j]);
    }
  }
  return this;
}
DeckConstructor.prototype.shuffle = function(){
  for (i=0;i<this.deck.length;i++){
      random = Math.floor(Math.random() * this.deck.length)
      var extra = this.deck[i];
      this.deck[i] = this.deck[random];
      this.deck[random] = extra;
  }
  return this;
}
DeckConstructor.prototype.deal = function(){
    random = Math.floor(Math.random() * this.deck.length)
    var card = this.deck[random];
    this.deck.splice(random, 1);
    return card;
}
DeckConstructor.prototype.show = function(){
    console.log(this.deck);
    return this;
}

var deck = new DeckConstructor()
deck.reset().shuffle()



function PlayerConstructor(name){
  if (!(this instanceof PlayerConstructor)){
    return new PlayerConstructor();
  }
  this.name = name;
  this.hand = [];
  this
}
PlayerConstructor.prototype.show = function(){
    console.log(this.hand);
    return this;
}
PlayerConstructor.prototype.take = function(){
    this.hand.push(deck.deal());
    return this;
}
PlayerConstructor.prototype.discard = function(card){
    // var index = this.hand.indexOf(card);
    var index = card;
    this.hand.splice(index, 1);
    return this;
}
PlayerConstructor.prototype.reset = function(){
    this.hand = [];
    return this;
}

var player = new PlayerConstructor('Vasya')
var player2 = new PlayerConstructor('Masha')

console.log(player.name)
player.take().take().take().take().show()
player.discard(2).show()

console.log(player2.name)
player2.take().take().take().take().show()
player2.discard(1).show()
// deck.show()
// deck.reset().show()
// player.reset().show()
// player2.reset().show()
